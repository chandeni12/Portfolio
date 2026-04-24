import React, { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="mb-16 bg-white dark:bg-[#09090b] transition-colors duration-500">
      <div className="w-full max-w-2xl mx-auto px-1">
        <div className="text-left">
          {/* <span className=" uppercase tracking-widest text-gray-500 text-xs mb-2 block">More than just work.</span> */}
          <h2 className="text-lg sm:text-2xl lg:text-3xl mb-3 font-bold text-gray-900 dark:text-gray-50 transition-colors">What I Do & Why</h2>
          <div className="space-y-4 leading-relaxed text-xs sm:text-base text-black/60 dark:text-gray-400 mt-4 transition-colors">
            <p className="text-gray-500 dark:text-gray-400 transition-colors">
              <span className="font-bold text-black dark:text-white transition-colors">I don’t just write code</span> — I architect <span className="font-bold text-black dark:text-white transition-colors">real-world products</span> that solve practical problems. Trained extensively through the <span className="font-bold text-black dark:text-white transition-colors">Delta Full-Stack program</span>, I specialize in building sleek, high-performing interfaces using <span className="font-bold text-black dark:text-white transition-colors">React and Tailwind CSS</span> while maintaining rock-solid backend logic. From dedicated e-commerce platforms to complex real-time mobility solutions like <span className="font-bold text-black dark:text-white transition-colors">Prime:GO</span>, I work across the entire stack to transform great ideas into <span className="font-bold text-black dark:text-white transition-colors">intuitive, highly scalable software.</span>
            </p>
            <p className="text-gray-500 dark:text-gray-400 transition-colors">
              <span className="font-bold text-black dark:text-white transition-colors">Why?</span>{" "}
              Because I believe digital experiences shouldn't just <span className="font-bold text-black dark:text-white transition-colors">function</span> — they need to be <span className="font-bold text-black dark:text-white transition-colors">meaningful, seamless,</span> and <span className="font-bold text-black dark:text-white transition-colors">enjoyable to use.</span> Impactful design and solid underlying engineering working in perfect harmony. <span className="font-bold text-black dark:text-white transition-colors">That’s the exact mindset I bring to every single line of code I write.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 