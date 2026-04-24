import React, { useState, useEffect, useCallback, useRef } from 'react';

const CodingStats = () => {
  const [githubStats, setGithubStats] = useState(null);
  const [wakaToday, setWakaToday] = useState(null);
  const [wakaYesterday, setWakaYesterday] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOnline, setIsOnline] = useState(false);
  const [contributions, setContributions] = useState(0);
  
  const username = 'Nishal77';
  const onlineCheckInterval = useRef(null);
  const dailyRefreshInterval = useRef(null);
  const hasInitialized = useRef(false);
  const isFetching = useRef(false);

  // Fetch REAL GitHub contributions using GraphQL API via backend
  const fetchGitHubContributions = useCallback(async () => {
    try {
      // Use cache-busting timestamp to ensure fresh data
      const timestamp = Date.now();
      const response = await fetch(`/api/github/stats?username=${username}&t=${timestamp}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch GitHub stats: ${response.status}`);
      }

      const data = await response.json();
      
      // Validate response structure
      if (!data || !data.user) {
        throw new Error('Invalid GitHub data received');
      }

      // Get REAL contribution count from API response
      const realContributions = data?.contributionData?.totalContributions;
      
      // Only update if we have valid contribution data
      if (realContributions !== undefined && realContributions !== null) {
        setContributions(realContributions);
      } else {
        // If API didn't return contributions, set to 0 (not estimate)
        setContributions(0);
      }

      // Set full GitHub stats for other uses
      setGithubStats(data);
      
      return data;
    } catch (err) {
      throw new Error(`GitHub API error: ${err.message}`);
    }
  }, [username]);

  // Fetch GitHub stats (user data, repos, etc.)
  const fetchGitHubStats = useCallback(async (silent = false) => {
    if (isFetching.current && !silent) return;
    
    try {
      if (!silent) isFetching.current = true;
      
      // Use cache-busting to ensure fresh data
      const timestamp = Date.now();
      const githubResponse = await fetch(`/api/github/stats?username=${username}&t=${timestamp}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      });
      
      if (!githubResponse.ok) {
        const errorData = await githubResponse.json().catch(() => ({}));
        const errorMessage = errorData.details || errorData.error || `Failed to fetch GitHub stats: ${githubResponse.status}`;
        throw new Error(errorMessage);
      }
      
      const githubData = await githubResponse.json();
      
      // Validate response
      if (!githubData || !githubData.user) {
        throw new Error('Invalid GitHub data received');
      }
      
      // Update contributions from API response - Ensure we use REAL data
      const realContributions = githubData?.contributionData?.totalContributions;
      
      // Only update if we have valid numeric contribution data (not null, not undefined, not NaN)
      if (realContributions !== undefined && 
          realContributions !== null && 
          !isNaN(realContributions) && 
          typeof realContributions === 'number') {
        setContributions(realContributions);
      } else {
        // If invalid data, keep previous value or set to 0
        setContributions(prev => prev || 0);
      }
      
      setGithubStats(githubData);
    } catch (err) {
      if (!githubStats && !silent) {
        setError(err.message);
      }
    } finally {
      if (!silent) isFetching.current = false;
    }
  }, [username, githubStats]);

  // Fetch WakaTime yesterday data
  const fetchWakaTimeYesterday = useCallback(async (silent = false) => {
    try {
      const timestamp = Date.now();
      const response = await fetch(`/api/wakatime/stats?range=yesterday&t=${timestamp}`, {
        cache: 'no-store',
      });
      if (response.ok) {
        const data = await response.json();
        setWakaYesterday(data);
      }
    } catch (err) {
      // Silently handle network errors
    }
  }, []);

  // Fetch WakaTime today data
  const fetchWakaTimeToday = useCallback(async (silent = false) => {
    try {
      const timestamp = Date.now();
      const response = await fetch(`/api/wakatime/stats?range=today&t=${timestamp}`, {
        cache: 'no-store',
      });
      if (response.ok) {
        const data = await response.json();
        const totalSeconds = data?.data?.grand_total?.total_seconds || 0;
        setWakaToday(data);
        setIsOnline(totalSeconds > 0);
      }
    } catch (err) {
      // Silently handle network errors
    }
  }, []);

  // Initial fetch function - fetches everything once with fresh data
  const fetchAllData = useCallback(async () => {
    if (isFetching.current) {
      return;
    }

    try {
      isFetching.current = true;
      setLoading(true);
      setError(null);

      // Fetch GitHub stats (includes contributions)
      await fetchGitHubStats(true);
      
      // Fetch WakaTime yesterday (with delay to avoid rate limiting)
      await new Promise(resolve => setTimeout(resolve, 1000));
      await fetchWakaTimeYesterday(true);
      
      // Fetch WakaTime today (with delay to avoid rate limiting)
      await new Promise(resolve => setTimeout(resolve, 1000));
      await fetchWakaTimeToday(true);

    } catch (err) {
      if (!githubStats) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
      isFetching.current = false;
    }
  }, [fetchGitHubStats, fetchWakaTimeYesterday, fetchWakaTimeToday, githubStats]);

  // Initialize on mount
  useEffect(() => {
    if (hasInitialized.current) {
      return;
    }
    
    hasInitialized.current = true;
    
    // Initial data fetch
    fetchAllData();

    // Calculate time until midnight (12:00 AM) for daily refresh
    const calculateMsUntilMidnight = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(0, 0, 0, 0); // 12:00 AM (midnight)
      midnight.setDate(midnight.getDate() + 1); // Next midnight
      return midnight.getTime() - now.getTime();
    };

    // Calculate random interval between 30-40 minutes
    const getRandomInterval = () => {
      const min = 30 * 60 * 1000;
      const max = 40 * 60 * 1000;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // Check online/offline status every 30-40 minutes
    const scheduleOnlineCheck = () => {
      const interval = getRandomInterval();
      onlineCheckInterval.current = setTimeout(async () => {
        await fetchWakaTimeToday(true);
        scheduleOnlineCheck();
      }, interval);
    };

    // Start online checking after initial load
    const initialDelay = 5 * 60 * 1000;
    const onlineCheckTimeout = setTimeout(() => {
      scheduleOnlineCheck();
    }, initialDelay);

    // Daily refresh at midnight (12:00 AM) - Refresh GitHub contributions
    const scheduleMidnightRefresh = () => {
      const msUntilMidnight = calculateMsUntilMidnight();
      
      const midnightTimeout = setTimeout(async () => {
        // Refresh GitHub stats (includes contributions) at midnight
        await fetchGitHubStats(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        await fetchWakaTimeYesterday(true);
        
        // Schedule next midnight refresh (24 hours from now)
        scheduleMidnightRefresh();
      }, msUntilMidnight);
      
      return midnightTimeout;
    };

    // Start the midnight refresh cycle
    const midnightTimeout = scheduleMidnightRefresh();

    return () => {
      if (onlineCheckInterval.current) {
        clearTimeout(onlineCheckInterval.current);
      }
      clearTimeout(onlineCheckTimeout);
      clearTimeout(midnightTimeout);
      if (dailyRefreshInterval.current) {
        clearInterval(dailyRefreshInterval.current);
      }
    };
  }, [fetchGitHubStats, fetchWakaTimeYesterday, fetchWakaTimeToday]);

  // Utility functions
  const formatTime = (seconds) => {
    if (!seconds || seconds === 0) return '0h 0m';
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours === 0) return `${minutes}m`;
    if (minutes === 0) return `${hours}h`;
    return `${hours}h ${minutes}m`;
  };

  const formatNumber = (num) => {
    if (num === null || num === undefined || num === 0) return '0';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const getTodayTime = () => {
    if (!wakaToday?.data) return null;
    const totalSeconds = wakaToday.data.grand_total?.total_seconds || 0;
    if (totalSeconds === 0) return null;
    return formatTime(totalSeconds);
  };

  const getYesterdayTime = () => {
    if (!wakaYesterday?.data) return null;
    const totalSeconds = wakaYesterday.data.grand_total?.total_seconds || 0;
    if (totalSeconds === 0) return null;
    return formatTime(totalSeconds);
  };

  const getEditor = () => {
    if (wakaToday?.data?.editors && wakaToday.data.editors.length > 0) {
      return wakaToday.data.editors[0].name || 'Editor';
    }
    if (wakaYesterday?.data?.editors && wakaYesterday.data.editors.length > 0) {
      return wakaYesterday.data.editors[0].name || 'Editor';
    }
    return 'Cursor';
  };

  // Check online status
  useEffect(() => {
    if (wakaToday?.data?.grand_total?.total_seconds > 0) {
      setIsOnline(true);
    } else {
      setIsOnline(false);
    }
  }, [wakaToday]);

  // Loading state
  if (loading && !githubStats) {
    return (
      <section className="bg-white dark:bg-[#09090b] transition-colors duration-500 mb-16">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-50 transition-colors leading-tight">
              Code Odyssey
            </h2>
            <p className="leading-relaxed text-xs sm:text-base text-black/60 dark:text-gray-400 transition-colors mb-4">
              {username}'s coding journey over the past year
            </p>
            <div className="mb-1">
              <p className="text-xs sm:text-base text-gray-900 dark:text-gray-50 transition-colors">
                Total: <span className="font-bold text-gray-900 dark:text-gray-50 transition-colors">...</span> contributions
              </p>
            </div>
            <div>
              <p className="text-xs sm:text-base text-gray-400">Loading activity...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error && !githubStats) {
    return (
      <section className="bg-white dark:bg-[#09090b] transition-colors duration-500 mb-16">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-50 transition-colors leading-tight">
              Code Odyssey
            </h2>
            <p className="leading-relaxed text-xs sm:text-base text-black/60 dark:text-gray-400 transition-colors mb-6">
              {username}'s coding journey over the past year
            </p>
            <div className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30 rounded-lg transition-colors">
              <p className="text-xs sm:text-sm text-red-600 dark:text-red-400 transition-colors mb-3">{error}</p>
              <button
                onClick={() => {
                  setError(null);
                  fetchAllData();
                }}
                className="px-4 py-2 text-xs bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const todayTime = getTodayTime();
  const yesterdayTime = getYesterdayTime();
  const editor = getEditor();

  return (
    <section className="bg-white dark:bg-[#09090b] transition-colors duration-500 mb-16">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        

        

    

        {/* Error state for background errors */}
        {error && githubStats && (
          <div className="mb-4 mt-4">
            <p className="text-xs sm:text-sm text-red-600 mb-2">{error}</p>
            <button
              onClick={() => {
                setError(null);
                fetchAllData();
              }}
              className="text-xs text-red-600 hover:text-red-700 underline"
            >
              Try again
            </button>
          </div>
        )}

        {/* Activity Overview */}
        {githubStats?.topRepos && githubStats.topRepos.length > 0 && (
          <div className="mt-4 pt-4 border-t border-dashed border-gray-300 dark:border-zinc-800 transition-colors">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-50 transition-colors mb-3">Activity overview</h3>
            <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-400 leading-relaxed transition-colors">
              <svg className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
              <p className="flex-1">
                <span className="text-gray-700 dark:text-gray-400 transition-colors">Contributed to</span>
                {' '}
                {githubStats.topRepos.slice(0, 3).map((repo, index, array) => (
                  <React.Fragment key={repo.id}>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 no-underline"
                      style={{ textDecoration: 'none' }}
                      onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                      onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                    >
                      {githubStats.user.login}/{repo.name}
                    </a>
                    {index < array.length - 1 && <span className="text-gray-700 dark:text-gray-400 transition-colors">, </span>}
                  </React.Fragment>
                ))}
                {githubStats.user.public_repos > 3 && (
                  <>
                    <span className="text-gray-700 dark:text-gray-400 transition-colors"> and </span>
                    <span className="font-medium text-gray-900 dark:text-gray-50 transition-colors">
                      {githubStats.user.public_repos - 3} other {githubStats.user.public_repos - 3 === 1 ? 'repository' : 'repositories'}
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CodingStats;
