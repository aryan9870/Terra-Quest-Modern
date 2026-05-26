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
    <section className="bg-[#020817] mb-20">
      <div className="mx-auto max-w-7xl px-10">
        {/* Heading */}
        <h2 className="mb-16 text-center text-5xl font-semibold">
          UPPCS Prelims 2025 Courses
        </h2>

        {/* Cards */}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl h-80 w-96 border border-gray-800 bg-[#111827] shadow-xl transition duration-300 hover:-translate-y-1"
            >
              {/* Top Gradient Area */}
              <div
                className={`flex flex-col h-[70%] items-center justify-center bg-gradient-to-br ${course.gradient} px-6 text-center`}
              >
                <h3 className="mb-4 text-2xl font-semibold">{course.title}</h3>

                <p className="text-lg text-gray-100">{course.subtitle}</p>
              </div>

              {/* Bottom Button */}
              <div className="bg-[#141c34] p-7 h-[30%]">
                <button className="w-full cursor-pointer rounded-lg border border-orange-500 px-5 py-3 text-lg font-semibold uppercase tracking-wide text-orange-500 transition duration-300 hover:bg-orange-500/10">
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
