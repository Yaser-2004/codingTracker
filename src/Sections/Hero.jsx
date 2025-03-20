import Image from 'next/image';

export default function Hero() {
  return (
    <section className="py-20 min-h-[70vh] flex items-center relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-6xl text-[#EBEFFF] mb-10">
            Level Up Your Coding - Track, Analyze, and Conquer!
          </h1>

          <p className="text-lg text-[#EBEFFF] max-w-5xl mb-8">
            Effortlessly track your coding progress across multiple platforms in one place. Analyze your strengths, uncover weak areas, and get personalized problem recommendations. Stay ahead in competitive programming with real-time insights—all from a single dashboard!
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-indigo-100 hover:scale-105 transition-all duration-300 shadow-md">
              Get Started
            </button>
            <button className="bg-transparent text-white font-medium px-8 py-3 rounded-full border-2 border-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300">
              Explore Challenges
            </button>
          </div>

          <div className="mt-20">
            <div className="flex items-center justify-center space-x-14">
              <div className="text-center">
                <div className="text-[#EBEFFF] text-3xl font-bold mb-2">10,000+</div>
                <div className="text-[#EBEFFF] text-sm">Coding Challenges</div>
              </div>
              <div className="text-center">
                <div className="text-[#EBEFFF] text-3xl font-bold mb-2">500+</div>
                <div className="text-[#EBEFFF] text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-[#EBEFFF] text-3xl font-bold mb-2">1M+</div>
                <div className="text-[#EBEFFF] text-sm">Developers</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='absolute bottom-0 right-20'>
        <p className='text-[#EBEFFF] text-xl'>MANAGE SEAMLESSLY.</p>
      </div>
    </section>
  );
}
