import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, Suspense } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import Dashboard from './components/pages/dashboard'
import BottomNavbar from './components/BottomNavbar'
import GradualBlur from './components/ui/GradualBlur'
import AboutMe from './pages/about/AboutMe'
import Projects from './pages/Projects'
import SmartCanteenSystem from './pages/project/SmartCanteenSystem'
import HealthcareApp from './pages/project/healthcare'
import ClickSpark from './components/ClickSpark'
import QualificationPage from './pages/QualificationPage'
import ResumePage from './pages/ResumePage'
import ScheduleCallPage from './pages/ScheduleCallPage'
import ContactPage from './pages/ContactPage'

function Home() {
  return <Dashboard />;
}

// Error boundary component
function ErrorFallback({ error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
        <p className="text-gray-600 mb-4">{error.message}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
}

// Loading component
function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );
}

import { ThemeProvider } from './components/theme-provider';

function App() {
  useEffect(() => {
    // Component mounted - no logging needed
  }, []);

  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-ui-theme">
      <div className="w-full min-h-screen">
        <Router>
        <ClickSpark
          sparkColor='#fff'
          sparkSize={4}
          sparkRadius={12}
          sparkCount={8}
          duration={400}
          easing='ease-out'
          extraScale={1.0}
        >
          <div className="bg-white dark:bg-[#09090b] transition-colors duration-500 min-h-screen text-gray-900 dark:text-gray-100">
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/qualification" element={<QualificationPage />} />
                <Route path="/resume" element={<ResumePage />} />
                <Route path="/schedule" element={<ScheduleCallPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/project/smart-canteen-system" element={<SmartCanteenSystem />} />
                <Route path="/project/healthcare" element={<HealthcareApp />} />
              </Routes>
            </Suspense>
            {/* Blue Glow Effect Behind BottomNavbar */}
            <div className="relative flex flex-col items-center">
              <BottomNavbar />
              {/* Blue Blur Effect Below BottomNavbar */}
            </div>
            
            {/* GradualBlur Component - Fixed at bottom of screen */}
            <div className="fixed bottom-0 left-0 right-0 z-50">
              <GradualBlur
                target="page"
                position="bottom"
                height="2rem"
                strength={2}
                divCount={3}
                curve="ease-out"
                exponential={true}
                opacity={0.9}
                zIndex={1000}
              />
            </div>
          </div>
        </ClickSpark>
      </Router>
      
      {/* Vercel Analytics */}
      <SpeedInsights />
      <Analytics />
      </div>
    </ThemeProvider>
  )
}

export default App
