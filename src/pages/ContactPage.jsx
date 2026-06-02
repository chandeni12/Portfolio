import React, { useEffect, useState } from "react";
import ProfileTop from "../components/ProfileTop";
import FooterNew from "../components/FooterNew";
import { Skiper39 } from "../components/ui/skiper-ui/skiper39";
import { Send, User, Mail, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [result, setResult] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Replace this with your Web3Forms access key (Get one for free at https://web3forms.com/)
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully! I will get back to you soon.");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error(error);
      setResult("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <section className="flex flex-col items-center bg-white dark:bg-[#09090b] text-gray-900 dark:text-gray-100 transition-colors duration-500 min-h-screen">
        <div className="w-full max-w-2xl mx-auto flex flex-col items-start bg-white dark:bg-[#09090b]">
          <div className="w-full">
            <ProfileTop />
          </div>
          
          <div className="flex flex-col items-center justify-center w-full mt-4">
            <div className="text-center text-xs text-black dark:text-white opacity-50 mb-2 uppercase">
              contact
            </div>
            <div className="w-px h-16 mb-2 leading-tight opacity-40 bg-gradient-to-b from-gray-200 via-gray-300 to-black dark:from-zinc-800 dark:via-zinc-700 dark:to-white"></div>
          </div>
          
          <div className="w-full mx-auto px-4 sm:px-0 mb-8 mt-4 pointer-events-auto">
             <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-3 text-gray-900 dark:text-white leading-tight text-center">
               Let's <span className="text-black dark:text-white font-extrabold drop-shadow-sm">Connect</span>
             </h1>
             <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8 text-center max-w-lg mx-auto">
               Have a question or want to work together? Fill out the form below and I'll receive a direct notification to my email.
             </p>

             <div className="bg-white dark:bg-zinc-900/50 border border-gray-200 dark:border-white/10 rounded-2xl p-6 sm:p-10 flex flex-col items-center shadow-lg w-full max-w-xl mx-auto z-10 relative">
               <form onSubmit={onSubmit} className="w-full space-y-5">
                 <div className="space-y-1 text-left w-full">
                   <label htmlFor="name" className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                       <User size={16} /> Name
                   </label>
                   <input 
                     type="text" 
                     name="name" 
                     id="name"
                     required 
                     placeholder="John Doe"
                     className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-850 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all text-gray-900 dark:text-gray-100"
                   />
                 </div>

                 <div className="space-y-1 text-left w-full">
                   <label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                     <Mail size={16} /> Email
                   </label>
                   <input 
                     type="email" 
                     name="email" 
                     id="email"
                     required 
                     placeholder="john@example.com"
                     className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-850 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all text-gray-900 dark:text-gray-100"
                   />
                 </div>

                 <div className="space-y-1 text-left w-full">
                   <label htmlFor="message" className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                     <MessageSquare size={16} /> Message
                   </label>
                   <textarea 
                     name="message" 
                     id="message"
                     required 
                     rows="4"
                     placeholder="How can I help you?"
                     className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-850 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all resize-none text-gray-900 dark:text-gray-100"
                   ></textarea>
                 </div>

                 <button 
                   type="submit"
                   className="w-full group inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-xl font-medium bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-200 shadow-md"
                 >
                   <Send size={18} />
                   <span>Send Message</span>
                 </button>
               </form>
               {result && (
                 <p className="mt-4 text-sm font-medium text-gray-700 dark:text-gray-300 text-center bg-gray-100 dark:bg-zinc-800 px-4 py-2 rounded-lg w-full">{result}</p>
               )}
             </div>
          </div>

          <div className="w-full max-w-2xl mx-auto mt-8">
            <FooterNew />
          </div>
        </div>
        <div className="w-full mt-8 pointer-events-none">
          <Skiper39 />
        </div>
      </section>
    </>
  );
}
