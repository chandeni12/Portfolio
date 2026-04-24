import React from 'react';
import { motion } from 'framer-motion';

// Technology data with icons
const technologies = [
  { name: 'React', icon: 'react', type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'JavaScript', icon: 'javascript', type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Tailwind', icon: 'tailwind', type: 'svg' },
  { name: 'Astro', icon: 'astro', type: 'svg' },
  { name: 'AWS', icon: 'aws', type: 'svg' },
  { name: 'Supabase', icon: 'supabase', type: 'svg' },
  { name: 'MongoDB', icon: 'mongodb', type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', icon: 'postgresql', type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Java', icon: 'java', type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Framer', icon: 'framer', type: 'svg' },
  { name: 'Node.js', icon: 'nodejs', type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', icon: 'express', type: 'svg' },
  { name: 'Prisma ORM', icon: 'prisma', type: 'img', src: 'https://avatars.githubusercontent.com/u/17219288?s=200&v=4' },
  { name: 'Docker', icon: 'docker', type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Shadcn/UI', icon: 'shadcn', type: 'svg' },
  { name: 'Zod', icon: 'zod', type: 'svg' },
  { name: 'tRPC', icon: 'trpc', type: 'img', src: 'https://avatars.githubusercontent.com/u/78041886?s=200&v=4' },
  { name: 'GitHub Actions', icon: 'github', type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Next.js', icon: 'nextjs', type: 'svg' },
  { name: 'Figma', icon: 'figma', type: 'svg' },
  { name: 'Auth0', icon: 'auth0', type: 'svg' },
  { name: 'Git', icon: 'git', type: 'svg' }
];

// Render technology icon based on type
const renderTechnologyIcon = (tech) => {
  if (tech.type === 'img') {
    return <img src={tech.src} alt={tech.name} className="w-6 h-6 sm:w-5 sm:h-5 flex-shrink-0" />;
  }
  
  // SVG icons
  switch (tech.icon) {
    case 'tailwind':
      return (
        <svg width="24" height="24" viewBox="0 0 41 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-5 sm:h-5 flex-shrink-0">
          <g clipPath="url(#clip0_4083_2354)">
            <path d="M20.327 0.0922451C15.0075 0.0922451 11.6828 2.75204 10.3529 8.07147C12.3477 5.41167 14.675 4.41427 17.3348 5.07926C18.8522 5.45858 19.9369 6.55962 21.1375 7.77817C23.0933 9.76347 25.3568 12.0611 30.301 12.0611C35.6204 12.0611 38.9452 9.40128 40.275 4.08186C38.2802 6.74165 35.953 7.73905 33.2932 7.07406C31.7757 6.69474 30.6911 5.5937 29.4904 4.37515C27.5346 2.38986 25.2711 0.0922451 20.327 0.0922451ZM10.3529 12.0611C5.0335 12.0611 1.70872 14.7209 0.378906 20.0403C2.37371 17.3805 4.70093 16.3831 7.36072 17.0481C8.87818 17.4274 9.96285 18.5285 11.1635 19.747C13.1193 21.7323 15.3828 24.0299 20.327 24.0299C25.6464 24.0299 28.9712 21.3701 30.301 16.0507C28.3062 18.7105 25.979 19.7079 23.3192 19.0429C21.8017 18.6636 20.717 17.5625 19.5164 16.344C17.5606 14.3587 15.2971 12.0611 10.3529 12.0611Z" fill="url(#paint0_linear_4083_2354)"/>
          </g>
          <defs>
            <linearGradient id="paint0_linear_4083_2354" x1="-110.452" y1="766.097" x2="3335.23" y2="2752.82" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2298BD"/>
              <stop offset="1" stopColor="#0ED7B5"/>
            </linearGradient>
            <clipPath id="clip0_4083_2354">
              <rect width="39.8961" height="24" fill="white" transform="translate(0.376953 0.0921631)"/>
            </clipPath>
          </defs>
        </svg>
      );
    case 'astro':
      return (
        <svg viewBox="0 0 256 366" xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMidYMid" className="w-6 h-6 sm:w-5 sm:h-5 flex-shrink-0">
          <path d="M182.022 9.147c2.982 3.702 4.502 8.697 7.543 18.687L256 246.074a276.467 276.467 0 0 0-79.426-26.891L133.318 73.008a5.63 5.63 0 0 0-10.802.017L79.784 219.11A276.453 276.453 0 0 0 0 246.04L66.76 27.783c3.051-9.972 4.577-14.959 7.559-18.654a24.541 24.541 0 0 1 9.946-7.358C88.67 0 93.885 0 104.314 0h47.683c10.443 0 15.664 0 20.074 1.774a24.545 24.545 0 0 1 9.95 7.373Z"/>
          <path fill="#FF5D01" d="M189.972 256.46c-10.952 9.364-32.812 15.751-57.992 15.751-30.904 0-56.807-9.621-63.68-22.56-2.458 7.415-3.009 15.903-3.009 21.324 0 0-1.619 26.623 16.898 45.14 0-9.615 7.795-17.41 17.41-17.41 16.48 0 16.46 14.378 16.446 26.043l-.001 1.041c0 17.705 10.82 32.883 26.21 39.28a35.685 35.685 0 0 1-3.588-15.647c0-16.886 9.913-23.173 21.435-30.48 9.167-5.814 19.353-12.274 26.372-25.232a47.588 47.588 0 0 0 5.742-22.735c0-5.06-.786-9.938-2.243-14.516Z"/>
        </svg>
      );
    case 'aws':
      return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 304 182" className="w-6 h-6 sm:w-5 sm:h-5 flex-shrink-0">
          <style>
            {`.st1{fill-rule:evenodd;clip-rule:evenodd;fill:#f90}`}
          </style>
          <path d="m86 66 2 9c0 3 1 5 3 8v2l-1 3-7 4-2 1-3-1-4-5-3-6c-8 9-18 14-29 14-9 0-16-3-20-8-5-4-8-11-8-19s3-15 9-20c6-6 14-8 25-8a79 79 0 0 1 22 3v-7c0-8-2-13-5-16-3-4-8-5-16-5l-11 1a80 80 0 0 0-14 5h-2c-1 0-2-1-2-3v-5l1-3c0-1 1-2 3-2l12-5 16-2c12 0 20 3 26 8 5 6 8 14 8 25v32zM46 82l10-2c4-1 7-4 10-7l3-6 1-9v-4a84 84 0 0 0-19-2c-6 0-11 1-15 4-3 2-4 6-4 11s1 8 3 11c3 2 6 4 11 4zm80 10-4-1-2-3-23-78-1-4 2-2h10l4 1 2 4 17 66 15-66 2-4 4-1h8l4 1 2 4 16 67 17-67 2-4 4-1h9c2 0 3 1 3 2v2l-1 2-24 78-2 4-4 1h-9l-4-1-1-4-16-65-15 64-2 4-4 1h-9zm129 3a66 66 0 0 1-27-6l-3-3-1-2v-5c0-2 1-3 2-3h2l3 1a54 54 0 0 0 23 5c6 0 11-2 14-4 4-2 5-5 5-9l-2-7-10-5-15-5c-7-2-13-6-16-10a24 24 0 0 1 5-34l10-5a44 44 0 0 1 20-2 110 110 0 0 1 12 3l4 2 3 2 1 4v4c0 3-1 4-2 4l-4-2c-6-2-12-3-19-3-6 0-11 0-14 2s-4 5-4 9c0 3 1 5 3 7s5 4 11 6l14 4c7 3 12 6 15 10s5 9 5 14l-3 12-7 8c-3 3-7 5-11 6l-14 2z" style={{fill:"#252f3e"}}/>
          <path className="st1" d="M274 144A220 220 0 0 1 4 124c-4-3-1-6 2-4a300 300 0 0 0 263 16c5-2 10 4 5 8z"/>
          <path className="st1" d="M287 128c-4-5-28-3-38-1-4 0-4-3-1-5 19-13 50-9 53-5 4 5-1 36-18 51-3 2-6 1-5-2 5-10 13-33 9-38z"/>
        </svg>
      );
    case 'supabase':
      return (
        <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-5 sm:h-5 flex-shrink-0">
          <g clipPath="url(#clip0_4088_2779)">
            <mask id="mask0_4088_2779" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
              <path d="M23.1504 0.0921631H0V24.0922H23.1504V0.0921631Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_4088_2779)">
              <path d="M13.5322 23.5153C12.9249 24.2801 11.6935 23.8611 11.6788 22.8845L11.4648 8.60104H21.069C22.8086 8.60104 23.7788 10.6103 22.6971 11.9727L13.5322 23.5153Z" fill="url(#paint0_linear_4088_2779)"/>
              <path d="M13.5322 23.5153C12.9249 24.2801 11.6935 23.8611 11.6788 22.8845L11.4648 8.60104H21.069C22.8086 8.60104 23.7788 10.6103 22.6971 11.9727L13.5322 23.5153Z" fill="url(#paint1_linear_4088_2779)" fillOpacity="0.2"/>
              <path d="M9.62548 0.532021C10.2328 -0.232879 11.4642 0.186232 11.4789 1.16281L11.5726 15.4463H2.08865C0.349021 15.4463 -0.621201 13.437 0.460551 12.0746L9.62548 0.532021Z" fill="#3ECF8E"/>
            </g>
          </g>
          <defs>
            <linearGradient id="paint0_linear_4088_2779" x1="11.4648" y1="11.7681" x2="20.0007" y2="15.348" gradientUnits="userSpaceOnUse">
              <stop stopColor="#249361"/>
              <stop offset="1" stopColor="#3ECF8E"/>
            </linearGradient>
            <linearGradient id="paint1_linear_4088_2779" x1="7.6805" y1="6.5866" x2="11.5733" y2="13.9146" gradientUnits="userSpaceOnUse">
              <stop/>
              <stop offset="1" stopOpacity="0"/>
            </linearGradient>
            <clipPath id="clip0_4088_2779">
              <rect width="23.28" height="24" fill="white" transform="translate(0 0.0921631)"/>
            </clipPath>
          </defs>
        </svg>
      );
    case 'express':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6 sm:w-5 sm:h-5 flex-shrink-0">
          <path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.53.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z"/>
        </svg>
      );
    case 'shadcn':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-6 h-6 sm:w-5 sm:h-5 flex-shrink-0">
          <path fill="none" d="M0 0h256v256H0z"/>
          <path fill="none" stroke="currentColor" d="M208 128l-80 80M192 40L40 192"/>
        </svg>
      );
    case 'zod':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 203" className="w-6 h-6 sm:w-5 sm:h-5 flex-shrink-0">
          <defs>
            <filter id="a" width="105.2%" height="106.5%" x="-2.2%" y="-2.8%" filterUnits="objectBoundingBox">
              <feOffset dx="1" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"/>
              <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2"/>
              <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.36 0"/>
            </filter>
            <path id="b" d="M200.42 0H53.63L0 53.355l121.76 146.624 9.714-10.9L252 53.857 200.42 0Zm-5.362 12.562 39.84 41.6-112.8 126.558L17 54.162l41.815-41.6h136.243Z"/>
          </defs>
          <path fill="#18253F" d="M60.816 14.033h136.278l39.933 41.69-112.989 126.554L18.957 55.724z"/>
          <path fill="#274D82" d="M151.427 152.386H98.013l-24.124-29.534 68.364-.002.002-4.19h39.078z"/>
          <path fill="#274D82" d="m225.56 43.834-147.382 85.09-19.226-24.051 114.099-65.877-2.096-3.631 30.391-17.546zM146.596 14.075 35.93 77.968 18.719 56.483l74.095-42.78z"/>
          <g transform="translate(2 1.51)">
            <use href="#b" filter="url(#a)"/>
            <use href="#b" fill="#3068B7"/>
          </g>
        </svg>
      );
    case 'nextjs':
      return (
        <svg width="24" height="24" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-5 sm:h-5 flex-shrink-0">
          <mask id="mask0_408_139" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
            <circle cx="90" cy="90" r="90" fill="black"/>
          </mask>
          <g mask="url(#mask0_408_139)">
            <circle cx="90" cy="90" r="87" fill="black" stroke="white" strokeWidth="6"/>
            <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_139)"/>
            <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_408_139)"/>
          </g>
          <defs>
            <linearGradient id="paint0_linear_408_139" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="1" stopColor="white" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_408_139" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="1" stopColor="white" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      );
    case 'framer':
      return(
        <svg width="17" height="25" viewBox="0 0 17 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-5 sm:h-5 flex-shrink-0">
          <g clipPath="url(#clip0_4066_38056)">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.16621 8.17203H16.1662V0.332031H0.326172V0.412031L8.16621 8.17203Z" fill="#191D26"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M8.16605 8.172H0.166016V16.012H16.0061V15.932L8.16605 8.172Z" fill="#191D26"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M0.246094 15.932H8.16613V23.852L0.246094 15.932Z" fill="#191D26"/>
          </g>
          <defs>
            <clipPath id="clip0_4066_38056">
              <rect width="16.8" height="24" fill="white" transform="translate(0.00585938 0.0921631)"/>
            </clipPath>
          </defs>
        </svg>
      );
    case 'figma':
      return (
        <svg width="16" height="24" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-5 sm:h-5 flex-shrink-0">
          <g clipPath="url(#clip0_4066_38059)">
            <path d="M4.00195 24.0922C6.20995 24.0922 8.00195 22.3002 8.00195 20.0922V16.0922H4.00195C1.79395 16.0922 0.00195312 17.8842 0.00195312 20.0922C0.00195312 22.3002 1.79395 24.0922 4.00195 24.0922Z" fill="#0ACF83"/>
            <path d="M0.00195312 12.0922C0.00195312 9.88416 1.79395 8.09216 4.00195 8.09216H8.00195V16.0922H4.00195C1.79395 16.0922 0.00195312 14.3002 0.00195312 12.0922Z" fill="#A259FF"/>
            <path d="M0.00195312 4.09216C0.00195312 1.88416 1.79395 0.0921631 4.00195 0.0921631H8.00195V8.09216H4.00195C1.79395 8.09216 0.00195312 6.30016 0.00195312 4.09216Z" fill="#F24E1E"/>
            <path d="M8.00195 0.0921631H12.002C14.21 0.0921631 16.002 1.88416 16.002 4.09216C16.002 6.30016 14.21 8.09216 12.002 8.09216H8.00195V0.0921631Z" fill="#FF7262"/>
            <path d="M16.002 12.0922C16.002 14.3002 14.21 16.0922 12.002 16.0922C9.79395 16.0922 8.00195 14.3002 8.00195 12.0922C8.00195 9.88416 9.79395 8.09216 12.002 8.09216C14.21 8.09216 16.002 9.88416 16.002 12.0922Z" fill="#1ABCFE"/>
          </g>
          <defs>
            <clipPath id="clip0_4066_38059">
              <rect width="16.0032" height="24" fill="white" transform="translate(0 0.0921631)"/>
            </clipPath>
          </defs>
        </svg>
      );
    case 'auth0':
      return (
        <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-5 sm:h-5 flex-shrink-0">
          <g clipPath="url(#clip0_4083_2424)">
            <path d="M22.0837 7.54077L19.7237 0.0927734H4.45074L2.12374 7.54077C0.771744 11.8528 2.15374 16.7468 5.93874 19.5558L12.1107 24.0928L18.2677 19.5408C22.0227 16.7308 23.4497 11.8528 22.0827 7.52577L15.9227 12.1058L18.2657 19.5558L12.1087 14.9588L5.95074 19.5388L8.30874 12.1058L2.12074 7.55577L9.75074 7.51077L12.1117 0.0927734L14.4677 7.49677L22.0837 7.54077Z" fill="#EB5424"/>
          </g>
          <defs>
            <clipPath id="clip0_4083_2424">
              <rect width="24" height="24" fill="white" transform="translate(0.0507812 0.0921631)"/>
            </clipPath>
          </defs>
        </svg>
      );
    case 'git':
      return (
        <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-5 sm:h-5 flex-shrink-0">
          <g clipPath="url(#clip0_4083_2394)">
            <path d="M24.137 11.0238L13.6586 0.544471C13.3687 0.254849 12.9757 0.0921631 12.5659 0.0921631C12.1561 0.0921631 11.7631 0.254849 11.4732 0.544471L9.29731 2.71947L12.0573 5.48041C12.3828 5.36935 12.733 5.35202 13.0678 5.4304C13.4027 5.50877 13.7088 5.67969 13.9512 5.92367C14.1936 6.16764 14.3626 6.47484 14.4388 6.81021C14.515 7.14558 14.4955 7.49563 14.3823 7.82041L17.042 10.481C17.4395 10.3444 17.8719 10.3481 18.2671 10.4915C18.6622 10.635 18.9963 10.9096 19.2136 11.2694C19.4308 11.6293 19.5182 12.0528 19.4611 12.4693C19.404 12.8858 19.2059 13.2701 18.8998 13.5583C18.5937 13.8464 18.198 14.0209 17.7789 14.0528C17.3597 14.0846 16.9422 13.9718 16.5961 13.7332C16.25 13.4945 15.9962 13.1445 15.8769 12.7414C15.7575 12.3383 15.78 11.9065 15.9404 11.5179L13.4598 9.03635V15.5651C13.8369 15.7515 14.1386 16.0616 14.3148 16.4435C14.4909 16.8255 14.5309 17.2563 14.4279 17.6641C14.325 18.0719 14.0854 18.4322 13.749 18.6847C13.4127 18.9373 12.9999 19.067 12.5795 19.0521C12.1592 19.0373 11.7566 18.8788 11.4389 18.6031C11.1212 18.3274 10.9077 17.9512 10.8337 17.5371C10.7598 17.123 10.8301 16.6961 11.0328 16.3276C11.2355 15.959 11.5584 15.671 11.9476 15.5117V8.92385C11.723 8.83184 11.5189 8.69627 11.347 8.52496C11.175 8.35365 11.0387 8.15 10.9459 7.92574C10.8531 7.70149 10.8056 7.46108 10.8061 7.21837C10.8067 6.97567 10.8553 6.73548 10.9492 6.51166L8.22668 3.7901L1.04262 10.9751C0.752712 11.265 0.589844 11.6582 0.589844 12.0682C0.589844 12.4782 0.752712 12.8714 1.04262 13.1613L11.5211 23.6398C11.811 23.9297 12.2042 24.0926 12.6142 24.0926C13.0242 24.0926 13.4174 23.9297 13.7073 23.6398L24.137 13.2101C24.427 12.92 24.5899 12.5267 24.5899 12.1165C24.5899 11.7064 24.427 11.313 24.137 11.0229" fill="#DE4C36"/>
          </g>
          <defs>
            <clipPath id="clip0_4083_2394">
              <rect width="24" height="24" fill="white" transform="translate(0.589844 0.0921631)"/>
            </clipPath>
          </defs>
        </svg>
      );
    default:
      return null;
  }
};

const TechnologyMarquee = ({ className = "", speed = "normal" }) => {
  // Shuffle technologies for variety
  const shuffledTechnologies = React.useMemo(() => {
    const shuffleArray = (array) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };
    return shuffleArray(technologies);
  }, []);

  // Animation speed based on prop
  const getAnimationSpeed = () => {
    switch (speed) {
      case "slow": return "20s";
      case "fast": return "10s";
      default: return "18s";
    }
  };

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* Gradient overlays for smooth fade effect */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-8 md:w-16 z-10 bg-gradient-to-r from-white via-white/80 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-8 md:w-16 z-10 bg-gradient-to-l from-white via-white/80 to-transparent" />
      
      {/* Marquee Container */}
      <div className="overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center whitespace-nowrap flex-nowrap"
          style={{
            animation: `marquee ${getAnimationSpeed()} linear infinite`,
            willChange: 'transform'
          }}
        >
          {/* First set of technologies */}
          {shuffledTechnologies.map((tech, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 bg-white flex-shrink-0 shadow-sm hover:shadow-md transition-shadow mx-2 min-w-max"
            >
              {renderTechnologyIcon(tech)}
              <span className="text-xs font-medium text-gray-700 whitespace-nowrap flex-shrink-0">
                {tech.name}
              </span>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {shuffledTechnologies.map((tech, index) => (
            <div 
              key={`dup-${index}`}
              className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 bg-white flex-shrink-0 shadow-sm hover:shadow-md transition-shadow mx-2 min-w-max"
            >
              {renderTechnologyIcon(tech)}
              <span className="text-xs font-medium text-gray-700 whitespace-nowrap flex-shrink-0">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechnologyMarquee; 