import React from "react";
import { Mail, Twitter, Linkedin, Code, Palette, ArrowRight, Handshake } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FooterNew() {
  const navigate = useNavigate();

  return (
    <section className="transition-colors duration-500">
      <div className="w-full max-w-2xl mx-auto">
        
        <div className="w-full max-w-2xl">
          {/* Call to Action Section */}
          <div className="space-y-2">
            {/* Main heading */}
            <div className="space-y-1">
            <div className="flex items-center gap-2 text-lg sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-50 transition-colors leading-tight">
              <h3>Let’s Work Together</h3>
              <Handshake />
            </div>
              <h2 className="text-xs sm:text-base font-normal leading-tight">
                <span className="text-black dark:text-white transition-colors font-semibold">
                  Hiring or building something meaningful?
                </span>{" "}
                <span className="text-black/60 dark:text-gray-400 transition-colors">
                  Let’s create it together — with creativity, technical expertise, and a product-first mindset
                </span>
              </h2>
            </div>

            {/* Add space between heading and CTA buttons */}
            <div className="h-4"></div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2">
              <button 
                onClick={() => navigate('/schedule')}
                className="bg-black dark:bg-white text-white dark:text-black text-xs sm:px-5 sm:py-2 sm:text-sm rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200 shadow-md">
                Schedule a Quick Call
              </button>
              <button 
                onClick={() => navigate('/resume')}
                className="bg-white dark:bg-zinc-900 text-black dark:text-white border border-gray-300 dark:border-white/20 shadow-md border-[0.5px] text-xs sm:px-5 sm:py-2 sm:text-sm rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white transition-colors duration-200 ">
                Get Resume
              </button>
            </div>
          </div>
        </div>

        {/* Contact Links Section */}
        <div className="mt-16 space-y-0 ">
          {/* Email */}
          <div className="group flex items-center justify-between py-3 border-b border-gray-200 dark:border-zinc-800 cursor-pointer transition-colors">
            <div className="flex items-center gap-3">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m2.357 7.714 6.98 4.654c.963.641 1.444.962 1.964 1.087.46.11.939.11 1.398 0 .52-.125 1.001-.446 1.964-1.087l6.98-4.654M7.157 19.5h9.686c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.31-1.311c.328-.642.328-1.482.328-3.162V9.3c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311c-.642-.327-1.482-.327-3.162-.327H7.157c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.31 1.311c-.328.642-.328 1.482-.328 3.162v5.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311c.642.327 1.482.327 3.162.327" />
              </svg>
              <span className="text-black/70 dark:text-gray-400 font-medium group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                Email
              </span>
            </div>
            <span className="text-black/70 dark:text-gray-400 text-sm group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
              chandenichan6@gmail.com
            </span>
          </div>

          

          {/* LinkedIn */}
          <div className="group flex items-center justify-between py-3 border-b border-gray-200 dark:border-zinc-800 cursor-pointer transition-colors">
            <div className="flex items-center gap-3">
              <span>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6zm5-1.775v.5" />
                  <path d="M8 16.375V10.75m4 5.625V13.5m0 0v-2.75m0 2.75c0-1.288 1.222-2 2.4-2 1.6 0 1.6 1.375 1.6 2.875v2" />
                </svg>
              </span>
              <span className="text-black/70 dark:text-gray-400 font-medium group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                LinkedIn
              </span>
            </div>
            <span className="text-black/70 dark:text-gray-400 text-sm group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
              Professional Journey
            </span>
          </div>

          
        </div>

        {/* Bottom decorative section */}
        <div className="mt-12 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Single line: Portfolio, copyright, location */}
            <div className="flex flex-col md:flex-row items-start md:items-center mb-1 md:mb-0 w-full justify-between">
              <div className="flex flex-col items-start">
                <span className="text-base text-black/85 dark:text-gray-200 transition-colors">
                  Built with Passion
                </span>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 flex flex-wrap items-center gap-2 transition-colors">
                  © {new Date().getFullYear()} Built with ❤️ & Code by Chandeni.
                </p>
              </div>
              <div className="flex flex-col items-center md:items-end justify-between">
                <div>
                  <span className="text-gray-700 dark:text-gray-400 font-medium text-xs transition-colors">
                    The Land of Spirituality and Philosophy
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400 font-semibold tracking-widest text-xs mt-1 uppercase transition-colors">
                    Mangalore ・ INDIA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
