import React from "react";
import CoursesHeroSection from "../components/CoursesHeroSection";
import CoursesGrid_2 from "../components/CoursesGrid_2";
import FilteredCourses from "../components/FilteredCources";

const Cources = () => {
  return (
    <div className="overflow-x-hidden bg-[#020817] pt-16 text-gray-300 sm:pt-20 lg:pt-24">
      <CoursesHeroSection />
      <FilteredCourses />
      <CoursesGrid_2 />
      <CoursesGrid_2 />
    </div>
  );
};

export default Cources;
