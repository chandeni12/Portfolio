import React, { useState, useEffect, useCallback } from 'react';
import { Clock, Code, TrendingUp, Calendar, RefreshCw } from 'lucide-react';

const WakaTimeStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchWakaTimeStats = useCallback(async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }
      setError(null);
      
      // Fetch last 7 days for more relevant recent data
      const response = await fetch('/api/wakatime/stats?range=last_7_days');
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.details || `Failed to fetch WakaTime stats: ${response.status}`);
      }
      
      const data = await response.json();
      setStats(data);
      setLastUpdated(new Date());
    } catch (err) {
      setError(err.message);
      // Silently handle errors
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchWakaTimeStats();
    
    // Auto-refresh every 5 minutes for real-time updates
    const interval = setInterval(() => {
      fetchWakaTimeStats(true);
    }, 5 * 60 * 1000); // 5 minutes

    return () => clearInterval(interval);
  }, [fetchWakaTimeStats]);

  const formatTime = (seconds) => {
    if (!seconds) return '0h 0m';
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  const formatTimeShort = (seconds) => {
    if (!seconds) return '0h';
    const hours = (seconds / 3600).toFixed(1);
    return `${hours}h`;
  };

  if (loading) {
    return (
      <section className="bg-white mb-12">
        <div className="w-full max-w-2xl mx-auto px-1">
          <div className="mb-6">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
              Coding Activity
            </h2>
            <p className="leading-relaxed text-xs sm:text-base text-black/60">
              Real-time tracking of my <span className="text-black font-semibold">development time</span> and <span className="text-black font-semibold">language usage</span>
            </p>
          </div>
          <div className="border border-gray-200 rounded-2xl p-6 bg-white">
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !stats || !stats.data) {
    return (
      <section className="bg-white mb-12">
        <div className="w-full max-w-2xl mx-auto px-1">
          <div className="mb-6">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
              Coding Activity
            </h2>
            <p className="leading-relaxed text-xs sm:text-base text-black/60">
              Real-time tracking of my <span className="text-black font-semibold">development time</span> and <span className="text-black font-semibold">language usage</span>
            </p>
          </div>
          <div className="border border-gray-200 rounded-2xl p-6 bg-white">
            <div className="text-center py-4">
              <p className="text-sm text-gray-500 mb-3">Unable to load coding stats</p>
              {error && (
                <p className="text-xs text-red-400 mb-3">{error}</p>
              )}
              <button
                onClick={() => fetchWakaTimeStats()}
                className="px-4 py-2 text-xs bg-black text-white rounded-lg hover:bg-black/80 transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const dailyAverage = stats.data?.daily_average_including_other_language || stats.data?.daily_average || 0;
  const totalTime = stats.data?.total_seconds_including_other_language || stats.data?.total_seconds || 0;
  const topLanguages = (stats.data?.languages || []).slice(0, 5);
  const bestDay = stats.data?.best_day || {};

  return (
    <section className="bg-white mb-12">
      <div className="w-full max-w-2xl mx-auto px-1">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
              Coding Activity
            </h2>
            <p className="leading-relaxed text-xs sm:text-base text-black/60 mt-1">
              Real-time tracking of my <span className="text-black font-semibold">development time</span> and <span className="text-black font-semibold">language usage</span>
            </p>
            {lastUpdated && (
              <p className="text-xs text-gray-400 mt-1">
                Updated {lastUpdated.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
              </p>
            )}
          </div>
          <button
            onClick={() => fetchWakaTimeStats(true)}
            disabled={refreshing}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors disabled:opacity-50"
            title="Refresh stats"
          >
            <RefreshCw className={`w-4 h-4 text-gray-600 ${refreshing ? 'animate-spin' : ''}`} />
          </button>
        </div>

        <div className="border border-gray-200 rounded-2xl p-4 sm:p-6 bg-white hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] transition-all duration-500">
          {/* Main Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Daily Average */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-4 border border-blue-200/50">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <h3 className="text-xs font-semibold text-gray-700">Daily Average</h3>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">
                {formatTime(dailyAverage)}
              </p>
            </div>

            {/* Total Time */}
            <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl p-4 border border-green-200/50">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <h3 className="text-xs font-semibold text-gray-700">Total Time</h3>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">
                {formatTimeShort(totalTime)}
              </p>
            </div>
          </div>

          {/* Best Day */}
          {bestDay.date && (
            <div className="mb-6 p-3 bg-gray-50 rounded-xl border border-gray-200">
              <div className="flex items-center gap-2 mb-1">
                <Calendar className="w-4 h-4 text-gray-600" />
                <span className="text-xs font-medium text-gray-700">Best Day</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  {new Date(bestDay.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
                <span className="text-sm font-bold text-gray-900">
                  {formatTime(bestDay.total_seconds)}
                </span>
              </div>
            </div>
          )}

          {/* Period Info */}
          <div className="mb-4 p-2 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-xs text-blue-700 font-medium">
              📊 Showing stats for: <span className="font-semibold">Last 7 Days</span>
            </p>
          </div>

          {/* Top Languages */}
          {topLanguages.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Code className="w-4 h-4" />
                Top Languages
              </h3>
              <div className="space-y-2">
                {topLanguages.map((lang) => {
                  const percentage = totalTime > 0 ? 
                    ((lang.total_seconds || 0) / totalTime * 100).toFixed(1) : 0;
                  const langName = lang.name || 'Unknown';
                  const langSeconds = lang.total_seconds || 0;
                  return (
                    <div key={langName} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-gray-700">{langName}</span>
                        <span className="text-gray-600">
                          {formatTimeShort(langSeconds)} ({percentage}%)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all duration-500"
                          style={{ width: `${Math.min(percentage, 100)}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* WakaTime Badge */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <a
              href="https://wakatime.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-gray-700 transition-colors"
            >
              <span>Powered by</span>
              <span className="font-semibold">WakaTime</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WakaTimeStats;

