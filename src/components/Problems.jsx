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

const ProblemCard = ({ problem }) => (
  <div className="bg-black p-4 rounded-lg shadow-lg">
    <div className="flex items-center gap-2 text-xl font-semibold">
      {problem.icon} {problem.name}
    </div>
    <p className="mt-2 text-gray-300">{problem.description}</p>
    <div className="mt-4 flex justify-between text-sm text-gray-400">
      <button className="bg-white text-black px-5 py-2 rounded hover:bg-indigo-100 hover:scale-105 transition-all duration-300 shadow-md">{problem.problems} Problems</button>
      <button className="bg-white text-black px-3 py-1 rounded hover:bg-indigo-100 hover:scale-105 transition-all duration-300 shadow-md">Beginner level</button>
    </div>
  </div>
);

export default function PracticeProblems() {
  return (
    <div className="min-h-screen bg-#22282C text-white p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center md:text-5xl lg:text-6xl font-bold max-w-6xl text-[#EBEFFF] mb-10">Sharpen your skills with practice problems and level up!</h1>
      <p className="mt-4 text-lg text-center max-w-2xl">
        Practice major problems in coding languages like Python, Java, JavaScript, C++, SQL, and HTML.
        Start with beginner-friendly challenges and move on to harder problems.
      </p>
      
      <div className="mt-10 w-full flex justify-between items-center">
        <button className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-indigo-100 hover:scale-105 transition-all duration-300 shadow-md">Practice Problems</button>
        <div className="flex gap-4">
          <button className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-indigo-100 hover:scale-105 transition-all duration-300 shadow-md">Recently faced Problems</button>
          <button className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-indigo-100 hover:scale-105 transition-all duration-300 shadow-md">Starred Problems</button>
        </div>
      </div>
      
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {problems.map((problem, index) => (
          <ProblemCard key={index} problem={problem} />
        ))}
      </div>
      
      <button className="bg-transparent text-white font-medium px-4 py-2 rounded border-2 border-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300">+ More Languages</button>
    </div>
  );
}


