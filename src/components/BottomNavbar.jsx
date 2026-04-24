import { useState, useEffect } from "react";
import { User, Folder, Mail, FileTextIcon, FileText } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HomeIcon } from "./ui/home-icon";
import { StaggerChars } from "./ui/stagger-chars";
import { useTheme } from "./theme-provider";

const NAV_ITEMS = [
  { label: "Home", icon: null, href: "/", showIcon: true },
  { label: "Projects", icon: Folder, href: "/projects", showIcon: false },
  { label: "About", icon: User, href: "/about", showIcon: false },


  { label: "Qualification", icon: null, href: "/qualification", showIcon: false },
];

export default function BottomNavbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState("Home");
  const { theme, setTheme } = useTheme();

  // Update active state based on current location
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setActive("Home");
    } else if (path === "/about") {
      setActive("About");
    } else if (path === "/projects" || path.startsWith("/project")) {
      setActive("Projects");
    } else if (path === "/qualification") {
      setActive("Qualification");
    } else {
      setActive("Home");
    }
  }, [location.pathname]);

  const handleNavigation = (href, label) => {
    setActive(label);
    if (href.startsWith('/')) {
      navigate(href);
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center w-full pointer-events-none">
      <div className="flex items-center bg-[#1D1D1D]/70 backdrop-blur-md text-white px-2 sm:px-3 py-2 sm:py-2 rounded-2xl shadow-2xl max-w-lg sm:max-w-xl md:max-w-2xl w-auto pointer-events-auto mb-6 sm:mb-7 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
        {/* Navigation Items */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          {/* Home Icon */}
          <button
            onClick={() => handleNavigation("/", "Home")}
            className={`relative flex items-center justify-center px-2 sm:px-3 py-1.5 sm:py-2.5 rounded-xl transition-all duration-300 group ${
              active === "Home" 
                ? "text-white bg-[#3A3A3D] rounded-xl" 
                : "text-gray-300 hover:text-white hover:bg-[#3A3A3D] hover:rounded-xl"
            }`}
          >
            <HomeIcon
              size={18}
              className={`transition-all duration-300 ${
                active === "Home" ? "text-white" : "text-gray-300 group-hover:text-white"
              }`}
            />
          </button>
          
          {/* Separator after Home */}
          <div className="border-l border-gray-400 h-6 mx-1 sm:mx-2"></div>
          
          {/* Other Navigation Items */}
          {NAV_ITEMS.filter(item => item.label !== "Home").map(({ label, icon: Icon, href, showIcon }) => {
            const isActive = active === label;
            return (
              <button
                key={label}
                onClick={() => handleNavigation(href, label)}
                className={`relative flex items-center justify-center px-2 sm:px-3 py-1.5 sm:py-2.5 rounded-xl transition-all duration-300 group ${
                  isActive 
                    ? "text-white bg-[#3A3A3D] rounded-xl" 
                    : "text-gray-300 hover:text-white hover:bg-[#3A3A3D] hover:rounded-xl"
                }`}
              >
                {showIcon ? (
                  // Home Icon
                  <HomeIcon
                    size={18}
                    className={`transition-all duration-300 ${
                      isActive ? "text-white" : "text-gray-300 group-hover:text-white"
                    }`}
                  />
                ) : (
                  // Text items - StaggerChars effect for Projects, About, and Qualification
                  label === "Projects" || label === "About" || label === "Qualification" ? (
                    <StaggerChars
                      text={label.toLowerCase()}
                      className={`font-medium text-[10px] sm:text-xs transition-all duration-300 tracking-normal flex items-center ${
                        isActive ? "text-white" : "text-gray-300 group-hover:text-white"
                      }`}
                      hoverClassName={isActive ? "text-white" : "text-white"}
                      style={{ 
                        fontFamily: 'Suisse Intl, sans-serif', 
                        fontWeight: isActive ? 600 : 500, 
                        letterSpacing: '0',
                        lineHeight: '1',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                      delay={0.02}
                      duration={0.3}
                    />
                  ) : (
                    <span 
                      className={`font-semibold text-xs sm:text-sm transition-all duration-300 ${
                        isActive ? "text-white" : "text-gray-300 group-hover:text-white"
                      }`}
                      style={{ fontFamily: 'Suisse Intl, sans-serif', fontWeight: isActive ? 700 : 600 }}
                    >
                      {label}
                    </span>
                  )
                )}
              </button>
            );
          })}
        </div>
        
        {/* Separator */}
        <div className="border-l border-gray-400 h-6 mx-1 sm:mx-2"></div>
        
        <div className="flex items-center gap-1.5 sm:gap-2 ml-1">
          {/* Dropdown / Chevron Button */}
          <div className="relative group flex items-center">
            <button
              className="text-gray-300 hover:text-white bg-transparent hover:bg-[#3A3A3D] px-1 py-2 sm:px-1.5 sm:py-2.5 rounded-xl transition-all duration-300 flex items-center justify-center border-none shadow-none"
              type="button"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute bottom-[calc(100%+12px)] right-0 w-48 bg-white border border-gray-200 shadow-xl rounded-2xl p-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 origin-bottom text-gray-800 text-[0.8rem] font-semibold" style={{ fontFamily: 'Suisse Intl, sans-serif' }}>
              <button 
                onClick={() => setTheme('light')}
                className="w-full flex items-center justify-between px-3 py-2 hover:bg-gray-100 rounded-xl transition-colors"
                title="Light Mode"
              >
                <div className="flex items-center gap-2.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
                  Light Mode
                </div>
                {theme === 'light' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>}
              </button>
              
              <button 
                onClick={() => setTheme('dark')}
                className="w-full flex items-center justify-between px-3 py-2 hover:bg-gray-100 rounded-xl transition-colors"
                title="Dark Mode"
              >
                <div className="flex items-center gap-2.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                  Dark Mode
                </div>
                {theme === 'dark' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>}
              </button>
              
              <button 
                onClick={() => setTheme('system')}
                className="w-full flex items-center justify-between px-3 py-2 hover:bg-gray-100 rounded-xl transition-colors"
                title="System Theme"
              >
                <div className="flex items-center gap-2.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
                  System Theme
                </div>
                {theme === 'system' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>}
              </button>
              
              <div className="h-px bg-gray-200 my-1.5 mx-1"></div>
              
              <button onClick={() => navigate('/schedule')} className="w-full flex items-center gap-2.5 px-3 py-2 hover:bg-gray-100 rounded-xl transition-colors text-gray-800">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                Book a Call
              </button>
              <button onClick={() => navigate('/resume')} className="w-full flex items-center gap-2.5 px-3 py-2 hover:bg-gray-100 rounded-xl transition-colors text-gray-800">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                View Resume
              </button>
            </div>
          </div>

          {/* Contact Button */}
          <button
            onClick={() => navigate('/contact')}
            className="bg-white backdrop-blur-sm text-gray-900 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl transition-all duration-300 hover:bg-gray-100 shadow-md hover:shadow-xl text-[0.7rem] sm:text-xs border border-white/30 flex items-center gap-1.5"
            style={{ fontFamily: 'Suisse Intl, sans-serif', fontWeight: 800, paddingBottom: '0.4rem', paddingTop: '0.4rem' }}
          >
            <span>Let's Talk</span>
            <span className="inline-block align-middle transform translate-y-[-1px]">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.428 11.212v-4.5c0-2.213-3.572-2.35-3.572 0"/>
                <path d="M13.857 10V4.712c0-2.213-3.572-2.35-3.572 0v1.8m-.001 4.25v-4.05c0-2.213-3.747-2.35-3.747 0V13"/>
                <path d="M17.428 9.312c0-2.35 3.572-2.213 3.572 0v4.4c0 6.843-9.799 9.578-14.278 5.094l-3.215-3.24C2.018 13.904 4.044 10.5 6.537 13l1 1"/>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
} 