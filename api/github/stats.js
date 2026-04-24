export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { username } = req.query;
    
    if (!username) {
      return res.status(400).json({ error: 'Username is required' });
    }

    // GitHub API token from environment variables (Vercel uses process.env)
    // For Vercel, process.env is automatically populated
    // For local dev, ensure .env file has GITHUB_TOKEN
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    
    // Prepare headers with token if available
    const githubHeaders = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'Portfolio-App'
    };
    
    // GitHub token authentication - supports both token and Bearer format
    if (GITHUB_TOKEN) {
      // Use Bearer for newer tokens (ghp_ or github_pat_), token for classic tokens
      if (GITHUB_TOKEN.startsWith('ghp_') || GITHUB_TOKEN.startsWith('github_pat_')) {
        githubHeaders['Authorization'] = `Bearer ${GITHUB_TOKEN}`;
      } else {
        githubHeaders['Authorization'] = `token ${GITHUB_TOKEN}`;
      }
    }
    
    // Fetch user data - try public API first (more reliable for specific username)
    let userData;
    try {
      const publicUserResponse = await fetch(`https://api.github.com/users/${username}`, {
        headers: githubHeaders
      });
      
      if (!publicUserResponse.ok) {
        const errorText = await publicUserResponse.text();
        
        // If authenticated and user not found, try authenticated endpoint
        if (GITHUB_TOKEN && publicUserResponse.status === 404) {
          const authUserResponse = await fetch('https://api.github.com/user', {
            headers: githubHeaders
          });
          if (authUserResponse.ok) {
            userData = await authUserResponse.json();
          } else {
            const authErrorText = await authUserResponse.text();
            throw new Error(`Failed to fetch GitHub user data: ${publicUserResponse.status} - ${errorText}`);
          }
        } else {
          throw new Error(`GitHub API error ${publicUserResponse.status}: ${errorText.substring(0, 200)}`);
        }
      } else {
        userData = await publicUserResponse.json();
      }
    } catch (fetchError) {
      throw new Error(`Network error fetching GitHub data: ${fetchError.message}`);
    }

    // Fetch repositories with authentication for higher rate limits
    let reposData;
    try {
      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=stars&per_page=100&type=all`, {
        headers: githubHeaders
      });

      if (!reposResponse.ok) {
        const errorText = await reposResponse.text();
        throw new Error(`Failed to fetch GitHub repositories: ${reposResponse.status} - ${errorText.substring(0, 200)}`);
      }

      reposData = await reposResponse.json();
    } catch (reposError) {
      // If repos fail, we can still return user data with empty repos
      reposData = [];
    }

    // Calculate stats (handle empty repos array)
    // Ensure reposData is always an array
    const safeReposData = Array.isArray(reposData) ? reposData : [];
    const totalStars = safeReposData.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);
    const totalForks = safeReposData.reduce((sum, repo) => sum + (repo.forks_count || 0), 0);
    
    // Sort repos by recent activity (updated_at) and contributions (stars + forks)
    const topRepos = safeReposData
      .sort((a, b) => {
        // Prioritize recently updated repos
        const aUpdated = new Date(a.updated_at || 0).getTime();
        const bUpdated = new Date(b.updated_at || 0).getTime();
        const timeDiff = bUpdated - aUpdated;
        
        // Also consider activity (stars + forks)
        const aActivity = (a.stargazers_count || 0) + (a.forks_count || 0);
        const bActivity = (b.stargazers_count || 0) + (b.forks_count || 0);
        
        // Combine both factors: recent updates + activity
        return (bActivity * 0.3 + (timeDiff / (1000 * 60 * 60 * 24))) - (aActivity * 0.3 + (timeDiff / (1000 * 60 * 60 * 24)));
      })
      .slice(0, 10)
      .map(repo => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        language: repo.language,
        updated_at: repo.updated_at
      }));

    // Fetch REAL GitHub contributions using GraphQL API
    let totalContributions = 0;
    let contributionCalendar = [];
    let graphqlSuccess = false;
    
    // Always try to fetch real contributions if token is available
    if (GITHUB_TOKEN) {
      try {
        // Calculate date range for past year (GraphQL API uses ISO 8601 DateTime)
        // Set to ensure we get the full year of contributions (past 365 days)
        const today = new Date();
        // Use current moment as end time
        const toDate = today.toISOString();
        
        // Go back exactly 1 year from today
        const oneYearAgo = new Date(today);
        oneYearAgo.setFullYear(today.getFullYear() - 1);
        // Start from beginning of that day to get full year
        oneYearAgo.setHours(0, 0, 0, 0);
        
        // GitHub GraphQL API expects ISO 8601 DateTime format
        const fromDate = oneYearAgo.toISOString();
        
        // GitHub GraphQL API query for contributions
        // Only get commit contributions (most accurate representation)
        const graphqlQuery = {
          query: `
            query($login: String!, $from: DateTime!, $to: DateTime!) {
              user(login: $login) {
                contributionsCollection(from: $from, to: $to) {
                  contributionCalendar {
                    totalContributions
                    weeks {
                      contributionDays {
                        date
                        contributionCount
                      }
                    }
                  }
                }
              }
            }
          `,
          variables: {
            login: username,
            from: fromDate,
            to: toDate
          }
        };

        const graphqlResponse = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${GITHUB_TOKEN}`,
            'Content-Type': 'application/json',
            'User-Agent': 'Portfolio-App'
          },
          body: JSON.stringify(graphqlQuery)
        });

        if (graphqlResponse.ok) {
          const graphqlData = await graphqlResponse.json();
          
          // Check for GraphQL errors in response
          if (graphqlData.errors) {
            // GraphQL returned errors (e.g., rate limit, invalid token, authentication issues)
            // Log error details for debugging but don't use any data
            const errorMessages = graphqlData.errors.map(err => err.message).join('; ');
            // Silently handle - don't expose internal errors to client
          } else if (graphqlData.data) {
            if (graphqlData.data.user === null) {
              // User not found - don't use any data
            } else if (graphqlData.data.user && graphqlData.data.user.contributionsCollection) {
              const contributions = graphqlData.data.user.contributionsCollection;
              
              // Get total contributions from calendar (most accurate)
              if (contributions.contributionCalendar && 
                  contributions.contributionCalendar.totalContributions !== null && 
                  contributions.contributionCalendar.totalContributions !== undefined) {
                totalContributions = contributions.contributionCalendar.totalContributions;
                contributionCalendar = contributions.contributionCalendar.weeks || [];
                graphqlSuccess = true;
              }
            }
          }
        } else {
          // HTTP error (not GraphQL error) - could be authentication, rate limit, etc.
          const errorText = await graphqlResponse.text();
          // Response was not OK, don't use any data
        }
      } catch (graphqlError) {
        // Network error or other exception
        // Don't use any data from GraphQL
      }
    }
    
    // Only use fallback estimate if GraphQL completely failed or no token
    // AND we don't have a valid contribution count
    if (!graphqlSuccess && totalContributions === 0) {
      // Don't use estimate if GraphQL was attempted - it means there's an issue
      // Return 0 instead of a misleading estimate
      totalContributions = 0;
    }

    const stats = {
      user: userData,
      totalStars,
      totalForks,
      topRepos,
      contributionData: {
        totalContributions: totalContributions,
        longestStreak: 0,
        contributionCalendar: contributionCalendar
      }
    };

    res.status(200).json(stats);
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to fetch GitHub stats',
      details: error.message 
    });
  }
}

