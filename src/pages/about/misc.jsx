"use client"

import React from 'react';
import { Linkedin, Headphones } from 'lucide-react';

const Misc = () => {
  return (
    <div className="max-w-2xl mx-auto mt-12">
        <span className="uppercase tracking-widest text-gray-500 text-xs mb-4 mt-2 block">Beyond Work</span>
      <h1 className="text-lg sm:text-2xl lg:text-3xll font-bold text-gray-900 mb-2">
        Life Beyond the Code
      </h1>
      <p className="text-xs sm:text-base mb-6">
        <span className="text-gray-500">This is more than a portfolio — it’s </span>
        <span className="text-black font-bold">my story</span>
        <span className="text-gray-500">, filled with </span>
        <span className="text-black font-bold">experiences</span>
        <span className="text-gray-500">, </span>
        <span className="text-black font-bold">growth</span>
        <span className="text-gray-500">, and a little bit of </span>
        <span className="text-black font-bold">magic</span>
        <span className="text-gray-500">.</span>
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
         {/* Image Card */}
         <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
         <img 
             src="/indiaa.png" 
             alt="India" 
             className="w-full h-full object-cover"
           />
         </div>

         <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 relative">
           {/* Top right: Now Playing with backdrop blur */}
           <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-white/20 shadow-lg z-10">
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1DB954] opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1DB954]"></span>
             </span>
             <span className="text-[10px] text-white font-semibold">Now Playing</span>
           </div>
           
           {/* Main album art - fills entire div */}
           <img 
             src="/OM.webp" 
             alt="OM Symbol" 
             className="w-full h-full object-cover"
           />
           
           {/* Bottom: Play on Spotify */}
           <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent rounded-xl">
             <a
               href="https://open.spotify.com/"
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center justify-center gap-1.5 bg-[#1DB954] hover:bg-[#169943] text-white px-3 py-1.5 rounded-xl font-semibold text-xs transition-all duration-300 shadow-lg hover:shadow-xl"
             >
               <svg viewBox="0 0 256 256" width="12" height="12" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                 <path d="M128 0C57.308 0 0 57.309 0 128c0 70.696 57.309 128 128 128 70.697 0 128-57.304 128-128C256 57.314 198.697.007 127.998.007l.001-.006Zm58.699 184.614c-2.293 3.76-7.215 4.952-10.975 2.644-30.053-18.357-67.885-22.515-112.44-12.335a7.981 7.981 0 0 1-9.552-6.007 7.968 7.968 0 0 1 6-9.553c48.76-11.14 90.583-6.344 124.323 14.276 3.76 2.308 4.952 7.215 2.644 10.975Zm15.667-34.853c-2.89 4.695-9.034 6.178-13.726 3.289-34.406-21.148-86.853-27.273-127.548-14.92-5.278 1.594-10.852-1.38-12.454-6.649-1.59-5.278 1.386-10.842 6.655-12.446 46.485-14.106 104.275-7.273 143.787 17.007 4.692 2.89 6.175 9.034 3.286 13.72v-.001Zm1.345-36.293C162.457 88.964 94.394 86.71 55.007 98.666c-6.325 1.918-13.014-1.653-14.93-7.978-1.917-6.328 1.65-13.012 7.98-14.935C93.27 62.027 168.434 64.68 215.929 92.876c5.702 3.376 7.566 10.724 4.188 16.405-3.362 5.69-10.73 7.565-16.4 4.187h-.006Z" fill="#1ED760"/>
               </svg>
               Play on Spotify
             </a>
           </div>
         </div>

         {/* New Card - Hobbies */}
         <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col relative">
           {/* Top right: Currently Reading with backdrop blur */}
           <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-white/20 shadow-lg z-10">
             <span className="text-[10px] text-white font-semibold">Currently Reading</span>
           </div>
           
           <img 
             src="/book1.jpeg" 
             alt="book" 
             className="w-full h-full object-cover"
           />
         </div>
      </div>
    </div>
  );
};

export default Misc;
