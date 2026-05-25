import React from 'react'

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#020817] text-gray-300">
      
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.15),transparent_35%)]"></div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-16 py-24 lg:flex-row">
        
        {/* Left Content */}
        <div className="max-w-2xl">
          
          {/* Heading */}
          <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl">
            अब सब आसान
          </h1>

          {/* Tagline */}
          <h2 className="mb-8 text-2xl font-bold text-orange-500 md:text-4xl">
            "High Quality, Low Cost"
          </h2>

          {/* Description */}
          <p className="mb-10 text-lg leading-9">
            TerraQuest Civils is one of the most learner-centric
            initiatives for Civil Services preparation. Founded by
            <span className="font-semibold">
              {" "}
              Pawan Sir
            </span>{" "}
            (7 UPSC Mains, Author, Ex-Faculty Sunya IAS), our mission is
            to make top-quality mentorship accessible to all.
          </p>

          {/* Social Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            
            <button className="rounded-full border cursor-pointer border-gray-700 px-5 py-2 text-lg font-medium transition duration-300 hover:border-orange-500 hover:text-orange-500">
              Telegram
            </button>

            <button className="rounded-full border cursor-pointer border-gray-700 px-5 py-2 text-lg font-medium transition duration-300 hover:border-orange-500 hover:text-orange-500">
              YouTube
            </button>

            <button className="rounded-full border cursor-pointer border-gray-700 px-5 py-2 text-lg font-medium transition duration-300 hover:border-orange-500 hover:text-orange-500">
              Instagram
            </button>
          </div>
        </div>

        {/* Right Side Card */}
        <div className="relative flex items-center justify-center">
          
          {/* Glow */}
          <div className="absolute h-72 w-72 rounded-full bg-orange-500/20 blur-3xl"></div>

          {/* Card */}
          <div className="relative border border-gray-800 bg-[#111827]/90 px-14 py-12 shadow-2xl backdrop-blur-md rounded-4xl mr-10">
            
            <div className="flex items-center gap-5">
              
              {/* TQ */}
              <h1 className="text-7xl font-extrabold text-orange-500 md:text-8xl">
                TQ
              </h1>

              {/* Text */}
              <div>
                <h2 className="text-5xl font-extrabold leading-none">
                  TERRA
                </h2>

                <h2 className="text-5xl font-extrabold leading-none">
                  QUEST
                </h2>

                <p className="mt-3 text-xl font-medium text-orange-400">
                  अब सब आसान
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

