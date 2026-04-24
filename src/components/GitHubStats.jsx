import React, { useState, useEffect, useCallback } from 'react';
import { Github, RefreshCw, Code } from 'lucide-react';

const GitHubStats = () => {
  const [stats, setStats] = useState(null);
  const [wakaToday, setWakaToday] = useState(null);
  const [wakaYesterday, setWakaYesterday] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [username] = useState('Nishal77');

  const fetchData = useCallback(async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }
      setError(null);

      // Fetch GitHub stats
      const githubResponse = await fetch(`/api/github/stats?username=${username}`);
      if (!githubResponse.ok) {
        const errorData = await githubResponse.json().catch(() => ({}));
        const errorMessage = errorData.details || errorData.error || `Failed to fetch GitHub stats: ${githubResponse.status}`;
        throw new Error(errorMessage);
      }
      const githubData = await githubResponse.json();
      
      // Validate response data
      if (!githubData || !githubData.user) {
        throw new Error('Invalid GitHub data received');
      }

      // Fetch today's coding time
      const todayResponse = await fetch('/api/wakatime/stats?range=today');
      let todayData = null;
      if (todayResponse.ok) {
        todayData = await todayResponse.json();
      }

      // Fetch yesterday's coding time
      const yesterdayResponse = await fetch('/api/wakatime/stats?range=yesterday');
      let yesterdayData = null;
      if (yesterdayResponse.ok) {
        yesterdayData = await yesterdayResponse.json();
      } else {
        // Fallback: try to get from last 7 days
        const weekResponse = await fetch('/api/wakatime/stats?range=last_7_days');
        if (weekResponse.ok) {
          const weekData = await weekResponse.json();
          yesterdayData = weekData;
        }
      }

      setStats(githubData);
      setWakaToday(todayData);
      setWakaYesterday(yesterdayData);
    } catch (err) {
      setError(err.message);
      // Silently handle errors
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [username]);

  useEffect(() => {
    fetchData();
    
    // Auto-refresh every 5 minutes
    const interval = setInterval(() => {
      fetchData(true);
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, [fetchData]);

  const formatTime = (seconds) => {
    if (!seconds || seconds === 0) return '0h 0m';
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours === 0) return `${minutes}m`;
    if (minutes === 0) return `${hours}h`;
    return `${hours}h ${minutes}m`;
  };

  const formatNumber = (num) => {
    if (!num) return '0';
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  const getTodayTime = () => {
    if (!wakaToday?.data) return null;
    const totalSeconds = wakaToday.data.grand_total?.total_seconds || 0;
    if (totalSeconds === 0) return null;
    return formatTime(totalSeconds);
  };

  const getYesterdayTime = () => {
    // If we have yesterday-specific data
    if (wakaYesterday?.data?.grand_total) {
      const totalSeconds = wakaYesterday.data.grand_total.total_seconds || 0;
      if (totalSeconds > 0) return formatTime(totalSeconds);
    }
    // Try to get from last 7 days data (yesterday would be index 1)
    if (wakaYesterday?.data?.days && Array.isArray(wakaYesterday.data.days)) {
      const yesterday = wakaYesterday.data.days[1] || wakaYesterday.data.days[0];
      if (yesterday?.grand_total) {
        const totalSeconds = yesterday.grand_total.total_seconds || 0;
        if (totalSeconds > 0) return formatTime(totalSeconds);
      }
    }
    return null;
  };

  const getEditor = () => {
    // Get most used editor from today
    if (wakaToday?.data?.editors && wakaToday.data.editors.length > 0) {
      return wakaToday.data.editors[0].name || 'Editor';
    }
    // Fallback to yesterday
    if (wakaYesterday?.data?.editors && wakaYesterday.data.editors.length > 0) {
      return wakaYesterday.data.editors[0].name || 'Editor';
    }
    return 'VS Code';
  };

  const getTotalContributions = () => {
    // Use contribution data from GitHub stats if available and valid
    if (stats?.contributionData?.totalContributions && stats.contributionData.totalContributions > 0) {
      return stats.contributionData.totalContributions;
    }
    // Fallback: estimate from repository activity
    if (stats?.user?.public_repos) {
      const repoEstimate = stats.user.public_repos * 50;
      const starsEstimate = Math.floor((stats?.totalStars || 0) / 10);
      const contributions = repoEstimate + starsEstimate;
      return contributions > 0 ? contributions : stats.user.public_repos * 30;
    }
    // Default fallback - use a reasonable estimate
    return stats?.user?.public_repos ? stats.user.public_repos * 30 : 0;
  };

  if (loading) {
    return (
      <section className="bg-white mb-12">
        <div className="w-full max-w-2xl mx-auto px-1">
          <div className="bg-white rounded-2xl p-8">
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-2 border-gray-200 border-t-gray-900"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // If there's an error but we have stats, show stats anyway
  if (error && !stats) {
    return (
      <section className="bg-white mb-12">
        <div className="w-full max-w-2xl mx-auto px-1">
          <div className="bg-white rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 leading-tight">
              GitHub Activity
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              {username}'s coding journey over the past year
            </p>
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600 mb-3">{error}</p>
              <button
                onClick={() => fetchData()}
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
  const totalContributions = getTotalContributions();

  return (
    <section className="bg-white mb-12">
      <div className="w-full max-w-2xl mx-auto px-1">
        <div className="bg-white rounded-2xl p-6 sm:p-8">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 leading-tight">
              GitHub Activity
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              {username}'s coding journey over the past year
            </p>
          </div>

          {/* Total Contributions */}
          <div className="mb-6">
            <p className="text-base text-gray-900">
              Total: <span className="font-bold text-gray-900">{formatNumber(totalContributions)}</span> contributions
            </p>
          </div>

          {/* Recent Activity */}
          <div className="space-y-3">
            {/* Yesterday - Main display */}
            {yesterdayTime && yesterdayTime !== '0h 0m' && (
              <div>
                <p className="text-base text-gray-900 leading-relaxed">
                  <span className="text-gray-900">Offline in</span>{' '}
                  <span className="text-gray-700">📦 {editor}</span>
                  {' - '}
                  <span className="text-gray-900">Yesterday worked</span>{' '}
                  <span className="font-bold text-gray-900">{yesterdayTime}</span>
                </p>
              </div>
            )}

            {/* Today - Optional, shown if available */}
            {todayTime && todayTime !== '0h 0m' && yesterdayTime !== todayTime && (
              <div>
                <p className="text-base text-gray-900 leading-relaxed">
                  <span className="text-gray-900">Offline in</span>{' '}
                  <span className="text-gray-700">📦 {editor}</span>
                  {' - '}
                  <span className="text-gray-900">Today worked</span>{' '}
                  <span className="font-bold text-gray-900">{todayTime}</span>
                </p>
              </div>
            )}

            {/* Fallback if no data */}
            {!todayTime && !yesterdayTime && !error && stats && (
              <div>
                <p className="text-base text-gray-500">
                  No recent coding activity tracked. Start coding to see your stats!
                </p>
              </div>
            )}

            {/* Error state */}
            {error && (
              <div>
                <p className="text-base text-red-600 mb-2">
                  {error}
                </p>
                <button
                  onClick={() => fetchData()}
                  className="text-sm text-red-600 hover:text-red-700 underline"
                >
                  Try again
                </button>
              </div>
            )}
          </div>

          {/* Hidden refresh button (accessible but not prominent) */}
          <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
            {stats?.user && (
              <a
                href={stats.user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-gray-900 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            )}
            <button
              onClick={() => fetchData(true)}
              disabled={refreshing}
              className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50"
              title="Refresh stats"
            >
              <RefreshCw className={`w-4 h-4 text-gray-400 ${refreshing ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
