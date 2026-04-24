import React, { useState } from 'react';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const Qualification = () => {
  const [activeTab, setActiveTab] = useState('education');
  
  const education = [
    {
      id: 1,
      title: "Master of Computer Applications",
      institution: "Shree Devi Institute od technolgy",
      date: "2024 - Present",
      cgp: "Ongoing"
    },
    {
      id: 2,
      title: "Bachelor of Computer Applications",
      institution: "Mahathma Gandhi Memeriol Degree College Kushalnagar",
      date: "2021 - 2023",
      cgp: "8.5"
    }
  ];

  const experience = [];

  const activeData = activeTab === 'education' ? education : experience;

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
      <section className="bg-white dark:bg-[#09090b] transition-colors duration-500 mb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-0">
          <div className="mb-6">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-50 transition-colors leading-tight">
              Qualification
            </h2>
            <p className="leading-relaxed text-xs sm:text-base text-black/60 dark:text-gray-400 transition-colors">
              My <span className="text-black dark:text-white transition-colors font-semibold">educational</span> and <span className="text-black dark:text-white transition-colors font-semibold">professional</span> journey
            </p>
          </div>

          <div className="flex gap-8 mb-8">
            <button 
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 text-sm sm:text-base font-semibold pb-2 transition-all duration-300 ${activeTab === 'education' ? 'text-black dark:text-white border-b-2 border-black dark:border-white' : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'}`}
            >
              <GraduationCap size={20} />
              Education
            </button>
            <button 
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 text-sm sm:text-base font-semibold pb-2 transition-all duration-300 ${activeTab === 'experience' ? 'text-black dark:text-white border-b-2 border-black dark:border-white' : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'}`}
            >
              <Briefcase size={20} />
              Experience
            </button>
          </div>

          <div className="space-y-4">
            {activeData.length > 0 ? activeData.map((item, index) => (
              <div 
                key={`${activeTab}-${item.id}`}
                className="max-w-2xl border border-gray-200 dark:border-white/10 rounded-2xl p-4 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] transition-all duration-500 ease-in-out bg-white dark:bg-zinc-900 relative block overflow-hidden"
                style={{
                  animation: 'fadeInUp 0.5s ease-in-out'
                }}
              >
                {/* Visual accent line similar to timeline approach but simpler */}
                <span className="absolute inset-y-0 left-0 w-1 bg-black dark:bg-white transition-colors rounded-l-2xl opacity-80" aria-hidden="true"></span>
                
                <div className="pl-2">
                  <h3 className="text-sm sm:text-lg font-bold text-gray-900 dark:text-gray-50 mb-1 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium transition-colors">
                    {item.institution}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-1.5 text-[0.7rem] sm:text-xs text-gray-400 dark:text-gray-400 font-medium bg-gray-50 dark:bg-zinc-800 w-fit px-2 py-1 rounded-md transition-colors">
                      <Calendar size={12} />
                      {item.date}
                    </div>
                    {item.cgp && (
                      <div className="flex items-center gap-1.5 text-[0.7rem] sm:text-xs text-gray-700 dark:text-green-400 font-medium bg-green-50/50 dark:bg-green-900/20 border border-green-100 dark:border-green-900/50 w-fit px-2 py-1 rounded-md transition-colors">
                        <span className="font-semibold">CGPA:</span> 
                        {item.cgp}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )) : (
              <p className="text-sm text-gray-500 italic mt-6">No {activeTab} history added yet.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Qualification;
