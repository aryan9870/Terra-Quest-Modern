import React from "react";
import HeroSection from "../components/HeroSection";
import CoursesGrid from "../components/CoursesGrid";
import WhyChooseSection from "../components/WhyChooseSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CallToActionSection from "../components/CallToActionSection";

const Home = () => {
  return (
    <div className="overflow-x-hidden bg-[#020817] pt-16 text-gray-300 sm:pt-20 lg:pt-24">
      <HeroSection />
      <CoursesGrid />
      <WhyChooseSection />
      <TestimonialsSection />
      <CallToActionSection />
    </div>
  );
};

export default Home;
