const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#020817] text-white">
      
      <div className="mx-auto grid max-w-7xl gap-16 py-10 md:grid-cols-2">
        
        {/* Left Side */}
        <div>
          <h2 className="mb-8 text-4xl font-extrabold uppercase tracking-wide">
            TerraQuest Civils
          </h2>

          <p className="max-w-4xl text-xl leading-10 text-gray-400">
            I'm your personal mindset performance coach, ready to unlock
            your potential and guide you to success beyond your wildest
            dreams.
          </p>
        </div>

        {/* Right Side */}
        <div className="md:ml-auto">
          
          <h3 className="mb-8 text-2xl font-semibold">
            Links
          </h3>

          <div className="flex flex-col gap-6 text-gray-400">
            
            <a
              href="#"
              className="transition duration-300 hover:text-orange-400"
            >
              UPPCS
            </a>

            <a
              href="#"
              className="transition duration-300 hover:text-orange-400"
            >
              CURRENT AFFAIRS
            </a>

            <a
              href="#"
              className="transition duration-300 hover:text-orange-400"
            >
              MMG DAILY ANSWER WRITING
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/10 py-5 text-center text-sm text-gray-500">
        © 2026 TerraQuest Civils. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;