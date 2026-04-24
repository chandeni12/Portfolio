import { useState, useRef } from 'react';
import { PhoneCall, Sparkle } from 'lucide-react';
import React from 'react';
import { GithubIcon } from './ui/github';
import { MailCheckIcon } from './ui/mail-check';
import { LinkedinIcon } from './ui/linkedin';
import { TwitterIcon } from './ui/twitter';

const LeetCodeIcon = (props) => (
  <svg fill="" width="24" height="24" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>LeetCode icon</title>
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"></path>
  </svg>
);

const TwitterSVG = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
);

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const email = 'nishalpoojary777@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const contacts = [
    {
      icon: MailCheckIcon,
      label: 'Email',
      value: email,
      href: 'mailto:chandenichan6@gmail.com',
      desc: 'Email',
    },
    {
      icon: TwitterIcon,
      label: 'X / Twitter',
      value: 'Where ideas meet people.',
      href: 'https://x.com/devnishal?s=21&t=Q1wJBDpnxSR2JL-evHvOWw',
      desc: 'BTS and design posts',
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      value: 'Work related background',
      href: 'https://in.linkedin.com/in/nishal-poojary-858b01326',
      desc: 'Work related background',
    },
    {
      icon: LeetCodeIcon,
      label: 'LeetCode',
      value: 'DSA & coding challenges',
      href: 'https://leetcode.com/u/WrMcWbmzgS/',
      desc: 'DSA & coding challenges',
    },
  ];

  return (
    <footer className="max-w-3xl mx-auto bg-white/ text-black py-1 relative overflow-hidden">
      <div className="relative w-full flex flex-col items-center">
        <div className="max-w-3xl mx-auto flex flex-col items-start z-10 relative pt-8 pb-8">
          <span className="uppercase tracking-widest text-gray-500 text-xs mb-6 mt-2">Let's connect — or collaborate.</span>
          <h2 className="text-xl md:text-3xl font-normal text-left mb-6 leading-snug max-w-3xl text-black">
          If you're hiring, building, or exploring something meaningful — I'd like to contribute and be part of the journey.
          </h2>
          <div className="flex flex-row gap-4 mb-10 w-full">
            <a
              href="https://cal.com/nishal-pktyks/schedule-a-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white font-medium rounded-full shadow hover:bg-neutral-900 transition-all flex items-center justify-center text-left min-w-[120px] px-5 py-2.5 text-sm md:min-w-[150px] md:px-7 md:py-4 md:text-base lg:min-w-[180px] lg:px-7 lg:py-4 lg:text-base"
            >
              Let's Schedule a Call  <PhoneCall className="ml-2 w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5"/>
            </a>
            <button
              onClick={() => handleCopy('nishalpoojary777@gmail.com')}
              className="bg-white text-black font-medium rounded-full shadow border border-gray-200 hover:bg-gray-50 transition-all flex items-center justify-center text-left min-w-[100px] px-5 py-2.5 text-sm md:min-w-[120px] md:px-7 md:py-4 md:text-base lg:min-w-[150px] lg:px-7 lg:py-4 lg:text-base"
            >
              {copied ? 'Copied!' : 'Copy Email'}
            </button>
          </div>
  
        </div>
      </div>
      
      {/* Bottom Row: Copyright and Location/Time (outside mesh gradient) */}
      <div className="w-full bg-white py-6 px-1 flex flex-col sm:flex-row justify-between max-w-3xl mx-auto rounded-b-2xl ">
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-1">
            {/* <Sparkle className="w-6 h-6 text-blue-500 mr-2" /> */}
            <span className="text-2xl font-serif text-black/85">Portfolio</span>
          </div>
          <span className="text-gray-500 text-sm">© {new Date().getFullYear()}. Crafted with ❤️ by Nishal Poojary</span>
        </div>
        <div className="flex flex-row gap-2 mt-6 sm:mt-0">
          {[
            { 
              icon: (props) => <GithubIcon {...props} size={22} />, 
              label: 'GitHub',
              href: 'https://github.com/nishal77'
            },
            {
              icon: (props) => (
                <TwitterIcon {...props} size={24} />
              ),
              label: 'Twitter (formerly X)',
              href: 'https://x.com/devnishal?s=21&t=Q1wJBDpnxSR2JL-evHvOWw'
            },
            { 
              icon: (props) => <MailCheckIcon {...props} size={22} />, 
              label: 'Mail',
              href: 'mailto:nishalpoojary777@gmail.com'
            },
            { 
              icon: (props) => <LinkedinIcon {...props} size={22} />, 
              label: 'LinkedIn',
              href: 'https://in.linkedin.com/in/nishal-poojary-858b01326'
            },
            { 
              icon: LeetCodeIcon, 
              label: 'LeetCode',
              href: 'https://leetcode.com/u/WrMcWbmzgS/'
            },
          ].map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              onMouseEnter={() => {
                setHoveredIdx(idx);
              }}
              onMouseLeave={() => {
                setHoveredIdx(null);
              }}
            >
              <span className="flex items-center justify-center h-10 w-10 rounded-xl border border-gray-200 bg-white shadow transition-colors duration-200">
                {typeof item.icon === "function"
                  ? item.icon({ className: `w-6 h-6 ${hoveredIdx === null ? 'text-gray-800' : hoveredIdx === idx ? 'text-black' : 'text-gray-500'}` })
                  : <item.icon className={`w-6 h-6 ${hoveredIdx === null ? 'text-gray-800' : hoveredIdx === idx ? 'text-black' : 'text-gray-500'}`} />
                }
              </span>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-20">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
