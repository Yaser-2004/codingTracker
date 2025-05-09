import { ProblemCard } from "@/Components/ProblemCard";
import React from "react";
import { FaJava, FaPython, FaJs, FaDatabase } from "react-icons/fa";
import { SiCplusplus, SiHtml5 } from "react-icons/si";

const problems = [
  { name: "Java", icon: <FaJava />, description: "Solve Java Practice Problems and master various data structures.", problems: 576 },
  { name: "C++", icon: <SiCplusplus />, description: "Solve C++ Practice Problems and master data structures on your desired platform.", problems: 576 },
  { name: "Python", icon: <FaPython />, description: "Solve Python Practice Problems and master this language on your desired platform.", problems: 576 },
  { name: "JavaScript", icon: <FaJs />, description: "Solve JavaScript Practice Problems and master this language.", problems: 576 },
  { name: "HTML/CSS", icon: <SiHtml5 />, description: "Solve HTML/CSS Practice Problems and master website layout.", problems: 576 },
  { name: "SQL Queries", icon: <FaDatabase />, description: "Solve SQL Queries and learn database storage & processing.", problems: 576 }
];

export default function PracticeProblems() {
  return (
    <div className="min-h-screen max-w-[1450px] mx-auto bg-#22282C text-white p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center md:text-5xl lg:text-6xl font-bold max-w-6xl text-[#EBEFFF] mb-10">Sharpen your skills with practice problems and level up!</h1>
      <p className="mt-4 text-lg text-center max-w-2xl">
        Practice major problems in coding languages like Python, Java, JavaScript, C++, SQL, and HTML.
        Start with beginner-friendly challenges and move on to harder problems.
      </p>
      
      <div className="mt-10 w-full flex justify-between items-center">
        <button className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-indigo-100 hover:scale-105 transition-all duration-300 shadow-md hidden">Practice Problems</button>
        <div className="flex gap-4">
          <button className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-indigo-100 hover:scale-105 transition-all duration-300 shadow-md hidden">Recently faced Problems</button>
          <button className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-indigo-100 hover:scale-105 transition-all duration-300 shadow-md hidden">Starred Problems</button>
        </div>
      </div>
      
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {problems.map((problem, index) => (
          <ProblemCard key={index} problem={problem} />
        ))}
      </div><br />
      <button className="bg-white text-black font-medium px-8 py-3 rounded hover:bg-indigo-100 hover:scale-105 transition-all duration-300 shadow-md">+ More Languages</button>
    </div>
  );
}
