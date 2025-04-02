import Hero from "@/Sections/Hero";
import PracticeProblems from "@/components/Problems";
import WhyChooseUs from "@/components/chooseUs";
import Test from "@/components/testimonilas";
// colors
// text-[#EBEFFF]
// bg-[#22282C]

export default function Home() {
  return (
    <>
      <Hero />
      <PracticeProblems/>
      <WhyChooseUs/>
       <Test/>
    </>
  );
}
