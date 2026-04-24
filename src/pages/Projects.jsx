import React, { useEffect } from "react";
import FooterNew from "../components/FooterNew";
import ProfileTop from "../components/ProfileTop";
import { Skiper39 } from "../components/ui/skiper-ui/skiper39";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export default function Projects() {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Prime:GO",
      category: "Full-Stack Ride Booking",
      description: "A real-time ride-booking application designed to simplify transportation with instant ride requests, live tracking, and optimized driver-user coordination for a seamless travel experience.",
      image: "/project1.jpeg",
      tags: ["React", "Tailwind CSS", "Node.js", "Express", "Full-Stack"],
      action: () => navigate('/project/smart-canteen-system'),
      actionText: "View Case Study"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      category: "Digital Retail Solution",
      description: "A comprehensive e-commerce platform built from the ground up to streamline the online shopping journey. Designed to resolve fundamental user pain points and provide a seamless checkout flow.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000",
      tags: ["React", "UI/UX Design", "Full-Stack", "Tailwind CSS"],
      action: null,
      actionText: "Case Study in Progress"
    }
  ];

  return (
    <>
      <section className="flex flex-col items-center bg-white dark:bg-[#09090b] transition-colors duration-500 min-h-screen">
        <div className="w-full max-w-2xl mx-auto flex flex-col items-start bg-white dark:bg-[#09090b] transition-colors duration-500">
          <div className="w-full">
            <ProfileTop />
          </div>
          
          <div className="flex flex-col items-center justify-center w-full">
            <div className="text-center text-[0.65rem] sm:text-xs text-gray-500 mb-3 font-bold tracking-widest uppercase">
              Case Studies
            </div>
            <div
              className="w-px h-16 mb-8 leading-tight opacity-40 bg-gradient-to-b from-gray-100 via-gray-300 to-gray-900"
            ></div>
          </div>

          <div className="mx-auto flex flex-col items-start px-4 sm:px-0 w-full">
            
            <div className="mb-12 text-left w-full">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100 leading-[1.2] tracking-tight transition-colors">
                Where Projects Become <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-300 dark:to-gray-500">Real Products.</span>
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-[90%] sm:max-w-md font-medium leading-relaxed transition-colors">
                Showcasing digital experiences engineered for real-world impact. From intuitive ride-booking architectures to robust e-commerce solutions.
              </p>
            </div>

            <div className="w-full space-y-10 mb-16">
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="group flex flex-col items-start border border-gray-200 dark:border-white/10 rounded-[1.5rem] p-5 sm:p-7 bg-white dark:bg-zinc-900 hover:border-gray-300 dark:hover:border-white/20 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_12px_40px_rgba(255,255,255,0.03)] hover:-translate-y-1 transition-all duration-500 ease-out relative overflow-hidden"
                >
                  <div className="w-full flex flex-col items-start">
                    <div className="flex justify-between items-center w-full mb-3">
                      <span className="text-[0.65rem] sm:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest bg-gray-50 dark:bg-zinc-800 px-2.5 py-1 rounded-lg border border-gray-100 dark:border-white/5 shadow-sm transition-colors">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 tracking-tight transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed font-medium transition-colors">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, idx) => (
                         <span key={idx} className="px-3 py-1.5 bg-gray-50 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 text-[0.65rem] sm:text-[0.7rem] font-bold rounded-xl border border-gray-200 dark:border-white/10 shadow-sm transition-colors dark:group-hover:border-white/20">
                           {tag}
                         </span>
                      ))}
                    </div>
                    
                    <button
                      onClick={project.action}
                      disabled={!project.action}
                      className={`inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm rounded-xl font-bold transition-all duration-300 shadow-sm
                        ${project.action 
                          ? 'bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 hover:shadow-lg border border-gray-900 dark:border-white group/btn' 
                          : 'bg-gray-50 dark:bg-zinc-800 text-gray-400 dark:text-gray-500 cursor-not-allowed border border-gray-200 dark:border-white/10'}`}
                      type="button"
                    >
                      <span>{project.actionText}</span>
                      {project.action && <ArrowUpRight size={16} className="transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="w-full flex justify-center mb-8 border-t border-gray-100 dark:border-white/10 pt-10 transition-colors">
              <button
                onClick={() => navigate('/about')}
                className="group inline-flex items-center gap-3 px-6 py-3.5 text-xs sm:text-sm rounded-2xl font-bold border border-gray-200 dark:border-white/20 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:border-gray-900 dark:hover:border-white hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all duration-300 shadow-sm hover:shadow-md"
                type="button"
              >
                <span>Read My Full Story</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

          </div>
          
          <div className="w-full max-w-2xl mx-auto mt-8">
            <FooterNew/>
          </div>
        </div>
        <div className="w-full mt-4">
          <Skiper39/>
        </div>
      </section>
    </>
  );
}
