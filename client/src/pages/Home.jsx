import React from "react";
import HeroSection from "../components/HeroSection";
import CoursesGrid from "../components/CoursesGrid";
import WhyChooseSection from "../components/WhyChooseSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CallToActionSection from "../components/CallToActionSection";

const Home = () => {
  return (
    <div className="pt-22 bg-[#020817] text-gray-300">
      <HeroSection />
      <CoursesGrid />
      <WhyChooseSection />
      <TestimonialsSection />
      <CallToActionSection />
    </div>
  );
};

export default Home;
