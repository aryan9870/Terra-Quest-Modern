const features = [
  {
    title: "High Quality Mentorship",
    line1: "1-on-1 personalised mentoring",
    line2: "Goal setting, Progress tracking, Motivation",
  },
  {
    title: "Integrated Preparation",
    line1: "Prelims, Mains, Interview – all in sync",
    line2: "Interlinking GS, Essay, Ethics",
  },
  {
    title: "Smart and simplified Content",
    line1: "PYQ-driven material, exam-relevant micro topics",
    line2: "One-pagers, mindmaps, infographics",
  },
  {
    title: "Affordable Preparation",
    line1: "Pocket-friendly courses without compromise on quality",
    line2: "",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="mb-12 bg-[#020817] sm:mb-16 lg:mb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <h2 className="mb-10 text-center text-2xl font-semibold sm:mb-14 sm:text-3xl md:mb-16 md:text-4xl lg:mb-20 lg:text-5xl">
          Why TerraQuest?
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:gap-10 lg:gap-12 xl:gap-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#111827]/80 p-6 backdrop-blur-md transition duration-300 hover:border-orange-500/20 hover:shadow-2xl hover:shadow-orange-500/5 sm:p-8 md:p-10 lg:p-12"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-orange-500"></div>

              <h3 className="mb-4 text-xl font-semibold leading-tight sm:mb-6 sm:text-2xl md:mb-8">
                {feature.title}
              </h3>

              <p className="mb-3 text-base font-semibold text-gray-400 sm:mb-5 sm:text-lg">
                {feature.line1}
              </p>

              {feature.line2 && (
                <p className="text-base leading-7 text-gray-400 sm:text-lg sm:leading-8 md:leading-10">
                  {feature.line2}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
