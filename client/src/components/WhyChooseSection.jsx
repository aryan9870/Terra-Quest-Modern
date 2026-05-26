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
    <section className="bg-[#020817] mb-20">
      
      <div className="mx-auto max-w-6xl">
        
        {/* Heading */}
        <h2 className="mb-20 text-center text-5xl font-semibold">
          Why TerraQuest?
        </h2>

        {/* Cards */}
        <div className="grid gap-20 md:grid-cols-2">
          
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#111827]/80 p-12 backdrop-blur-md transition duration-300 hover:border-orange-500/20 hover:shadow-2xl hover:shadow-orange-500/5"
            >
              
              {/* Left Accent Line */}
              <div className="absolute left-0 top-0 h-full w-1 bg-orange-500"></div>

              {/* Content */}
              <h3 className="mb-8 text-2xl font-semibold leading-tight">
                {feature.title}
              </h3>

              <p className="mb-5 text-lg font-semibold text-gray-400">
                {feature.line1}
              </p>

              <p className="text-lg leading-10 text-gray-400">
                {feature.line2}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;