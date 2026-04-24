import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Certification = () => {
  const [showAll, setShowAll] = useState(false);
  
  const certifications = [
    {
      id: 1,
      title: "Delta full stack web developer",
      description: "Builds and manages – frontend and backend of web apps..",
      icon: (
        <svg width="28" height="28" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_4062_36866)">
            <path d="M24.2407 12.3791C24.2407 11.5704 24.1624 10.7356 24.032 9.953H12.7363V14.5704H19.2059C18.945 16.0574 18.0842 17.3617 16.8059 18.1965L20.6668 21.1965C22.9363 19.0834 24.2407 16.0052 24.2407 12.3791Z" fill="#4280EF"/>
            <path d="M12.7347 24.0661C15.9695 24.0661 18.6825 22.9965 20.6651 21.1704L16.8043 18.1965C15.7347 18.9269 14.3521 19.3443 12.7347 19.3443C9.60428 19.3443 6.9695 17.2313 6.00428 14.4139L2.03906 17.4661C4.07385 21.5095 8.19558 24.0661 12.7347 24.0661Z" fill="#34A353"/>
            <path d="M6.00453 14.3878C5.50888 12.9008 5.50888 11.2834 6.00453 9.79646L2.03932 6.7182C0.343665 10.1095 0.343665 14.1008 2.03932 17.466L6.00453 14.3878Z" fill="#F6B704"/>
            <path d="M12.7347 4.86602C14.4304 4.83993 16.0999 5.49211 17.326 6.66602L20.7434 3.22254C18.5782 1.18776 15.7086 0.0921052 12.7347 0.118192C8.19558 0.118192 4.07385 2.67471 2.03906 6.71819L6.00428 9.79646C6.9695 6.95298 9.60428 4.86602 12.7347 4.86602Z" fill="#E54335"/>
          </g>
          <defs>
            <clipPath id="clip0_4062_36866">
              <rect width="23.4783" height="24" fill="white" transform="translate(0.761719 0.0921631)"/>
            </clipPath>
          </defs>
        </svg>
      ),
      buttonText: "View Certificate"
    }
  ];

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <section className="transition-colors duration-500 mb-16">
        <div className="max-w-2xl mx-auto">
        <div className=" mb-6">
          <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-50 transition-colors leading-tight">
          Certified & Credible
          </h2>
          <p className="leading-relaxed text-xs sm:text-base text-black/60 dark:text-gray-400 transition-colors">
            <span className="text-black dark:text-white transition-colors font-semibold">Proof</span> of <span className="text-black dark:text-white transition-colors">skills</span>, <span className="text-black dark:text-white transition-colors">knowledge</span>, and <span className="text-black dark:text-white transition-colors font-semibold">continuous learning</span>
          </p>
        </div>

        <div className="space-y-4">
          {(showAll ? certifications : certifications.slice(0, 2)).map((cert, index) => (
              <div 
                key={cert.id}
                className="max-w-2xl border border-gray-200 dark:border-white/10 rounded-2xl p-3 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] transition-all duration-500 ease-in-out flex items-center justify-between bg-white dark:bg-zinc-900"
              style={{
                animation: showAll && index >= 2 ? 'fadeInUp 0.5s ease-in-out' : 'none'
              }}
            >
              {/* Left: Image and Certification Text */}
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8">
                  {cert.icon}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-50 mb-0.5 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-[0.7rem] text-gray-500 dark:text-gray-400 transition-colors">
                    {cert.description}
                  </p>
                </div>
              </div>
              {/* Right: View Certificate Button */}
              <button
                className="bg-black dark:bg-white border border-black dark:border-white rounded-xl text-xs font-medium text-white dark:text-black hover:bg-black/80 dark:hover:bg-gray-200 transition-all duration-200 flex-shrink-0 px-4 py-2 flex items-center justify-center gap-1 group"
              >
                {cert.buttonText}
                <ArrowRight 
                  size={12} 
                  className="transition-transform duration-200 group-hover:translate-x-1" 
                />
              </button>
            </div>
          ))}
        </div>
        
        {/* Show More Button */}
        {certifications.length > 2 && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 text-xs sm:px-5 sm:py-2 sm:text-sm rounded-xl font-medium hover:bg-black/80 dark:hover:bg-gray-200 transition-all duration-300 ease-in-out flex items-center gap-1.5 group"
            >
              {showAll ? 'Show Less' : 'Show More'}
              <ArrowRight 
                size={14} 
                className={`transition-transform duration-300 ease-in-out ${showAll ? 'rotate-180' : 'group-hover:translate-x-1'}`}
              />
            </button>
          </div>
        )}
      
        </div>
      </section>
    </>
  );
};

export default Certification;
