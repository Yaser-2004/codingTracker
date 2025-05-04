import Hero from "@/Sections/Hero";
import PracticeProblems from "@/Sections/Problems";
import WhyChooseUs from "@/Sections/chooseUs";
import Test from "@/Sections/testimonials";
import DashboardPage from "./dash";
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
       <DashboardPage/>
    </>
  );
}
