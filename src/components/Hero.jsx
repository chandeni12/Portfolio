import React, { useRef, useState, useEffect } from "react";
import { TextAnimate } from "./magicui/text-animate";
import { MorphingTextDemo } from "./ui/specialization";
import TechnologyMarquee from "./TechnologyMarquee";
import { Copy } from "lucide-react";
import { Case2 as Skills } from "./skills";

export default function Hero() {
  const heroRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={heroRef}
      className="py-2 bg-white dark:bg-[#09090b] transition-colors duration-500 flex flex-col justify-center"
    >
      <div className="w-full max-w-2xl mx-auto px-1">
        {/* Profile Section
        <div className="profile-section flex justify-between items-center mb-24 mt-4 md:mt-0 w-full">
         
          <div className="flex flex-col items-start min-w-0">
            <h1 className="font-semibold text-base sm:text-lg text-gray-900 leading-tight truncate font-suisse">
              hey@portfolio.com
            </h1>
            <div className="flex items-center gap-3">
              <MorphingTextDemo />
            </div>
          </div>
        
          <div className="flex items-center">
            <div className="flex items-center gap-1 text-xs text-gray-600 font-mono bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-xl shadow-sm">
             
              <span className="font-medium">
                {currentTime.toLocaleTimeString('en-IN', { 
                  timeZone: 'Asia/Kolkata', 
                  hour: '2-digit', 
                  minute: '2-digit', 
                  second: '2-digit', 
                  hour12: false 
                })}
              </span>
              <span className="text-gray-500 text-xs">INDIA</span>
            </div>
          </div>
        </div> */}

        {/* Main Content */}
        <div className="main-content flex flex-col items-start text-left space-y-5">
          <div className="space-y-1">
            <h2 className="text-lg sm:text-2xl lg:text-3xl text-gray-900 dark:text-gray-50 transition-colors leading-tight font-bold max-w-3xl break-words flex items-center gap-2">
              Hi, I'm
              <span className="inline-flex items-center ml-0">
                <span
                  className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 mr-1.5 align-middle inline-block group"
                  style={{ transform: "rotate(8deg)" }}
                >
                  <img
                    src="/Smile Big.svg"
                    alt="Profile"
                    className="w-full h-full object-cover aspect-square rounded-xl transition-transform duration-300 group-hover:scale-110 dark:invert"
                  />
                </span>
                <span className="ml-1 text-black dark:text-white transition-colors font-bold">Chandeni</span>
              </span>
            </h2>
            <TextAnimate
              as="h2"
              className="text-lg sm:text-2xl lg:text-3xl text-gray-900 dark:text-gray-50 transition-colors leading-tight font-bold max-w-3xl break-words"
              animation="blurInUp"
              by="word"
              duration={0.8}
              delay={0.5}
              once={true}
            >
              Building Next-Gen Apps With Real Impact
            </TextAnimate>
          </div>
          <p className="text-xs sm:text-base text-black/60 dark:text-gray-400 transition-colors break-words">
            I build <span className="text-black dark:text-white transition-colors font-semibold">web apps</span> that solve <span className="text-black dark:text-white transition-colors font-semibold">real problems</span> through clean design and
            solid engineering. Currently developing{" "}
            <strong className="text-black dark:text-white transition-colors">
              Prime:Go App
            </strong>{" "}
            & early-stage ideas.
          </p>
          {/* CTA Buttons */}
          <div className="cta-section flex flex-row items-center gap-3 pt-2 w-full">
            {(() => {
              const [copied, setCopied] = React.useState(false);

              const handleClick = async (e) => {
                e.preventDefault();
                try {
                  await navigator.clipboard.writeText(
                    "chandenichan6@gmail.com"
                  );
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1500);
                } catch (err) {
                  // ignore copy error
                }
                // Always redirect to mailto
                window.location.href = "mailto:chandenichan6@gmail.com";
              };

              return (
                <a
                  href="mailto:chandenichan6@gmail.com"
                  onClick={handleClick}
                  className="px-4 py-2 text-xs sm:px-5 sm:py-2 sm:text-sm rounded-full font-medium bg-black dark:bg-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-200 transition-all duration-200 transform shadow flex-shrink-0 inline-flex items-center cursor-pointer"
                  type="button"
                >
                  <span className="flex flex-row items-center gap-2">
                    <Copy className="w-4 h-4" />
                    {copied ? "Copied!" : "Copy Email"}
                  </span>
                </a>
              );
            })()}

            <div className="flex items-center gap-2 px-4 py-2 text-xs sm:px-5 sm:py-2 sm:text-sm rounded-xl font-medium flex-shrink-0 bg-green-50 dark:bg-green-900/20 transition-colors">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-white dark:border-[#09090b]"></span>
              </span>
              <span className="text-green-700 dark:text-green-400 transition-colors font-semibold tracking-tight">Open to Opportunities</span>
            </div>
          </div>
        </div>

        {/* Technology Logos Marquee */}
        {/* <div className="mt-10">
          <TechnologyMarquee speed="normal" />
        </div> */}

        <div>
          <Skills />
        </div>
      </div>
    </section>
  );
}
