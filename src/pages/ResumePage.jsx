import React, { useEffect } from "react";
import ProfileTop from "../components/ProfileTop";
import FooterNew from "../components/FooterNew";
import { Skiper39 } from "../components/ui/skiper-ui/skiper39";

export default function ResumePage() {
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
              Resume
            </div>
            {/* Vertical gradient line */}
            <div
              className="w-px h-16 mb-2 leading-tight opacity-40"
              style={{
                background: "linear-gradient(to bottom, #fff 0%, #e5e7eb 5%, #000 100%)"
              }}
            ></div>
          </div>
          
          <div className="w-full mx-auto px-4 sm:px-0 mb-8 max-w-2xl">
            <style>{`
              @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `}</style>
            
            {/* Header section (reminiscent of Hero/ProfileTop) */}
            <div className="mb-10 text-left border border-gray-200 rounded-3xl p-6 sm:p-8 bg-white relative overflow-hidden shadow-sm">
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start text-center sm:text-left">
                <img src="/Smile Big.svg" alt="Profile" className="w-16 h-16 mb-3 object-contain" />
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-2 tracking-tight">Chandeni</h1>
                <p className="text-sm sm:text-base text-black/60 font-medium mb-4 max-w-md">Full-Stack Web Developer & UI Designer</p>
                <div className="flex items-center gap-3">
                  <a href="mailto:chandenichan6@gmail.com" className="px-4 py-1.5 text-xs sm:text-sm bg-black text-white hover:bg-gray-800 transition-colors rounded-xl shadow font-semibold">Email Me</a>
                  <span className="px-4 py-1.5 text-xs sm:text-sm bg-green-50 text-green-700 border border-green-100 rounded-xl font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Available
                  </span>
                </div>
              </div>
            </div>

            {/* Resume Content Blocks */}
            <div className="space-y-10">

              {/* Skills */}
              <div style={{ animation: 'fadeInUp 0.5s ease-in-out' }}>
                <h2 className="text-sm border-b border-gray-100 pb-2 font-bold tracking-widest text-black/40 uppercase mb-4 pl-1">Technical Arsenal</h2>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Tailwind CSS', 'UI/UX Design', 'Full-Stack Development', 'Git/GitHub', 'Problem Solving'].map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 text-xs font-bold rounded-xl shadow-sm hover:shadow-md transition-all hover:bg-black hover:text-white hover:border-black cursor-default">{skill}</span>
                  ))}
                </div>
              </div>

              {/* Projects (Styled like Qualification Cards) */}
              <div style={{ animation: 'fadeInUp 0.6s ease-in-out' }}>
                <h2 className="text-sm border-b border-gray-100 pb-2 font-bold tracking-widest text-black/40 uppercase mb-4 pl-1">Key Experience</h2>
                <div className="space-y-4">
                  {/* Card 1 */}
                  <div className="max-w-2xl border border-gray-200 rounded-2xl p-5 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] transition-all duration-500 ease-in-out bg-white relative block overflow-hidden">
                    <span className="absolute inset-y-0 left-0 w-1 bg-black rounded-l-2xl opacity-80" aria-hidden="true"></span>
                    <div className="pl-3">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900">Prime:GO</h3>
                        <div className="flex items-center gap-1.5 text-[0.7rem] sm:text-xs text-gray-700 font-semibold bg-gray-100 px-2 py-1 rounded-md shrink-0">
                           Current
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-black/60 mb-3 font-semibold">Full-Stack Developer & UI Designer</p>
                      <ul className="text-xs sm:text-sm text-gray-600 space-y-2 list-disc pl-4 font-medium leading-relaxed">
                        <li>Currently building an Uber-like mobility platform focused on problem-solving.</li>
                        <li>Iterating on infrastructure and adding impactful innovations to simplify transportation.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="max-w-2xl border border-gray-200 rounded-2xl p-5 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] transition-all duration-500 ease-in-out bg-white relative block overflow-hidden">
                    <span className="absolute inset-y-0 left-0 w-1 bg-black rounded-l-2xl opacity-80" aria-hidden="true"></span>
                    <div className="pl-3">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900">E-Commerce Platform</h3>
                        <div className="flex items-center gap-1.5 text-[0.7rem] sm:text-xs text-gray-700 font-semibold bg-gray-100 px-2 py-1 rounded-md shrink-0">
                           Completed
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-black/60 mb-3 font-semibold">Full-Stack Developer</p>
                      <ul className="text-xs sm:text-sm text-gray-600 space-y-2 list-disc pl-4 font-medium leading-relaxed">
                        <li>Architected and shipped a complete e-commerce platform built from the ground up.</li>
                        <li>Streamlined the shopping experience to resolve fundamental user pain points.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

               {/* Education */}
               <div style={{ animation: 'fadeInUp 0.7s ease-in-out' }}>
                <h2 className="text-sm border-b border-gray-100 pb-2 font-bold tracking-widest text-black/40 uppercase mb-4 pl-1">Education</h2>
                <div className="space-y-4">
                  {/* Edu Card 1 */}
                  <div className="max-w-2xl border border-gray-200 rounded-2xl p-5 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] transition-all duration-500 ease-in-out bg-white relative block overflow-hidden">
                    <span className="absolute inset-y-0 left-0 w-1 bg-black rounded-l-2xl opacity-80" aria-hidden="true"></span>
                    <div className="pl-3">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">Master of Computer Applications</h3>
                      <p className="text-xs sm:text-sm text-black/60 mb-3 font-semibold">Shree Devi Institute of Technology</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <div className="flex items-center gap-1.5 text-[0.7rem] sm:text-xs text-gray-600 font-bold bg-gray-50 border border-gray-200 w-fit px-2.5 py-1 rounded-md">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                          2024 - Present
                        </div>
                        <div className="flex items-center gap-1.5 text-[0.7rem] sm:text-xs text-green-700 font-bold bg-green-50/50 border border-green-100 w-fit px-2.5 py-1 rounded-md">
                          Ongoing
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Edu Card 2 */}
                  <div className="max-w-2xl border border-gray-200 rounded-2xl p-5 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] transition-all duration-500 ease-in-out bg-white relative block overflow-hidden">
                    <span className="absolute inset-y-0 left-0 w-1 bg-black rounded-l-2xl opacity-80" aria-hidden="true"></span>
                    <div className="pl-3">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">Bachelor of Computer Applications</h3>
                      <p className="text-xs sm:text-sm text-black/60 mb-3 font-semibold">Mahathma Gandhi Memorial Degree College</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <div className="flex items-center gap-1.5 text-[0.7rem] sm:text-xs text-gray-600 font-bold bg-gray-50 border border-gray-200 w-fit px-2.5 py-1 rounded-md">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                          2021 - 2023
                        </div>
                        <div className="flex items-center gap-1.5 text-[0.7rem] sm:text-xs text-blue-700 font-bold bg-blue-50/50 border border-blue-100 w-fit px-2.5 py-1 rounded-md">
                          8.5 CGPA
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
            
            {/* Download PDF CTA */}
            <div className="mt-14 mb-4 flex justify-center pb-2" style={{ animation: 'fadeInUp 0.8s ease-in-out' }}>
                <a href="/resume.pdf" download className="px-6 py-3 text-xs sm:text-sm font-bold rounded-2xl bg-black text-white hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 border border-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  Download Original PDF
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
