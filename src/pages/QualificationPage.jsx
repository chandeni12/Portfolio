import React, { useEffect } from "react";
import ProfileTop from "../components/ProfileTop";
import FooterNew from "../components/FooterNew";
import Qualification from "../components/Qualification";
import { Skiper39 } from "../components/ui/skiper-ui/skiper39";

export default function QualificationPage() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="flex flex-col items-center bg-white dark:bg-[#09090b] text-gray-900 dark:text-gray-100 transition-colors duration-500 min-h-screen">
        <div className="w-full max-w-2xl mx-auto flex flex-col items-start bg-white dark:bg-[#09090b]">
          <div className="w-full">
            <ProfileTop />
          </div>
          
          <div className="flex flex-col items-center justify-center w-full">
            {/* Top text */}
            <div className="text-center text-xs text-black dark:text-white opacity-50 mb-2 uppercase">
              qualification
            </div>
            {/* Vertical gradient line */}
            <div className="w-px h-16 mb-2 leading-tight opacity-40 bg-gradient-to-b from-gray-200 via-gray-300 to-black dark:from-zinc-800 dark:via-zinc-700 dark:to-white"></div>
          </div>
          
          <div className="w-full mx-auto">
            <Qualification />
          </div>

          <div className="w-full max-w-2xl mx-auto mt-8">
            <FooterNew />
          </div>
        </div>
        <div className="w-full mt-8">
          <Skiper39 />
        </div>
      </section>
    </>
  );
}
