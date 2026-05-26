import React from 'react'

const CallToActionSection = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#0b1120] py-20 text-white">
      
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_left,rgba(249,115,22,0.12),transparent_35%)]"></div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center text-center">
        
        {/* Heading */}
        <h2 className="mb-8 text-5xl font-semibold leading-tight">
          Ready to transform your life?
        </h2>

        {/* Subtitle */}
        <p className="mb-14 max-w-7xl text-2xl leading-10 text-gray-400">
          Schedule your free consultation and find out how mindset
          coaching can help you.
        </p>

        {/* Button */}
        <button className="rounded-xl bg-orange-500 px-6 py-3 text-lg font-bold uppercase text-white shadow-lg shadow-orange-500/20 transition duration-300 hover:scale-105 hover:bg-orange-600 cursor-pointer">
          Schedule a Session
        </button>
      </div>
    </section>
  );
};

export default CallToActionSection;