import React from 'react'

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
    <section className="border-t border-white/5 bg-[#0b1120] py-20">
      
      <div className="mx-auto max-w-7xl">
        
        {/* Cards */}
        <div className="grid gap-10 lg:grid-cols-3">
          
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/5 bg-[#131c31]/80 p-10 backdrop-blur-md transition duration-300 hover:border-orange-500/20 hover:shadow-xl hover:shadow-orange-500/5"
            >
              
              {/* Title */}
              <h3 className="mb-6 text-2xl font-semibold text-orange-500">
                {item.title}
              </h3>

              {/* Review */}
              <p className="mb-8 text-lg italic leading-8">
                {item.review}
              </p>

              {/* User */}
              <div className="flex items-center gap-5">
                
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 rounded-full object-cover"
                />

                <div>
                  <h4 className="text-2xl font-semibold">
                    {item.name}
                  </h4>

                  <p className="text-lg text-gray-500">
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