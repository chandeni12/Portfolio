import React from 'react'
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


export default function Project() {
  const navigate = useNavigate();

  const handleViewProject = () => {
    navigate('/project/smart-canteen-system');
  };

  return (
    <section className="py-16 bg-white dark:bg-[#09090b] transition-colors duration-500">
      <div className="w-full max-w-2xl mx-auto px-0">
        <section>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.3,
            ease: "easeOut"
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-lg sm:text-2xl lg:text-3xl font-semibold text-left mb-2 text-gray-900 dark:text-gray-50 transition-colors"
        >
          Case Studies
        </motion.h2>
        <p className='text-left text-black/60 dark:text-gray-400 text-xs sm:text-base max-w-2xl mb-6 transition-colors'>Selected case studies showing how I solve complex UX challenges across SaaS and consumer products — grounded in research, designed for clarity.</p>
        </section>

        
        <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 p-4 bg-white dark:bg-zinc-900 flex flex-col items-start transition-colors">
          <div className="px-4">
            <h3 className="text-base sm:text-xl font-bold text-gray-900 dark:text-gray-50 mb-1 mt-4 transition-colors">Prime:Go – Real-Time Smart Canteen Ordering System</h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4 transition-colors">
              A campus food ordering platform that reduced wait times by 80% and improved student satisfaction with seamless, queue-free ordering.
            </p>
            <button
              onClick={handleViewProject}
              className="group inline-flex items-center gap-1 px-4 py-2 text-xs sm:text-sm rounded-xl font-medium bg-gray-200 dark:bg-zinc-800 text-black dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-zinc-700 transition-all duration-200 shadow focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              style={{ fontSize: '0.95rem' }}
              type="button"
            >
              <span>View Project</span>
              <ChevronRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>


        


        {/* Bottom section with "View More Projects" button */}
        <div className="mt-12 text-center flex flex-col items-center">
        <button
          onClick={() => navigate('/projects')}
          className="group inline-flex items-center gap-1 text-xs sm:px-5 sm:py-2 sm:text-sm rounded-xl font-medium bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-gray-200 transition-all duration-200 shadow focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          type="button"
        >
          <span>View more Project</span>
          <ArrowRight 
            size={14} 
            className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
          />
        </button>

        </div>
      </div>
    </section>
  )
}