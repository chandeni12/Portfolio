import React from 'react';
import { motion } from 'framer-motion';

const LandingPage = () => {
  const landingPages = [
    {
      id: 1,
      title: "Figma Landing Page",
      description: "Modern design system with interactive components",
      image: "/landing/figma-landing-1.jpg",
      category: "Figma"
    },
    {
      id: 2,
      title: "Framer Landing Page",
      description: "Animated hero section with smooth transitions",
      image: "/landing/framer-landing-1.jpg",
      category: "Framer"
    },
    {
      id: 3,
      title: "Figma Dashboard",
      description: "Clean interface with data visualization",
      image: "/landing/figma-landing-2.jpg",
      category: "Figma"
    },
    {
      id: 4,
      title: "Framer Portfolio",
      description: "Interactive portfolio with micro-animations",
      image: "/landing/framer-landing-2.jpg",
      category: "Framer"
    },
    {
      id: 5,
      title: "Figma E-commerce",
      description: "Product showcase with user experience focus",
      image: "/landing/figma-landing-3.jpg",
      category: "Figma"
    }
  ];

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700 }}
          >
            Landing Pages
          </h1>
          <p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'sans-serif' }}
          >
            Showcasing beautiful landing page designs created with Figma and Framer
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {landingPages.map((page, index) => (
            <motion.div
              key={page.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              {/* Image Placeholder */}
              <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-4">
                    {page.category === "Figma" ? (
                      <svg className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                      </svg>
                    ) : (
                      <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                      </svg>
                    )}
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    {page.category} Design
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span 
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      page.category === "Figma" 
                        ? "bg-purple-100 text-purple-700" 
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {page.category}
                  </span>
                </div>
                
                <h3 
                  className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors"
                  style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 600 }}
                >
                  {page.title}
                </h3>
                
                <p 
                  className="text-gray-600 mb-4"
                  style={{ fontFamily: 'sans-serif' }}
                >
                  {page.description}
                </p>

                <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                  View Design
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          className="text-center mt-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p 
            className="text-gray-500"
            style={{ fontFamily: 'sans-serif' }}
          >
            All designs created with ❤️ using {landingPages.filter(p => p.category === "Figma").length} Figma and {landingPages.filter(p => p.category === "Framer").length} Framer projects
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LandingPage; 