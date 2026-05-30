import React from "react";

const stats = [
  { number: "10K+", label: "Active Students" },
  { number: "50+", label: "Premium Courses" },
  { number: "95%", label: "Success Rate" },
  { number: "24/7", label: "Learning Access" },
];

function CoursesHeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glow — same as Home hero */}
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.15),transparent_35%)]"></div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-4 pb-12 pt-6 sm:gap-12 sm:px-6 sm:pb-16 sm:pt-8 md:gap-14 lg:flex-row lg:gap-16 lg:px-10 lg:pb-20">
        {/* Left Content */}
        <div className="w-full max-w-2xl text-center lg:text-left">
          <h1 className="mb-4 text-3xl font-extrabold leading-tight sm:mb-5 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Explore Premium
          </h1>

          <h2 className="mb-6 text-lg font-bold text-orange-500 sm:mb-8 sm:text-2xl md:text-3xl lg:text-4xl">
            UPSC Courses
          </h2>

          <p className="mb-8 text-base leading-7 text-gray-300 sm:mb-10 sm:text-lg sm:leading-8 md:leading-9">
            Structured preparation for UPSC, UPPCS &amp; BPSC with live classes,
            mentorship, PYQ programs, test series and integrated batches.
          </p>

          {/* Search Bar */}
          <div className="flex w-full max-w-2xl flex-col overflow-hidden rounded-full border border-gray-700 bg-[#111827]/90 sm:flex-row sm:items-center lg:mx-0 lg:mr-auto">
            <input
              type="text"
              placeholder="Search courses, test series, batches..."
              className="w-full flex-1 bg-transparent px-4 py-3 text-sm text-gray-300 outline-none placeholder:text-gray-500 sm:px-5 sm:py-3.5 sm:text-base md:px-6 md:py-4 md:text-lg"
            />

            <button
              type="button"
              className="m-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-orange-600 sm:px-6 sm:py-3 sm:text-base md:px-8 md:text-lg"
            >
              Search
            </button>
          </div>
        </div>

        {/* Right Stats */}
        <div className="relative flex w-full max-w-md items-center justify-center sm:max-w-lg lg:max-w-none lg:flex-1 lg:justify-end">
          <div className="absolute h-48 w-48 rounded-full bg-orange-500/20 blur-3xl sm:h-60 sm:w-60 md:h-72 md:w-72"></div>

          <div className="relative grid w-full max-w-sm grid-cols-2 gap-4 sm:max-w-md sm:gap-5 lg:max-w-lg lg:gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-800 bg-[#111827]/90 p-5 backdrop-blur-md sm:rounded-3xl sm:p-6 md:p-8"
              >
                <h3 className="text-2xl font-extrabold text-orange-500 sm:text-3xl md:text-4xl">
                  {item.number}
                </h3>

                <p className="mt-2 text-sm text-gray-400 sm:mt-4 sm:text-base md:text-lg">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoursesHeroSection;
