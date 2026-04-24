"use client";

import React, { useEffect, useState } from "react";

import { Skiper39 } from "../../components/ui/skiper-ui/skiper39";
import { Skiper30 } from "../../components/ui/skiper-ui/skiper30";
import FooterNew from "../../components/FooterNew";
import ProfileTop from "../../components/ProfileTop";
import Misc from "./misc";
import { Badge, User } from "lucide-react";
import MeetTheDesigner from "./MeetTheDesigner";
import Certification from '../../components/Certification'

// Array of icon image paths (adjust as needed)
const icons = [
  "/icons/vscode.png",
  "/icons/chatgpt.png",
  "/icons/github.png",
  "/icons/notion.png",
  "/icons/claude.png",
  "/icons/cursor.svg",
  // SVGs or more PNGs can be added here
  "/icons8-call.gif", // Example extra icon
  "/vite.svg", // Example extra icon
  "/about.JPG", // Example extra icon
  "/logo.jpeg", // Example extra icon
  "/logo1.jpeg", // Example extra icon
  "/bg.png", // Example extra icon
];

export default function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Create an array of boxes to simulate the marquee items
  const boxes = Array.from({ length: icons.length }, (_, i) => ({
    id: i,
    delay: i * 0.1,
    icon: icons[i % icons.length],
  }));

  return (
    <section className="flex flex-col items-center bg-white">
      <div className="max-w-2xl w-full mx-auto">
        <ProfileTop />
        {/* <div className="flex flex-col items-center justify-center w-full mb-8">
          <span className="relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 text-center after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-white after:to-black after:content-['']">
            hello
          </span>
        </div> */}
      </div>
      
      <div className="flex flex-col items-center justify-center w-full">
        {/* Top text */}
        <div className="text-center text-xs text-black opacity-50 mb-2 uppercase">
         About me
        </div>
        {/* Vertical gradient line */}
        <div
          className="w-px h-16 mb-2 leading-tight opacity-40"
          style={{
            background: "linear-gradient(to bottom, #e5e7eb 0%, #000 100%)"
          }}
        ></div>
      </div>
      
      <div className="max-w-2xl w-full mx-auto">
        

        
        {/* Arrow
        <div className="mb-12">
          <div className=" items-center justify-center gap-6 text-center text-black">
            <span className="relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-white after:to-black after:content-['']">
              About Me
            </span>
          </div>
        </div> */}

        {/* Main Heading & Intro */}
        {/* <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-8 text-gray-900 leading-tight ">
          Blending <span className="text-pink-600">Creativity</span>, <span className="text-pink-600">Code</span> &amp; <span className="text-pink-600">Product Thinking</span> to Build What <span className="text-pink-600">Matters</span>
        </h1> */}
        <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-8 text-gray-900 leading-tight">
          The Story Behind the <span className="text-black">Code</span>
          {" "}: My Journey in <span className="text-black">Design</span>, <span className="text-black">Development</span>, and <span className="text-black">Innovation</span>
        </h1>
        <p className="text-xs sm:text-base leading-relaxed mb-8">
          <span className="text-black font-bold">
            I am a Full-Stack Web Developer and UI Designer
          </span>
          <span className="text-gray-500"> specializing in </span>
          <span className="text-black font-bold">React and Tailwind CSS</span>
          <span className="text-gray-500">. Trained through the </span>
          <span className="text-black font-bold">Delta Full-Stack Development program</span>
          <span className="text-gray-500">, I focus on building applications that </span>
          <span className="text-black font-bold">solve real problems</span>
          <span className="text-gray-500"> with </span>
          <span className="text-black font-bold">innovative design</span>
          <span className="text-gray-500"> and </span>
          <span className="text-black font-bold">seamless user experiences</span>
          <span className="text-gray-500">.</span>
        </p>
        {/* My Story Section */}
        <div className="mt-8">
          <span className="uppercase tracking-widest text-gray-400 text-xs mb-3 block">
            The Journey So Far
          </span>
          <div className="space-y-6 text-xs sm:text-base leading-relaxed">
            <p className="text-gray-500">
              <span className="font-bold text-black">
                My journey into tech is driven by impact.
              </span>{" "}
              I don't just write code — I focus on creating solutions that address{" "}
              <span className="font-bold text-black">real-world challenges</span>. 
              My expertise covers the full spectrum of development, from laying out 
              intuitive UI designs to implementing robust logic in React.
            </p>
            <p className="text-gray-500">
              I recently architected and shipped a complete{" "}
              <span className="font-bold text-black">
                E-Commerce platform
              </span>
              , built from the ground up to streamline the shopping experience and resolve fundamental user pain points.
            </p>
            <p className="text-gray-500">
              Right now, I'm building{" "}
              <span className="font-bold text-black">Prime:GO</span> — an 
              Uber-like mobility platform. I am constantly iterating on its infrastructure, 
              adding better innovation, and refining the design to create a product that 
              truly simplifies transportation for everyone.
            </p>
            <p className="text-gray-500">
              <span className="font-bold text-black">
                Let's build something that works beautifully — and solves real problems.
              </span>
            </p>
          </div>
        </div>
       

        {/* Misc Grid - Experience & Music Player */}
        {/* <Misc /> */}
        {/* <div className="flex gap-2 flex-col mt-12">
              <h2 className="text-lg sm:text-2xl lg:text-3xl max-w-2xl font-bold tracking-tighter max-w-xl font-regular text-left">
                Meet the Designer
              </h2>
              <p className="text-xs sm:text-base mb-6">
                <span className="text-gray-500">
                  This is more than a portfolio — it’s{" "}
                </span>
                <span className="text-black font-bold">my story</span>
                <span className="text-gray-500">, filled with </span>
                <span className="text-black font-bold">experiences</span>
                <span className="text-gray-500">, </span>
                <span className="text-black font-bold">growth</span>
                <span className="text-gray-500">, and a little bit of </span>
                <span className="text-black font-bold">magic</span>
                <span className="text-gray-500">.</span>
              </p>
            </div> */}
      </div>
      {/* <div className="max-w-3xl w-full mx-auto">
        
         <MeetTheDesigner />
      </div> */}
      
      {/* Parallax Image Gallery - Full Width */}
      <div className="mt-20 w-full">
        <Skiper30 />
      </div>

      
      
     

      <div className="max-w-2xl w-full mx-auto">
        {/* Resources I Use Section */}
        <div className="mt-20">
          <span className="uppercase tracking-widest text-gray-400 text-xs mb-3 block">
            My Go-To Stack
          </span>
          <h2 className="text-lg sm:text-2xl lg:text-3xl text-gray-900 font-bold  mb-2 flex items-center gap-2">
            <span>My Tech Stack</span>
        
          </h2>
          <h2 className="text-xs sm:text-base mb-6 leading-tight">
            <span className="text-black font-semibold">From wireframes</span>
            <span className="text-gray-500"> to production-ready code, these are the </span>
            <span className="text-black font-semibold">design systems</span>
            <span className="text-gray-500">, </span>
            <span className="text-black font-semibold">dev tools</span>
            <span className="text-gray-500">, and productivity workflows I rely on to move fast, stay focused, and build things that actually work.</span>
          </h2>
          {/* MarqueeIcons component would be rendered here */}
        </div>
        {/* Static Icons Grid */}
        <div className="max-w-2xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mt-12">
          {/* VSCode */}
          <div className="flex flex-col items-center p-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-8 h-8 flex items-center justify-center mb-1">
              {/* ...VSCode SVG... */}
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_4083_2349)">
                  <path
                    d="M23.4268 2.63139L18.4622 0.241029C18.1818 0.106039 17.8664 0.0615332 17.5596 0.113672C17.2528 0.16581 16.9698 0.312014 16.7497 0.532053L0.497395 15.3504C0.0602923 15.749 0.0608592 16.4372 0.498529 16.8351L1.82609 18.0419C1.99952 18.1996 2.22266 18.2917 2.45683 18.3021C2.691 18.3125 2.92144 18.2407 3.1082 18.099L22.6797 3.25152C23.3363 2.75347 24.2794 3.22175 24.2794 4.04588V3.98824C24.2794 3.70475 24.1994 3.42702 24.0485 3.18698C23.8977 2.94695 23.6822 2.75437 23.4268 2.63139Z"
                    fill="#0065A9"
                  />
                  <path
                    d="M23.4268 21.5236L18.4622 23.914C18.1818 24.0489 17.8664 24.0934 17.5596 24.0413C17.2528 23.9892 16.9698 23.843 16.7497 23.623L0.497395 8.80466C0.0602923 8.40611 0.0608592 7.71786 0.498528 7.31997L1.82609 6.11307C1.99953 5.95539 2.22268 5.86337 2.45685 5.85296C2.69102 5.84256 2.92145 5.91442 3.1082 6.05609L22.6797 20.9035C23.3363 21.4015 24.2794 20.9333 24.2794 20.109V20.1668C24.2794 20.4503 24.1994 20.728 24.0485 20.968C23.8977 21.208 23.6822 21.4006 23.4268 21.5236Z"
                    fill="#007ACC"
                  />
                  <path
                    d="M18.447 23.9159C18.1665 24.0508 17.8511 24.0952 17.5443 24.043C17.2375 23.9908 16.9545 23.8446 16.7344 23.6246C17.2901 24.1802 18.2403 23.7866 18.2403 23.0007V1.15737C18.2403 0.371417 17.2901 -0.0221263 16.7344 0.533559C16.9544 0.313503 17.2375 0.167261 17.5443 0.115058C17.8511 0.0628543 18.1665 0.107268 18.447 0.242157L23.4107 2.62921C23.6663 2.75212 23.882 2.94471 24.0329 3.18481C24.1839 3.4249 24.264 3.70274 24.264 3.98635V20.1719C24.264 20.7506 23.9323 21.2783 23.4107 21.529L18.447 23.9159Z"
                    fill="#1F9CF0"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4083_2349">
                    <rect
                      width="24.189"
                      height="24"
                      fill="white"
                      transform="translate(0.169922 0.0921631)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span className="text-xs text-gray-600 font-medium">VS Code</span>
          </div>

          {/* GitHub */}
          <div className="flex flex-col items-center p-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-8 h-8 flex items-center justify-center mb-1">
              {/* ...GitHub SVG... */}
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_4062_36848)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 0.0921631C5.37 0.0921631 0 5.46216 0 12.0922C0 17.4022 3.435 21.8872 8.205 23.4772C8.805 23.5822 9.03 23.2222 9.03 22.9072C9.03 22.6222 9.015 21.6772 9.015 20.6722C6 21.2272 5.22 19.9372 4.98 19.2622C4.845 18.9172 4.26 17.8522 3.75 17.5672C3.33 17.3422 2.73 16.7872 3.735 16.7722C4.68 16.7572 5.355 17.6422 5.58 18.0022C6.66 19.8172 8.385 19.3072 9.075 18.9922C9.18 18.2122 9.495 17.6872 9.84 17.3872C7.17 17.0872 4.38 16.0522 4.38 11.4622C4.38 10.1572 4.845 9.07716 5.61 8.23716C5.49 7.93716 5.07 6.70716 5.73 5.05716C5.73 5.05716 6.735 4.74216 9.03 6.28716C9.99 6.01716 11.01 5.88216 12.03 5.88216C13.05 5.88216 14.07 6.01716 15.03 6.28716C17.325 4.72716 18.33 5.05716 18.33 5.05716C18.99 6.70716 18.57 7.93716 18.45 8.23716C19.215 9.07716 19.68 10.1422 19.68 11.4622C19.68 16.0672 16.875 17.0872 14.205 17.3872C14.64 17.7622 15.015 18.4822 15.015 19.6072C15.015 21.2122 15 22.5022 15 22.9072C15 23.2222 15.225 23.5972 15.825 23.4772C20.565 21.8872 24 17.3872 24 12.0922C24 5.46216 18.63 0.0921631 12 0.0921631Z"
                    fill="#1B1F23"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4062_36848">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.0921631)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span className="text-xs text-gray-600 font-medium">GitHub</span>
          </div>


        </div>
        <div className="mt-12">
        <Certification />
        </div>
        
        <div className="mt-16">
          <FooterNew />
        </div>
      {/* <Footer /> */}
      </div>
      
      {/* Skiper39 - Full width outside max-w-2xl container */}
      <div className="w-full mt-8">
      <Skiper39 />
      </div>
    </section>
  );
} 
