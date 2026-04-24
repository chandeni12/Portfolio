import React from "react";
import { DotPattern } from "./magicui/dot-pattern";

export default function Quotes() {
  return (
    <section className="py-16 flex justify-center items-center">
      <div className="relative w-full max-w-2xl mx-auto px-4 flex flex-col items-center justify-center">
        {/* Modern quote container without borders */}
        <div className="relative w-full py-12 px-6 flex flex-col items-center justify-center overflow-visible">
          {/* Subtle background pattern for visual interest */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-5 dark:opacity-[0.02]">
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-100 dark:from-white dark:to-gray-300 rounded-3xl transition-colors"></div>
          </div>

          {/* Quote Text with enhanced typography
          <blockquote className="z-10 text-xl text-gray-900 leading-relaxed text-center mb-6 italic relative max-w-2xl">
            <span className="align-middle">
              "You miss 100% of the shots you don't take. Take the risk. Growth lives outside your comfort zone"
            </span>
          </blockquote> */}
          <blockquote className="relative w-full max-w-2xl mx-auto">
            <svg
              className="absolute top-0 left-0 w-16 h-16 text-gray-100 dark:text-zinc-800 transition-colors transform -translate-x-6 -translate-y-8"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                fill="currentColor"
              />
            </svg>

            <div className="relative z-10">
              <p className="text-gray-800 dark:text-gray-200 transition-colors sm:text-xl">
                <em>
                  You miss 100% of the shots you don't take. Take the risk.
                  Growth lives outside your comfort zone
                </em>
              </p>
            </div>
            {/* Enhanced Author section */}
            <div className="text-center z-10 mt-4">
              <div className="text-gray-600 dark:text-gray-400 transition-colors text-sm sm:text-base font-medium tracking-wide">
                — Wayne Gretzky
              </div>
              <div className="text-gray-400 dark:text-gray-500 transition-colors text-xs sm:text-sm mt-1 font-light">
                The Great One
              </div>
            </div>
          </blockquote>

          {/* Decorative elements */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-30"></div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-30"></div>
        </div>
      </div>
    </section>
  );
}
