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
      <section className="flex flex-col items-center bg-white dark:bg-[#09090b] text-gray-900 dark:text-gray-100 transition-colors duration-500 min-h-screen">
        <div className="w-full max-w-2xl mx-auto flex flex-col items-start bg-white dark:bg-[#09090b]">
          <div className="w-full">
            <ProfileTop />
          </div>
          
          <div className="flex flex-col items-center justify-center w-full">
            {/* Top text */}
            <div className="text-center text-xs text-black dark:text-white opacity-50 mb-2 uppercase">
              Resume
            </div>
            {/* Vertical gradient line */}
            <div className="w-px h-16 mb-2 leading-tight opacity-40 bg-gradient-to-b from-gray-200 via-gray-300 to-black dark:from-zinc-800 dark:via-zinc-700 dark:to-white"></div>
          </div>
          
          <div className="w-full mx-auto px-4 sm:px-0 mb-8 max-w-2xl">
            <style>{`
              @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `}</style>
            
            {/* Header section (reminiscent of Hero/ProfileTop) */}
            <div className="mb-10 text-left border border-gray-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 bg-white dark:bg-zinc-900/50 relative overflow-hidden shadow-sm">
              <div className="relative z-10 w-full flex flex-col items-center sm:items-start text-center sm:text-left">
                <img src="/Smile Big.svg" alt="Profile" className="w-16 h-16 mb-3 object-contain" />
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white leading-tight mb-2 tracking-tight">Chandeni</h1>
                <p className="text-sm sm:text-base text-black/60 dark:text-gray-400 font-medium mb-4 max-w-md">Full-Stack Web Developer & UI Designer</p>
                <div className="flex items-center gap-3">
                  <a href="mailto:chandenichan6@gmail.com" className="px-4 py-1.5 text-xs sm:text-sm bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors rounded-xl shadow font-semibold">Email Me</a>
                  <span className="px-4 py-1.5 text-xs sm:text-sm bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400 border border-green-100 dark:border-green-900/30 rounded-xl font-semibold flex items-center gap-2">
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
                <h2 className="text-sm border-b border-gray-100 dark:border-white/10 pb-2 font-bold tracking-widest text-black/40 dark:text-zinc-500 uppercase mb-4 pl-1">Technical Arsenal</h2>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Tailwind CSS', 'UI/UX Design', 'Full-Stack Development', 'Git/GitHub', 'Problem Solving'].map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white dark:bg-zinc-900/50 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 text-xs font-bold rounded-xl shadow-sm hover:shadow-md transition-all hover:bg-black hover:text-white hover:border-black hover:dark:bg-white hover:dark:text-black hover:dark:border-white cursor-default">{skill}</span>
                  ))}
                </div>
              </div>

              {/* Projects (Styled like Qualification Cards) */}
              <div style={{ animation: 'fadeInUp 0.6s ease-in-out' }}>
                <h2 className="text-sm border-b border-gray-100 dark:border-white/10 pb-2 font-bold tracking-widest text-black/40 dark:text-zinc-500 uppercase mb-4 pl-1">Key Experience</h2>
                <div className="space-y-4">
                  {/* Card 1 */}
                  <div className="max-w-2xl border border-gray-200 dark:border-white/10 rounded-2xl p-5 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] transition-all duration-500 ease-in-out bg-white dark:bg-zinc-900/50 relative block overflow-hidden">
                    <span className="absolute inset-y-0 left-0 w-1 bg-black dark:bg-white rounded-l-2xl opacity-80" aria-hidden="true"></span>
                    <div className="pl-3">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">Prime:GO</h3>
                        <div className="flex items-center gap-1.5 text-[0.7rem] sm:text-xs text-gray-700 dark:text-gray-300 font-semibold bg-gray-100 dark:bg-zinc-800 px-2 py-1 rounded-md shrink-0">
                           Current
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-black/60 dark:text-gray-400 mb-3 font-semibold">Full-Stack Developer & UI Designer</p>
                      <ul className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 space-y-2 list-disc pl-4 font-medium leading-relaxed">
                        <li>Currently building an Uber-like mobility platform focused on problem-solving.</li>
                        <li>Iterating on infrastructure and adding impactful innovations to simplify transportation.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="max-w-2xl border border-gray-200 dark:border-white/10 rounded-2xl p-5 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] transition-all duration-500 ease-in-out bg-white dark:bg-zinc-900/50 relative block overflow-hidden">
                    <span className="absolute inset-y-0 left-0 w-1 bg-black dark:bg-white rounded-l-2xl opacity-80" aria-hidden="true"></span>
                    <div className="pl-3">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">E-Commerce Platform</h3>
                        <div className="flex items-center gap-1.5 text-[0.7rem] sm:text-xs text-gray-700 dark:text-gray-300 font-semibold bg-gray-100 dark:bg-zinc-800 px-2 py-1 rounded-md shrink-0">
                           Completed
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-black/60 dark:text-gray-400 mb-3 font-semibold">Full-Stack Developer</p>
                      <ul className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 space-y-2 list-disc pl-4 font-medium leading-relaxed">
                        <li>Architected and shipped a complete e-commerce platform built from the ground up.</li>
                        <li>Streamlined the shopping experience to resolve fundamental user pain points.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

               {/* Education */}
               <div style={{ animation: 'fadeInUp 0.7s ease-in-out' }}>
                <h2 className="text-sm border-b border-gray-100 dark:border-white/10 pb-2 font-bold tracking-widest text-black/40 dark:text-zinc-500 uppercase mb-4 pl-1">Education</h2>
                <div className="space-y-4">
                  {/* Edu Card 1 */}
                  <div className="max-w-2xl border border-gray-200 dark:border-white/10 rounded-2xl p-5 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] transition-all duration-500 ease-in-out bg-white dark:bg-zinc-900/50 relative block overflow-hidden">
                    <span className="absolute inset-y-0 left-0 w-1 bg-black dark:bg-white rounded-l-2xl opacity-80" aria-hidden="true"></span>
                    <div className="pl-3">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1">Master of Computer Applications</h3>
                      <p className="text-xs sm:text-sm text-black/60 dark:text-gray-400 mb-3 font-semibold">Shree Devi Institute of Technology</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <div className="flex items-center gap-1.5 text-[0.7rem] sm:text-xs text-gray-600 dark:text-gray-400 font-bold bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-white/10 w-fit px-2.5 py-1 rounded-md">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                          2024 - Present
                        </div>
                        <div className="flex items-center gap-1.5 text-[0.7rem] sm:text-xs text-green-700 dark:text-green-400 font-bold bg-green-50/50 dark:bg-green-950/30 border border-green-100 dark:border-green-900/30 w-fit px-2.5 py-1 rounded-md">
                          Ongoing
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Edu Card 2 */}
                  <div className="max-w-2xl border border-gray-200 dark:border-white/10 rounded-2xl p-5 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] transition-all duration-500 ease-in-out bg-white dark:bg-zinc-900/50 relative block overflow-hidden">
                    <span className="absolute inset-y-0 left-0 w-1 bg-black dark:bg-white rounded-l-2xl opacity-80" aria-hidden="true"></span>
                    <div className="pl-3">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1">Bachelor of Computer Applications</h3>
                      <p className="text-xs sm:text-sm text-black/60 dark:text-gray-400 mb-3 font-semibold">Mahathma Gandhi Memorial Degree College</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <div className="flex items-center gap-1.5 text-[0.7rem] sm:text-xs text-gray-600 dark:text-gray-400 font-bold bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-white/10 w-fit px-2.5 py-1 rounded-md">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                          2021 - 2023
                        </div>
                        <div className="flex items-center gap-1.5 text-[0.7rem] sm:text-xs text-blue-700 dark:text-blue-400 font-bold bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/30 w-fit px-2.5 py-1 rounded-md">
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
                <a href="/resume.pdf" download className="px-6 py-3 text-xs sm:text-sm font-bold rounded-2xl bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 border border-gray-900 dark:border-white">
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
