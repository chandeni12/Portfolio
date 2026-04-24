import React, { useEffect } from "react";
import ProfileTop from "../components/ProfileTop";
import FooterNew from "../components/FooterNew";
import { Skiper39 } from "../components/ui/skiper-ui/skiper39";
import { Calendar, Mail, ArrowRight } from "lucide-react";

export default function ScheduleCallPage() {
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
              Schedule a Call
            </div>
            {/* Vertical gradient line */}
            <div
              className="w-px h-16 mb-2 leading-tight opacity-40"
              style={{
                background: "linear-gradient(to bottom, #fff 0%, #e5e7eb 5%, #000 100%)"
              }}
            ></div>
          </div>
          
          <div className="w-full mx-auto px-4 sm:px-0 mb-8 mt-4 text-center">
             <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-3 text-gray-900 leading-tight">
               Ready to Build Something <span className="text-black font-extrabold drop-shadow-sm">Amazing?</span>
             </h1>
             <p className="text-sm sm:text-base text-gray-600 mb-8 max-w-lg mx-auto">
               Whether you have a specific project in mind or just want to explore possibilities, I'm always open to discussing new opportunities.
             </p>

             <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 sm:p-12 flex flex-col items-center shadow-sm">
               <Calendar size={48} className="text-gray-300 mb-6" />
               <h2 className="text-xl font-semibold mb-2">Book a Quick Chat</h2>
               <p className="text-sm text-gray-500 mb-8">Click below to send an email. We can find a time that works best for both of us.</p>
               
               <a 
                 href="mailto:chandenichan6@gmail.com?subject=Schedule%20a%20Quick%20Call"
                 className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-black text-white hover:bg-gray-800 transition-all duration-200 shadow-md"
               >
                 <Mail size={18} />
                 <span>Email Me to Schedule</span>
                 <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
               </a>
             </div>
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
