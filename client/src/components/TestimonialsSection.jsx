import React from "react";

const testimonials = [
  {
    title: "Clarity and confidence",
    review:
      "With Annalee's coaching, I found clarity and confidence I never knew I had. Her insight led me to success beyond my wildest dreams.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    name: "Kai Willmott",
    role: "Agency founder",
  },
  {
    title: "My life has transformed",
    review:
      "Working with Annalee unlocked possibilities I never imagined. My life has transformed, both personally and professionally.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop",
    name: "Cate Moony",
    role: "Project manager",
  },
  {
    title: "Turning point",
    review:
      "Annalee's guidance was a turning point in my career. I've achieved goals that seemed unreachable before our sessions.",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=300&auto=format&fit=crop",
    name: "Nate Willmott",
    role: "Designer",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="border-t border-white/5 bg-[#0b1120] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/5 bg-[#131c31]/80 p-6 backdrop-blur-md transition duration-300 hover:border-orange-500/20 hover:shadow-xl hover:shadow-orange-500/5 sm:rounded-3xl sm:p-8 md:p-10"
            >
              <h3 className="mb-4 text-xl font-semibold text-orange-500 sm:mb-6 sm:text-2xl">
                {item.title}
              </h3>

              <p className="mb-6 text-base italic leading-7 sm:mb-8 sm:text-lg sm:leading-8">
                {item.review}
              </p>

              <div className="flex items-center gap-4 sm:gap-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-12 w-12 shrink-0 rounded-full object-cover sm:h-14 sm:w-14 md:h-16 md:w-16"
                />

                <div className="min-w-0">
                  <h4 className="truncate text-lg font-semibold sm:text-xl md:text-2xl">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-500 sm:text-base md:text-lg">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
