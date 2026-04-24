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
      <section className="flex flex-col items-center bg-white min-h-screen">
        <div className="w-full max-w-2xl mx-auto flex flex-col items-start bg-white">
          <div className="w-full">
            <ProfileTop />
          </div>
          
          <div className="flex flex-col items-center justify-center w-full">
            {/* Top text */}
            <div className="text-center text-xs text-black opacity-50 mb-2 uppercase">
              qualification
            </div>
            {/* Vertical gradient line */}
            <div
              className="w-px h-16 mb-2 leading-tight opacity-40"
              style={{
                background: "linear-gradient(to bottom, #fff 0%, #e5e7eb 5%, #000 100%)"
              }}
            ></div>
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
