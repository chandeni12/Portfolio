'use client';
import { useState, useEffect } from 'react';
import { TextEffect } from '../core/text-effect';

const specializations = [
  "Web & Mobile Engineer",
  "Blockchain & AR/VR Specialist",
  "UI/UX Designer & Researcher",
  "Product Designer",
];

export function MorphingTextDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % specializations.length);
    }, 3000); // 3 seconds per specialization

    return () => clearInterval(interval);
  }, []);

  return (
    <TextEffect 
      preset='fade-in-blur' 
      speedReveal={1.1} 
      speedSegment={0.3}
      className='text-gray-700 text-base sm:text-sm text-left justify-start font-manrope'
    >
      {specializations[currentIndex]}
    </TextEffect>
  );
} 