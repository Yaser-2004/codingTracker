export const ProblemCard = ({ problem }) => (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <div className="flex text-black items-center gap-2 text-xl font-semibold">
        {problem.icon} {problem.name}
      </div>
      <p className="mt-2 text-black">{problem.description}</p>
      <div className="mt-4 flex justify-between text-sm text-gray-400">
        <button className="bg-white text-black font-medium px-8 py-3 rounded hover:bg-indigo-100 hover:scale-105 transition-all duration-300 shadow-md">{problem.problems} Problems</button>
        <button className="bg-white text-black font-medium px-8 py-3 rounded hover:bg-indigo-100 hover:scale-105 transition-all duration-300 shadow-md">Beginner level</button>
      </div>
    </div>
  );