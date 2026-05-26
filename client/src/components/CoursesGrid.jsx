import React from "react";

const CoursesGrid = () => {
  const courses = [
    {
      title: "MISSION AYUT",
      subtitle: "10,000 MCQ CHALLENGE",
      gradient: "from-purple-700 to-purple-900",
    },
    {
      title: "CONQUER PYQs",
      subtitle: "One stop solution for All PYQs",
      gradient: "from-orange-600 to-orange-900",
    },
    {
      title: "Aarambha 2.0",
      subtitle: "UPSC/ UPPCS PRELIMS 2025",
      gradient: "from-red-600 to-red-900",
    },
  ];

  return (
    <section className="mb-12 bg-[#020817] sm:mb-16 lg:mb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <h2 className="mb-8 text-center text-2xl font-semibold sm:mb-12 sm:text-3xl md:mb-16 md:text-4xl lg:text-5xl">
          UPPCS Prelims 2025 Courses
        </h2>

        <div className="grid grid-cols-1 justify-items-center gap-6 sm:gap-8 md:grid-cols-2 md:justify-items-stretch xl:grid-cols-3 xl:gap-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className="flex h-72 w-full max-w-sm flex-col overflow-hidden rounded-3xl border border-gray-800 bg-[#111827] shadow-xl transition duration-300 hover:-translate-y-1 sm:max-w-none sm:h-80"
            >
              <div
                className={`flex h-[70%] flex-col items-center justify-center bg-gradient-to-br px-4 text-center sm:px-6 ${course.gradient}`}
              >
                <h3 className="mb-2 text-xl font-semibold sm:mb-4 sm:text-2xl">
                  {course.title}
                </h3>
                <p className="text-base text-gray-100 sm:text-lg">
                  {course.subtitle}
                </p>
              </div>

              <div className="flex h-[30%] items-center bg-[#141c34] p-4 sm:p-6 md:p-7">
                <button
                  type="button"
                  className="w-full cursor-pointer rounded-lg border border-orange-500 px-4 py-2.5 text-sm font-semibold uppercase tracking-wide text-orange-500 transition duration-300 hover:bg-orange-500/10 sm:px-5 sm:py-3 sm:text-base md:text-lg"
                >
                  Start Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesGrid;
