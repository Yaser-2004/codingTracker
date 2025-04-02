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

const TestimonialCard = ({ name, rating, feedback }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
      <div className="h-16 w-16 bg-gray-200 rounded-full mb-4"></div>
      <h3 className="font-bold text-lg">{name}</h3>
      <div className="text-yellow-500">{"⭐".repeat(rating)}</div>
      <p className="text-gray-600 mt-2">{feedback}</p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="text-center py-12 bg-#22282C text-white">
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

const Footer = () => {
    return (
      <footer className="bg-black text-white py-8 mt-12"style={{height:"250px"}}>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 px-6">
          <div>
            <h3 className="font-bold text-lg">CODINGSS</h3>
            <p className="text-gray-400 text-sm">Collaboration platform for modern teams.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">COMPANY</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Product</li>
              <li>Blog</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">FEATURES</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Screen Sharing</li>
              <li>iOS & Android Apps</li>
              <li>File Sharing</li>
              <li>User Management</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">CONTACT US</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>gmail.com</li>
              <li>phone number</li>
              <li>xyz place name</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">Stay Up to Date</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Subscribe to get more updates</li>
            </ul>
            <input type="email" placeholder="Email" className="p-2 mt-2 rounded bg-gray-700 text-white w-full" />
          </div>
        </div>
      </footer>
    );
  };
  
export default function Test() {
  return (
    <div>
      <Testimonials />
      <Footer />
    </div>
  );
}

