import React from "react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.15),transparent_35%)]"></div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-4 pb-12 pt-6 sm:gap-12 sm:px-6 sm:pb-16 sm:pt-8 md:gap-14 lg:flex-row lg:gap-16 lg:px-10 lg:pb-20">
        {/* Left Content */}
        <div className="w-full max-w-2xl text-center lg:text-left">
          <h1 className="mb-4 text-3xl font-extrabold leading-tight sm:mb-5 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            अब सब आसान
          </h1>

          <h2 className="mb-6 text-lg font-bold text-orange-500 sm:mb-8 sm:text-2xl md:text-3xl lg:text-4xl">
            &quot;High Quality, Low Cost&quot;
          </h2>

          <p className="mb-8 text-base leading-7 sm:mb-10 sm:text-lg sm:leading-8 md:leading-9">
            TerraQuest Civils is one of the most learner-centric initiatives
            for Civil Services preparation. Founded by
            <span className="font-semibold"> Pawan Sir</span> (7 UPSC Mains,
            Author, Ex-Faculty Sunya IAS), our mission is to make top-quality
            mentorship accessible to all.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-start">
            {["Telegram", "YouTube", "Instagram"].map((label) => (
              <button
                key={label}
                type="button"
                className="rounded-full border border-gray-700 px-4 py-1.5 text-sm font-medium transition duration-300 hover:border-orange-500 hover:text-orange-500 sm:px-5 sm:py-2 sm:text-base md:text-lg"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side Card */}
        <div className="relative flex w-full max-w-md items-center justify-center sm:max-w-lg lg:max-w-none lg:flex-1 lg:justify-end">
          <div className="absolute h-48 w-48 rounded-full bg-orange-500/20 blur-3xl sm:h-60 sm:w-60 md:h-72 md:w-72"></div>

          <div className="relative w-full max-w-sm rounded-3xl border border-gray-800 bg-[#111827]/90 px-6 py-8 shadow-2xl backdrop-blur-md sm:max-w-md sm:rounded-4xl sm:px-10 sm:py-10 md:px-12 md:py-12 lg:mr-0 lg:max-w-lg">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
              <h1 className="text-5xl font-extrabold text-orange-500 sm:text-6xl md:text-7xl lg:text-8xl">
                TQ
              </h1>

              <div className="text-center sm:text-left">
                <h2 className="text-3xl font-extrabold leading-none sm:text-4xl md:text-5xl">
                  TERRA
                </h2>
                <h2 className="text-3xl font-extrabold leading-none sm:text-4xl md:text-5xl">
                  QUEST
                </h2>
                <p className="mt-2 text-base font-medium text-orange-400 sm:mt-3 sm:text-lg md:text-xl">
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
