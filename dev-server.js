import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());


// WakaTime API credentials
const WAKATIME_API_KEY = process.env.WAKATIME_API_KEY || '';

// WakaTime stats endpoint - fetches last 7 days for more relevant data
app.get('/api/wakatime/stats', async (req, res) => {
  try {
    const { range = 'last_7_days' } = req.query;
    console.log(`Dev server: Fetching WakaTime stats for ${range}...`);
    
    // WakaTime API uses Basic auth: base64(api_key:)
    // The format is username=api_key, password=empty
    const authString = Buffer.from(`${WAKATIME_API_KEY}:`).toString('base64');
    
    // WakaTime API endpoints
    let endpoint;
    let useSummaries = false;
    
    if (range === 'today') {
      // Use summaries endpoint for today with proper date format and timezone
      const today = new Date();
      // Get date in YYYY-MM-DD format (local date)
      const todayStr = today.toISOString().split('T')[0];
      // Use summaries API with today's date
      endpoint = `https://wakatime.com/api/v1/users/current/summaries?start=${todayStr}&end=${todayStr}`;
      useSummaries = true;
    } else if (range === 'yesterday') {
      // Calculate yesterday's date in local time
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      // Get date in YYYY-MM-DD format
      const yesterdayStr = yesterday.toISOString().split('T')[0];
      endpoint = `https://wakatime.com/api/v1/users/current/summaries?start=${yesterdayStr}&end=${yesterdayStr}`;
      useSummaries = true;
    } else {
      // Standard stats endpoints
      const endpoints = {
        'last_7_days': 'https://wakatime.com/api/v1/users/current/stats/last_7_days',
        'last_30_days': 'https://wakatime.com/api/v1/users/current/stats/last_30_days',
        'all_time': 'https://wakatime.com/api/v1/users/current/stats/all_time'
      };
      endpoint = endpoints[range] || endpoints['last_7_days'];
    }
    
    console.log(`Fetching WakaTime from endpoint: ${endpoint}`);
    
    const response = await fetch(endpoint, {
      headers: {
        'Authorization': `Basic ${authString}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      
      // Handle rate limiting (429) gracefully
      if (response.status === 429) {
        console.warn(`WakaTime API rate limited for ${range}`);
        // Return empty data gracefully instead of error
        return res.status(200).json({
          data: {
            grand_total: { total_seconds: 0 },
            editors: [],
            languages: []
          }
        });
      }
      
      console.error('WakaTime API error:', response.status, errorText);
      // For today/yesterday, if API returns error, return empty data gracefully
      if (range === 'today' || range === 'yesterday') {
        console.warn(`WakaTime data not available for ${range}, returning empty data`);
        return res.status(200).json({
          data: {
            grand_total: { total_seconds: 0 },
            editors: [],
            languages: []
          }
        });
      }
      throw new Error(`WakaTime API error: ${response.status} - ${errorText.substring(0, 200)}`);
    }

    let data = await response.json();
    
    // Transform summaries data to match stats format if needed
    if (useSummaries && data.data && Array.isArray(data.data) && data.data.length > 0) {
      const summary = data.data[0];
      data = {
        data: {
          grand_total: summary.grand_total || { total_seconds: 0 },
          editors: summary.editors || [],
          languages: summary.languages || [],
          projects: summary.projects || []
        }
      };
    } else if (useSummaries && (!data.data || data.data.length === 0)) {
      // No data for today/yesterday
      data = {
        data: {
          grand_total: { total_seconds: 0 },
          editors: [],
          languages: []
        }
      };
    }
    
    console.log('Dev server: WakaTime stats fetched successfully for', range);
    
    res.json(data);
  } catch (error) {
    console.error('Dev server error:', error);
    res.status(500).json({ error: 'Failed to fetch WakaTime stats', details: error.message });
  }
});

// GitHub stats endpoint
app.get('/api/github/stats', async (req, res) => {
  try {
    const { username } = req.query;
    
    if (!username) {
      return res.status(400).json({ error: 'Username is required' });
    }

    console.log(`Dev server: Fetching GitHub stats for ${username}...`);
    
    // GitHub API token from environment variables
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    
    // Prepare headers with token if available
    const githubHeaders = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'Portfolio-App'
    };
    
    // GitHub token authentication - supports both token and Bearer format
    if (GITHUB_TOKEN) {
      // Use Bearer for newer tokens, token for classic tokens
      if (GITHUB_TOKEN.startsWith('ghp_') || GITHUB_TOKEN.startsWith('github_pat_')) {
        githubHeaders['Authorization'] = `Bearer ${GITHUB_TOKEN}`;
      } else {
        githubHeaders['Authorization'] = `token ${GITHUB_TOKEN}`;
      }
      console.log('Using GitHub token authentication');
    } else {
      console.log('No GitHub token found, using public API (rate limited)');
    }
    
    // Fetch user data - try public API first (more reliable)
    let userData;
    try {
      const publicUserResponse = await fetch(`https://api.github.com/users/${username}`, {
        headers: githubHeaders
      });
      
      if (!publicUserResponse.ok) {
        const errorText = await publicUserResponse.text();
        console.error('GitHub user API error:', publicUserResponse.status, errorText);
        
        // Check for rate limit
        if (publicUserResponse.status === 403) {
          const rateLimitInfo = publicUserResponse.headers.get('x-ratelimit-remaining');
          console.error('GitHub API rate limit exceeded. Remaining:', rateLimitInfo);
          throw new Error(`GitHub API rate limit exceeded. Please try again later.`);
        }
        
        // If authenticated and user not found, try authenticated endpoint
        if (GITHUB_TOKEN && publicUserResponse.status === 404) {
          console.log('User not found, trying authenticated endpoint...');
          const authUserResponse = await fetch('https://api.github.com/user', {
            headers: githubHeaders
          });
          if (authUserResponse.ok) {
            userData = await authUserResponse.json();
            console.log('Fetched authenticated user data:', userData.login);
          } else {
            const authErrorText = await authUserResponse.text();
            console.error('Authenticated endpoint error:', authUserResponse.status, authErrorText);
            throw new Error(`Failed to fetch GitHub user data: ${publicUserResponse.status} - ${errorText}`);
          }
        } else {
          throw new Error(`GitHub API error ${publicUserResponse.status}: ${errorText.substring(0, 200)}`);
        }
      } else {
        userData = await publicUserResponse.json();
        console.log(`Successfully fetched user data for: ${userData.login}`);
      }
    } catch (fetchError) {
      console.error('Fetch error details:', {
        message: fetchError.message,
        stack: fetchError.stack,
        name: fetchError.name
      });
      // Check if it's a network error
      if (fetchError.message.includes('fetch') || fetchError.message.includes('ECONNREFUSED') || fetchError.message.includes('network')) {
        throw new Error(`Network error: Unable to connect to GitHub API. Please check your internet connection.`);
      }
      // Re-throw with original message if it's already a meaningful error
      if (fetchError.message.includes('GitHub API')) {
        throw fetchError;
      }
      throw new Error(`Failed to fetch GitHub user data: ${fetchError.message}`);
    }

    // Fetch repositories with authentication for higher rate limits
    let reposData = [];
    try {
      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=stars&per_page=100&type=all`, {
        headers: githubHeaders
      });

      if (!reposResponse.ok) {
        const errorText = await reposResponse.text();
        console.error('GitHub repos API error:', reposResponse.status, errorText);
        
        // Check if it's a rate limit issue
        if (reposResponse.status === 403 && errorText.includes('rate limit')) {
          console.warn('GitHub API rate limit reached, continuing with user data only');
        } else if (reposResponse.status !== 404) {
          // Only throw if it's not a 404 (user might have no repos)
          throw new Error(`Failed to fetch GitHub repositories: ${reposResponse.status} - ${errorText.substring(0, 200)}`);
        }
      } else {
        reposData = await reposResponse.json();
        console.log(`Fetched ${reposData.length} repositories`);
      }
    } catch (reposError) {
      console.error('Repos fetch error:', reposError);
      // If repos fail, we can still return user data with empty repos
      console.warn('Continuing with empty repositories due to fetch error');
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
        
        console.log(`GraphQL: Fetching contributions from ${fromDate} to ${toDate} for user: ${username}`);
        
        // GitHub GraphQL API query for contributions
        // Only get contributionCalendar which gives the accurate count
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
            console.error('GraphQL errors:', JSON.stringify(graphqlData.errors, null, 2));
          } else if (graphqlData.data && graphqlData.data.user) {
            if (graphqlData.data.user === null) {
              console.warn(`GraphQL: User '${username}' not found`);
            } else if (graphqlData.data.user.contributionsCollection) {
              const contributions = graphqlData.data.user.contributionsCollection;
              
              // Get total contributions from calendar (most accurate)
              if (contributions.contributionCalendar && contributions.contributionCalendar.totalContributions !== null && contributions.contributionCalendar.totalContributions !== undefined) {
                totalContributions = contributions.contributionCalendar.totalContributions;
                contributionCalendar = contributions.contributionCalendar.weeks || [];
                graphqlSuccess = true;
                console.log(`GraphQL: Successfully fetched ${totalContributions} contributions`);
              } else {
                console.warn('GraphQL: contributionCalendar or totalContributions is missing');
              }
            }
          } else {
            console.warn('GraphQL: Unexpected response structure:', JSON.stringify(graphqlData).substring(0, 200));
          }
        } else {
          // HTTP error (not GraphQL error)
          const errorText = await graphqlResponse.text();
          console.error('GraphQL HTTP error:', graphqlResponse.status, errorText.substring(0, 200));
        }
      } catch (graphqlError) {
        // Network error or other exception
        console.error('GraphQL exception:', graphqlError.message);
      }
    } else {
      console.warn('No GITHUB_TOKEN found, cannot fetch real contributions');
    }
    
    // Only use fallback estimate if GraphQL completely failed or no token
    // AND we don't have a valid contribution count
    if (!graphqlSuccess && totalContributions === 0) {
      // Don't use misleading estimate - return 0 if GraphQL was attempted
      console.warn('GraphQL failed or returned 0, not using estimate. Returning 0 contributions.');
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

    console.log('Dev server: GitHub stats fetched successfully');
    console.log(`Summary: ${userData.login} - ${safeReposData.length} repos, ${totalStars} stars, ${totalContributions} contributions`);
    
    res.json(stats);
  } catch (error) {
    console.error('Dev server error:', error);
    res.status(500).json({ error: 'Failed to fetch GitHub stats', details: error.message });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Development server running' });
});

app.listen(PORT, () => {
  console.log(`Development server running on port ${PORT}`);
  console.log(`WakaTime API endpoint: http://localhost:${PORT}/api/wakatime/stats`);
  console.log(`GitHub API endpoint: http://localhost:${PORT}/api/github/stats`);
});
