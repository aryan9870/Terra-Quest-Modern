const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#020817] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-8 sm:gap-12 sm:px-6 sm:py-10 md:grid-cols-2 md:gap-16 lg:px-10">
        <div>
          <h2 className="mb-4 text-2xl font-extrabold uppercase tracking-wide sm:mb-6 sm:text-3xl md:mb-8 md:text-4xl">
            TerraQuest Civils
          </h2>

          <p className="max-w-xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8 md:max-w-2xl md:text-xl md:leading-10">
            I&apos;m your personal mindset performance coach, ready to unlock
            your potential and guide you to success beyond your wildest dreams.
          </p>
        </div>

        <div className="md:ml-auto md:text-right">
          <h3 className="mb-4 text-xl font-semibold sm:mb-6 sm:text-2xl md:mb-8">
            Links
          </h3>

          <div className="flex flex-col gap-4 text-gray-400 sm:gap-6">
            <a
              href="#"
              className="text-sm transition duration-300 hover:text-orange-400 sm:text-base"
            >
              UPPCS
            </a>
            <a
              href="#"
              className="text-sm transition duration-300 hover:text-orange-400 sm:text-base"
            >
              CURRENT AFFAIRS
            </a>
            <a
              href="#"
              className="text-sm transition duration-300 hover:text-orange-400 sm:text-base"
            >
              MMG DAILY ANSWER WRITING
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-gray-500 sm:py-5 sm:text-sm">
        © 2026 TerraQuest Civils. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
