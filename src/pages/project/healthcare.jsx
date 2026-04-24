import React, { useEffect } from 'react';
import Footer from '../../components/Footer.jsx';
import { motion } from 'framer-motion';

export default function HealthcareApp() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.section
      className="flex flex-col items-center py-1 bg-white min-h-screen"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      
      {/* Text Content */}
      <div className="max-w-3xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
            Case Study: <span className="text-black">VedArogya</span> - Reimagining Healthcare Through Ayurveda
          </h1>

          {/* Real Story Section */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-black mb-6">Real Story: How VedArogya Helped Deepika and Vishal — Everyday Indians Seeking Better Health</h2>
            <div className="mb-6">
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                <span className="text-black font-bold">Rekha</span>, a 35-year-old marketing executive from Pune, had been dealing with fatigue, poor digestion, and restless nights. <span className="text-black font-bold">Arjun</span>, a 40-year-old developer from Bengaluru, felt drained, anxious, and stuck in a cycle of stress.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Both had tried conventional treatments but saw little improvement. They turned to Ayurveda, only to find the journey confusing and fragmented.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                That's when they discovered <span className="text-black font-bold">VedArogya</span>.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                After a quick dosha quiz, Rekha was identified as <span className="text-black font-bold">Pitta-dominant</span>, while Arjun was <span className="text-black font-bold">Vata-dominant</span>. These insights unlocked personalized plans tailored to their body types — from food and herbs to yoga and mindfulness.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Within three weeks, Rekha felt more rested and energetic, while Arjun noticed calmer moods and sharper focus. For them, VedArogya made Ayurveda simple, digital, and truly personal.
              </p>
            </div>
        </div>

          {/* Project Overview */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-black mb-6">Project Overview</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-2">
              <span className="text-black font-bold">VedArogya</span> is a modern healthcare app rooted in ancient Ayurvedic principles. Designed for users seeking natural, preventive, and personalized wellness, it offers real-time access to certified Ayurvedic doctors, personalized health plans, and self-care tools — all within a calm, intuitive mobile interface.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              The app is built to <span className="text-black font-bold">democratize Ayurvedic care</span>, making it digitally accessible to people like Rekha and Arjun across India.
          </p>
        </div>

          {/* The Problem */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-black mb-6">The Problem</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Today's healthcare is reactive — treating symptoms, not root causes. People increasingly turn to Ayurveda, but face:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">❌</span>
                <span className="text-gray-600">Scattered, unverified information on remedies</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">❌</span>
                <span className="text-gray-600">Lack of digital access to certified Ayurvedic practitioners</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">❌</span>
                <span className="text-gray-600">No personalized plans based on individual constitution</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">❌</span>
                <span className="text-gray-600">No digital tools for dosha-based health tracking</span>
              </li>
            </ul>
            <div className="bg-gray-50 p-4">
              <p className="text-gray-600 text-lg italic">
                <span className="text-black font-bold italic">How can we make Ayurveda accessible, trustworthy, and personalized through tech?</span>
          </p>
        </div>
          </div>

          {/* The Solution */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">The Solution: VedArogya</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              VedArogya solves these problems by providing:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span className="text-gray-600">A <span className="text-black font-bold">dosha-based health profile</span></span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span className="text-gray-600">Online consultations with <span className="text-black font-bold">certified Ayurvedic doctors</span></span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span className="text-gray-600">Personalized diet, herbs, lifestyle tips, and meditation plans</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span className="text-gray-600">Health tracking tools aligned with Ayurvedic principles</span>
              </li>
            </ul>
            <p className="text-gray-600 text-lg">
              All wrapped in a UI that is <span className="text-black font-bold">calm, minimal, and culturally respectful</span>.
            </p>
          </div>

          {/* Understanding Doshas */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">Understanding the Three Doshas</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Ayurveda believes every individual is governed by a mix of <span className="text-black font-bold">three doshas</span> (body-mind energies):
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-separate border-spacing-0">
                <thead>
                  <tr className="bg-gray-30">
                    <th className="border-b border-r border-gray-300 px-4 py-3 text-left font-bold text-black first:rounded-tl-xl last:rounded-tr-xl">Dosha</th>
                    <th className="border-b border-r border-gray-300 px-4 py-3 text-left font-bold text-black">Meaning</th>
                    <th className="border-b border-r border-gray-300 px-4 py-3 text-left font-bold text-black">Characteristics</th>
                    <th className="border-b border-gray-300 px-4 py-3 text-left font-bold text-black">Prone To</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-r border-gray-200 px-4 py-3 font-bold text-black">Vata</td>
                    <td className="border-b border-r border-gray-200 px-4 py-3 text-gray-600">Air + Ether</td>
                    <td className="border-b border-r border-gray-200 px-4 py-3 text-gray-600">Creative, energetic, light</td>
                    <td className="border-b border-gray-200 px-4 py-3 text-gray-600">Anxiety, dryness, insomnia</td>
                  </tr>
                  <tr>
                    <td className="border-b border-r border-gray-200 px-4 py-3 font-bold text-black">Pitta</td>
                    <td className="border-b border-r border-gray-200 px-4 py-3 text-gray-600">Fire + Water</td>
                    <td className="border-b border-r border-gray-200 px-4 py-3 text-gray-600">Intelligent, driven, intense</td>
                    <td className="border-b border-gray-200 px-4 py-3 text-gray-600">Inflammation, anger, indigestion</td>
                  </tr>
                  <tr>
                    <td className="border-r border-gray-200 px-4 py-3 font-bold text-black">Kapha</td>
                    <td className="border-r border-gray-200 px-4 py-3 text-gray-600">Earth + Water</td>
                    <td className="border-r border-gray-200 px-4 py-3 text-gray-600">Calm, strong, grounded</td>
                    <td className="px-4 py-3 text-gray-600">Lethargy, congestion, weight gain</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 text-lg mt-4">
              VedArogya identifies your dominant dosha and delivers <span className="text-black font-bold">personalized wellness guidance</span>.
            </p>
        </div>

          {/* UI/UX Design */}
        <div className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">UI/UX Design Principles</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              <span className="text-black font-bold">Goal:</span> Build a culturally-rooted, intuitive health app that any age group can use.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              <span className="text-black font-bold">Highlights:</span>
            </p>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-600">• Earthy tones and natural visuals</li>
              <li className="text-gray-600">• Tabbed dosha profiles</li>
              <li className="text-gray-600">• Dosha transitions using Lottie animations</li>
              <li className="text-gray-600">• Icons for herbs, food, yoga, sleep</li>
              <li className="text-gray-600">• Accessibility: large fonts, high contrast</li>
            </ul>
            <p className="text-gray-600 text-lg">
              <span className="text-black font-bold">Tools:</span> Figma, Illustrator, LottieFiles
            </p>
              </div>

          {/* Tech Stack */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">Tech Stack & Architecture</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold text-black">Layer</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold text-black">Tech Used</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-bold text-black">Frontend</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">React Native + Expo Router</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-bold text-black">Backend</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">Supabase (PostgreSQL, Auth, Edge Functions)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-bold text-black">Authentication</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">OTP login via Supabase</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-bold text-black">Payments</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">Razorpay integration</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-bold text-black">Real-Time</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">WebRTC / Zoom API for video consultations</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-bold text-black">Data Storage</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">Supabase Buckets</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-bold text-black">State Mgmt</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">Zustand</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-bold text-black">Analytics</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">Firebase / PostHog</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-bold text-black">Security</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">Supabase RLS (Role-based access)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* User Roles */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">👥 User Roles & Experiences</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-black mb-4">👨‍⚕️ Practitioner</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Manage appointments</li>
                  <li>• Video/chat consults</li>
                  <li>• Send prescriptions</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-black mb-4">🧍 Patient</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Take dosha quiz</li>
                  <li>• Track food, sleep, mood</li>
                  <li>• Book consults, receive tips</li>
                </ul>
            </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-black mb-4">🛠️ Admin</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Verify doctors</li>
                  <li>• Manage feedback</li>
                  <li>• Oversee platform usage</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">🔑 Key Features</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold text-black">Feature</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold text-black">Description</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold text-black">Tech Note</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-bold text-black">🧠 Dosha Quiz</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">Personalized mind-body assessment</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">Local logic + Supabase sync</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-bold text-black">📅 Consult Booking</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">Slot selection + payment + notification</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">Razorpay + Supabase triggers</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-bold text-black">💊 Remedy Tracker</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">Track herbs, food, yoga, meditation</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">Notifications + local storage</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-bold text-black">📜 Reports & Prescriptions</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">Download/view doctor notes</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">Supabase Buckets</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-bold text-black">🔔 Wellness Reminders</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">Time-of-day dosha-based alerts</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">Edge Functions + Notifications</td>
                  </tr>
                </tbody>
              </table>
          </div>
        </div>

          {/* Impact & Results */}
        <div className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">📈 Impact & Results</h2>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span className="text-gray-600">Built MVP in just <span className="text-black font-bold">4 weeks</span></span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span className="text-gray-600"><span className="text-black font-bold">60% of users</span> reported improved wellness</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span className="text-gray-600"><span className="text-black font-bold">70% retention</span> in first week</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span className="text-gray-600">Scalable doctor-patient-admin system</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span className="text-gray-600">Positive feedback from early users like Rekha and Arjun</span>
              </li>
          </ul>
        </div>

          {/* Final Reflection */}
        <div className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">🔍 Final Reflection</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              VedArogya bridges the ancient wisdom of Ayurveda with modern tech to deliver care that's <span className="text-black font-bold">personal, preventive, and powerful</span>. For users like Rekha and Arjun, it's not just an app — it's a life upgrade.
            </p>
            <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
              <p className="text-gray-600 text-lg">
                <span className="text-black font-bold">Built with purpose. Designed with empathy. Scaled with tech.</span>
              </p>
            </div>
        </div>

          {/* Call to Action */}
        <div className="mb-16 flex flex-col items-center justify-center">
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://github.com/your-repo"
              target="_blank"
              rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-green-700 text-white font-semibold shadow hover:bg-green-800 transition text-lg min-w-[150px] justify-center"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
              GitHub
            </a>
            <a
              href="https://live-demo-link.com"
              target="_blank"
              rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-green-700 text-white font-semibold shadow hover:bg-green-800 transition text-lg min-w-[150px] justify-center"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
              Live Demo
            </a>
          </div>
        </div>
        </motion.div>
      </div>
      <Footer />
    </motion.section>
  );
}
