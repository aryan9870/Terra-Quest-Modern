import React from "react";
import CourseCard from "./CourseCard";

function CoursesGrid_2() {
  const courses = [
    {
      id: 1,
      title: "UPSC Foundation Batch 2026",
      category: "UPSC",
      price: "₹19,999",
    },
    {
      id: 2,
      title: "UPPCS Complete Course",
      category: "UPPCS",
      price: "₹14,999",
    },
    {
      id: 3,
      title: "BPSC Master Batch",
      category: "BPSC",
      price: "₹12,999",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 my-10">
      {/* Heading */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-5xl font-bold text-white">
          Featured Courses
        </h2>

        <button className="text-orange-500 font-semibold text-xl">
          View All →
        </button>
      </div>

      {/* Grid */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}

export default CoursesGrid_2;