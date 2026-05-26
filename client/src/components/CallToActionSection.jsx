import React from "react";

const CallToActionSection = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#0b1120] py-12 text-white sm:py-16 lg:py-20">
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_left,rgba(249,115,22,0.12),transparent_35%)]"></div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-10">
        <h2 className="mb-4 text-2xl font-semibold leading-tight sm:mb-6 sm:text-3xl md:mb-8 md:text-4xl lg:text-5xl">
          Ready to transform your life?
        </h2>

        <p className="mb-8 max-w-2xl text-base leading-7 text-gray-400 sm:mb-10 sm:text-lg sm:leading-8 md:mb-12 md:max-w-3xl md:text-xl md:leading-9 lg:mb-14 lg:text-2xl">
          Schedule your free consultation and find out how mindset coaching can
          help you.
        </p>

        <button
          type="button"
          className="w-full max-w-xs cursor-pointer rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold uppercase text-white shadow-lg shadow-orange-500/20 transition duration-300 hover:scale-105 hover:bg-orange-600 sm:w-auto sm:max-w-none sm:px-6 sm:text-base md:text-lg"
        >
          Schedule a Session
        </button>
      </div>
    </section>
  );
};

export default CallToActionSection;
