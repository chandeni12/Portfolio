import React from "react";
import { Activity, BookOpen, Rocket, User } from "lucide-react";

const MeetTheDesigner = () => {
  return (
    <div className="w-full">
      <div className="max-w-3xl mx-auto px-4 w-full">
        <div className="flex flex-col gap-10">
          {/* <div className="flex gap-4 flex-col items-start">
            <div className="flex gap-2 flex-col">
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
            </div>
          </div> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {/* Card 1 - Bio Card (2/3 width) */}
            <div className="bg-muted rounded-xl border border-gray-200 h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
            <div className="flex items-center gap-2 px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm rounded-xl font-medium flex-shrink-0 bg-green-50 w-fit">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-white"></span>
              </span>
              <span className="text-green-700 font-semibold tracking-tight">Open to Opportunities</span>
            </div>
              <div className="flex flex-col">
                <div className="flex gap-2 mb-3">
                  <span className="bg-[#FCFCFC] border border-gray-200 text-gray-800 text-xs px-3 py-1 font-medium shadow-sm" style={{ borderRadius: "0.375rem" }}>
                    Full Stack Developer
                  </span>
                  <span className="bg-[#FCFCFC] border border-gray-200 text-gray-800 text-xs px-3 py-1 font-medium shadow-sm"
                  style={{ borderRadius: "0.375rem" }}>
                    MCA Student
                  </span>
                </div>
                <p className="text-muted-foreground text-base font-bold">
                  I'm Nishal Poojary from India — a Master's student and
                  full-stack developer, turning ideas into apps that solve real
                  problems.
                </p>
              </div>
            </div>

            {/* Card 2 - Goals Card (1/3 width) */}
            <div className="bg-muted rounded-xl border border-gray-200 aspect-square p-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Rocket className="w-5 h-5 text-gray-700" />
                  <span className="text-base font-semibold text-gray-700">Where I’m Headed</span>
                </div>
                <p className="text-xs text-gray-500 mb-1.5">Few things I’m aiming for</p>
              </div>
              <div className="flex-1 flex flex-col justify-end">
                <div className="space-y-2">
                  {/* Goal 1 - Completed */}
                  <div className="flex items-center gap-2 p-1.5 bg-[#FCFCFC] border border-gray-100"
                  style={{ borderRadius: "0.375rem" }}>
                    <div className="w-3 h-3 rounded-full flex items-center justify-center relative">
                      {/* Perfect half: top middle to left bottom */}
                      <span
                        className="absolute left-0 top-0 w-3 h-3 rounded-full"
                        style={{
                          background: "conic-gradient(#1F2937 0deg 180deg, #D1D5DB 180deg 360deg)"
                        }}
                      ></span>
                      <div className="w-1 h-1 bg-white rounded-full z-10"></div>
                    </div>
                    <span className="text-black line-through text-xs">
                      Launch my first SaaS product
                    </span>
                  </div>
                  {/* Goal 2 - Pending */}
                  <div className="flex items-center gap-2 p-1.5 bg-[#FCFCFC] border border-gray-100"
                  style={{ borderRadius: "0.375rem" }}>
                    <div className="w-3 h-3 border-2 border-gray-300 rounded-full"></div>
                    <span className="text-black text-xs">
                      Travel abroad & explore
                    </span>
                  </div>
                  {/* Goal 3 - Pending */}
                  <div className="flex items-center gap-2 p-1.5 bg-[#FCFCFC] border border-gray-100"
                  style={{ borderRadius: "0.375rem" }}>
                    <div className="w-3 h-3 border-2 border-gray-300 rounded-full"></div>
                    <span className="text-black text-xs">
                      Help people & animals
                    </span>
                  </div>
                  {/* Goal 4 - Pending */}
                  <div className="flex items-center gap-2 p-1.5 bg-[#FCFCFC] border border-gray-100"
                  style={{ borderRadius: "0.375rem" }}>
                    <div className="w-3 h-3 border-2 border-gray-300 rounded-full"></div>
                    <span className="text-black text-xs">
                      Land my dream tech role
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Standard Card */}
            <div className="bg-muted rounded-xl border border-gray-200 aspect-square p-4 flex flex-col justify-center items-start">
              <div className="flex items-center gap-2 mb-0">
                <h3 className="text-lg font-bold">My process</h3>
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/external-creatype-outline-colourcreatype/64/external-arrow-essential-ui-v3-creatype-outline-colourcreatype-2.png"
                  alt="external-arrow-essential-ui-v3-creatype-outline-colourcreatype-2"
                  className="inline-block"
                />
              </div>
              <p className="text-xs text-gray-500 mb-2">The Way I Work</p>
              {["Research", "Design", "Develop", "Lauch"].map((option, idx) => (
                <div
                  key={option}
                  className="w-full bg-[#FCFCFC] border border-gray-100 px-2 py-1 flex items-center gap-2 mb-2"
                  style={{ borderRadius: "0.375rem" }}
                >
                  {option === "Research" && (
                    <span className="inline-flex items-center">
                      <svg
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1 text-gray-700"
                      >
                        <path d="M19 11.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0m-2.107 5.42 3.08 3.08"/>
                      </svg>
                    </span>
                  )}
                  {option === "Design" && (
                    <span className="inline-flex items-center">
                      <svg
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1 text-gray-700"
                      >
                        <path d="M6 12a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3m0 6a3 3 0 0 1 3-3h3v3a3 3 0 0 1-6 0"/>
                        <path d="M12 12a3.001 3.001 0 0 1 5.121-2.121A3.001 3.001 0 1 1 12.001 12"/>
                        <path d="M12 3h3a3 3 0 0 1 0 6h-3zM6 6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3"/>
                      </svg>
                    </span>
                  )}
                  {option === "Develop" && (
                    <span className="inline-flex items-center">
                      <svg
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1 text-gray-700"
                      >
                        <path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"/>
                        <path d="m14.908 9.7.132.131c1.022 1.022 1.534 1.534 1.534 2.169s-.512 1.146-1.534 2.169l-.132.132M13.072 8l-2.143 8M9.092 9.7l-.132.131C7.938 10.853 7.427 11.365 7.427 12s.51 1.146 1.533 2.169l.132.132"/>
                      </svg>
                    </span>
                  )}
                  {option === "Lauch" && (
                    <span className="inline-flex items-center">
                      <svg
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1 text-gray-700"
                      >
                        <path d="m7.75 13.85 2.4 2.4m-2.4-2.4s1.417-3.542 3.434-6m-3.434 6c-5.219-1.305-.53-6 3.434-6m-1.034 8.4s3.542-1.417 6-3.434m-6 3.434c1.305 5.218 6 .53 6-3.434M11.184 7.85c2.04-2.486 5.403-3.6 8.566-3.6 0 3.163-1.114 6.525-3.6 8.566m-1.7-3.359.707-.707m-9.638 7.826c-.952.801-1.269 3.179-1.269 3.179s2.372-.318 3.171-1.272c.45-.534.444-1.354-.057-1.85a1.394 1.394 0 0 0-1.845-.057"/>
                      </svg>
                    </span>
                  )}
                  <span className="text-sm tracking-tight">{option}</span>
                </div>
              ))}
            </div>


            {/* Card 5 - What I'm Reading (1/3 width) */}
            <div className="bg-muted rounded-xl border border-gray-200 aspect-square p-4 flex flex-col">
              {/* Badge */}
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-gray-700" />
                <span className="text-xs text-gray-600 font-medium">What I'm reading</span>
              </div>
              
              {/* Book Content */}
              <div className="flex-1 flex flex-col">
                <div>
                  {/* Book Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight">
                    Atomic Habits
                  </h3>
                  
                  {/* Author */}
                  <p className="text-sm text-gray-600 mb-4">
                    James Clear
                  </p>
                </div>
                
                {/* Book Cover - Full Width */}
                <div className="w-full">
                  <img
                    src="/atomicimg.png"
                    alt="Atomic Habits Book Cover"
                    className="w-full h-28 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheDesigner;
