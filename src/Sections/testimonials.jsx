import { TestimonialCard } from "@/Components/TestimonialCard";
import React from "react";

const testimonials = [
  {
    name: "Alex Smith",
    rating: 5,
    feedback:
      "This platform has completely transformed my coding practice! 🚀 The progress tracking and AI-powered suggestions have helped me focus on my weak areas. Now, I solve problems much faster and more efficiently. Highly recommended for anyone serious about competitive programming!",
  },
  {
    name: "Alex Smith",
    rating: 5,
    feedback:
      "This platform has completely transformed my coding practice! 🚀 The progress tracking and AI-powered suggestions have helped me focus on my weak areas. Now, I solve problems much faster and more efficiently. Highly recommended for anyone serious about competitive programming!",
  },
  {
    name: "Alex Smith",
    rating: 5,
    feedback:
      "This platform has completely transformed my coding practice! 🚀 The progress tracking and AI-powered suggestions have helped me focus on my weak areas. Now, I solve problems much faster and more efficiently. Highly recommended for anyone serious about competitive programming!",
  },
];

const Testimonials = () => {
  return (
    <section className="text-center pb-10 bg-#22282C text-white mb-10">
        <div className="bg-#22282C text-white flex flex-col items-center">
      <h2 className="text-4xl font-bold text-center md:text-5xl lg:text-6xl font-bold max-w-6xl text-[#EBEFFF] mb-10">What Our Users Say :)</h2>
      </div>
      <div className="flex justify-center gap-6 overflow-x-auto px-4">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};
  
export default function Test() {
  return (
    <div>
      <Testimonials />
    </div>
  );
}

