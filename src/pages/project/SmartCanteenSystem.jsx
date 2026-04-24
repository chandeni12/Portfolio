import React, { useEffect } from 'react';
import Footer from '../../components/Footer.jsx';
import ProfileTop from '../../components/ProfileTop.jsx';
import { GithubIcon } from '../../components/ui/github.jsx';
import { ArrowLeft, ExternalLink, Link } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FooterNew from '../../components/FooterNew.jsx';
import { Skiper39 } from '../../components/ui/skiper-ui/skiper39.jsx';

export default function SmartCanteenSystem() {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="w-full">
      <section className="max-w-2xl mx-auto px-1">
        {/* ProfileTop Component */}
        <ProfileTop />
        {/* Text Content */}
        <div className="max-w-2xl w-full px-1 mx-auto mb-8 mt-12">
        {/* Header Section */}
        <div className="mb-8">
          {/* Go Back Link */}
          <button
            onClick={handleGoBack}
            className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors duration-200 mb-3"
          >
            <ArrowLeft size={16} />
            <span className="text-sm font-medium">Go back</span>
          </button>

          {/* Title and Live Website Button */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            <div>
              <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">Prime:Go – Ride Booking</h1>
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">System</h2>
            </div>
            <a
              href="https://miteeat-demo.example.com" // Replace with actual live demo URL
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-xl bg-[#FFFFFF] text-black hover:bg-gray-50 transition-all duration-200 text-sm font-semibold focus:outline-none"
            >
              <span className="tracking-wide">Live Demo</span>
              <Link
                size={16}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:scale-110"
              />
            </a>
          </div>
        </div>
        {/* New Section: Impact Statement and Blockquote */}
        <div className="mb-8">
          {/* <div className="text-lg font-medium text-black mb-4">
            A complete digital transformation of college dining — <span className="font-bold">built, tested, and launched in the real world.</span>
          </div> */}
          <p className="mb-6 text-sm sm:text-base">
            Getting a ride should be simple. But in reality? It often turns into frustration. Long wait times, uncertain availability, and no clear visibility on when your ride will arrive. Users are left refreshing apps, guessing ETAs, and dealing with inconsistent experiences.
            <br /><br />
            That’s the problem Prime:Go aims to solve.
          </p>
        </div>
        <div className="shadow-md rounded-xl overflow-hidden">
          <img src="/s2.png" alt="image" className="rounded-xl w-full" />
        </div>
        <div className="mt-6">
          <p className="text-sm sm:text-base text-gray-800">
            Now, flip the story.<br />
            Imagine opening an app where booking a ride takes just seconds. No confusion, no delays — just a smooth, predictable flow where you:
            <br />
            <span className="block mt-3 ml-2">• Request a ride instantly</span>
            <span className="block ml-2">• Get matched with a driver in real-time</span>
            <span className="block ml-2">• Track your ride live from pickup to destination</span>
            <span className="block mb-3 ml-2">• Experience a seamless and reliable journey</span>
            This is Prime:Go —transportation, made smarter and simpler.
          </p>
        </div>
        <div className="mt-3">
          <img src="/s1.png" alt="Smart Canteen System UI" className="rounded-xl w-5% h-5%" />
          <p className="mt-6 text-sm sm:text-base text-gray-800">
            For users, it means faster bookings and better reliability. For drivers, it creates a more efficient system with clear ride requests and smoother coordination. No unnecessary delays, no guesswork — just a streamlined experience for everyone involved.
          </p>
          <img src="/s3.png" alt="Smart Canteen System - Staff Dashboard" className="rounded-xl w-5% h-5% mt-6" />

          {/* Built With Modern Tech */}
          <div className="mt-10">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3"> Built With Modern Tech</h3>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-base text-gray-800">
              <li>
                <span className="font-semibold">Frontend:</span> React + Tailwind CSS — responsive and clean user interface.
              </li>
              <li>
                <span className="font-semibold">Backend:</span> Node.js + Express — scalable and efficient server handling.
              </li>
              <li>
                <span className="font-semibold">Database:</span> flexible and reliable data management.
              </li>
              <li>
                <span className="font-semibold">APIs:</span> seamless communication between systems.
              </li>
              <li>
                <span className="font-semibold">Authentication:</span> Secure login and user management.
              </li>
            </ul>
          </div>
          {/* Why Prime:Go Stands Out */}
          <div className="mt-10">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Why Prime:Go Stands Out</h3>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-base text-gray-800">
              <li>
                Fast & Seamless Booking – Request rides in seconds.
              </li>
              <li>
                Real-Time Experience – Live tracking and instant updates.
              </li>
              <li>
                Efficient Matching – Optimized driver-user coordination.
              </li>
              <li>
                Clean & Intuitive UI – Built for ease of use.
              </li>
              <li>
                Scalable System – Designed to handle real-world usage.
              </li>
            </ul>
            <div className="flex justify-end mt-12">
              
            </div>
          </div>
        </div>
        {/* What is the Product Section */}
        
        </div>
        {/* Footer Section */}
        <FooterNew />
      </section>
      
      {/* Skiper39 Component - Full Width */}
      <div className="w-full">
        <Skiper39 />
      </div>
    </div>
  );
} 