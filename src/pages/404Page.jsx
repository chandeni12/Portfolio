import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, RefreshCw, Wifi, WifiOff } from 'lucide-react';

export default function NotFoundPage() {
  const navigate = useNavigate();
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check internet connectivity
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleGoHome = () => {
    setIsLoading(true);
    navigate('/', { replace: true });
  };

  const handleGoBack = () => {
    setIsLoading(true);
    navigate(-1);
  };

  const handleRefresh = () => {
    setIsLoading(true);
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Image */}
        <div className="mb-8">
          <img
            src="/404error.jpeg"
            alt="404 - Page Not Found"
            className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          {/* Fallback if image fails to load */}
          <div 
            className="w-full max-w-md mx-auto h-64 bg-gray-100 rounded-2xl shadow-lg flex items-center justify-center hidden"
            style={{ display: 'none' }}
          >
            <div className="text-center">
              <div className="text-6xl mb-4">😵</div>
              <p className="text-gray-600">Oops! Something went wrong</p>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            {isOnline ? '404' : 'No Internet'}
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
            {isOnline 
              ? "Page Not Found" 
              : "Connection Lost"
            }
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {isOnline 
              ? "The page you're looking for doesn't exist or has been moved. Let's get you back on track!"
              : "It looks like you're offline. Check your internet connection and try again."
            }
          </p>
        </div>

        {/* Connection Status */}
        <div className="mb-8">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
            isOnline 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {isOnline ? (
              <>
                <Wifi className="w-4 h-4" />
                Connected
              </>
            ) : (
              <>
                <WifiOff className="w-4 h-4" />
                Offline
              </>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleGoHome}
            disabled={isLoading}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Home className="w-4 h-4" />
            <span>Go Home</span>
          </button>

          <button
            onClick={handleGoBack}
            disabled={isLoading}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-800 rounded-xl font-medium hover:bg-gray-200 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>

          <button
            onClick={handleRefresh}
            disabled={isLoading}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-100 text-blue-800 rounded-xl font-medium hover:bg-blue-200 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
        </div>

        {/* Help Text */}
        <div className="mt-8 text-sm text-gray-500">
          <p>
            {isOnline 
              ? "If you believe this is an error, please contact support."
              : "Once you're back online, this page will automatically refresh."
            }
          </p>
        </div>

        {/* Auto-refresh for offline to online */}
        {!isOnline && (
          <div className="mt-4 text-xs text-gray-400">
            <p>This page will automatically refresh when you're back online.</p>
          </div>
        )}
      </div>
    </div>
  );
}
