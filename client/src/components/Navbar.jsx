import { useState } from "react";

const Navbar = () => {

  return (
    <nav className="w-full border-b border-gray-800 bg-[#020817]/50 backdrop-blur-sm text-gray-300 fixed z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-5 px-10">
        
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <h1 className="text-4xl font-semibold text-orange-500">TQ</h1>

          <span className="text-3xl font-semibold tracking-tight">
            TerraQuest
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-10 lg:flex font-semibold">
          <a href="" className="hover:text-orange-500 transition duration-300">
            UPSC
          </a>
          <a href="" className="hover:text-orange-500 transition duration-300">
            UPPCS
          </a>
          <a href="" className="hover:text-orange-500 transition duration-300">
            CURRENT AFFAIRS
          </a>
          <a href="" className="hover:text-orange-500 transition duration-300">
            MMG DAILY ANSWER WRITING
          </a>
        </div>

        {/* CTA Button */}
        <button className="hidden rounded-lg bg-orange-500 px-6 py-3 font-bold uppercase text-lg text-white shadow-lg transition duration-300 hover:bg-orange-600 lg:block">
          Explore Our Courses
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
        >
          button
        </button>
      </div>

      
    </nav>
  );
};

export default Navbar;