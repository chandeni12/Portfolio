import React, { useState, useEffect } from 'react';
import { Copy } from 'lucide-react';

const ProfileTop = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('hey@portfolio.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Silently handle copy failures
    }
  };

  return (
    <section className="py-2 bg-white dark:bg-[#09090b] transition-colors duration-500 flex flex-col justify-center mt-8">
      <div className="w-full max-w-2xl mx-auto px-1">
        {/* Profile Section */}
        <div className="profile-section flex justify-between items-center mb-8 mt-6 md:mt-2 w-full">
          {/* Left: Email and Morphing Text */}
          <div className="flex flex-col items-start min-w-0">
            <h1 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-gray-50 transition-colors leading-tight truncate font-suisse">
            <span className="inline-flex items-center">
              <span className="text-red-500 animate-spin mr-1">✱</span>
              hey@portfolio.com
            </span>
            </h1>
          </div>
          {/* Right: Time */}
          <div className="flex items-center">
            <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-300 font-mono bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-white/10 px-3 py-1.5 rounded-xl shadow-sm transition-colors">
              {/* <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> */}
              <span className="font-medium">
                {currentTime.toLocaleTimeString('en-IN', { 
                  timeZone: 'Asia/Kolkata', 
                  hour: '2-digit', 
                  minute: '2-digit', 
                  second: '2-digit', 
                  hour12: false 
                })}
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-xs transition-colors">INDIA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileTop;
