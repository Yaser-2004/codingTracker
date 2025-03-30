import Head from 'next/head';
import ProblemCard from 'app/problemCard'; // Corrected import

export default function Pages() {
  const problems = [
    { title: 'Java ☕', description: 'Solve Java Practice Problems and master various data structures.', problemsCount: 576 },
    { title: 'C++', description: 'Solve C++ Practice Problems and master data structures.', problemsCount: 576 },
    { title: 'Python 🐍', description: 'Solve Python Practice Problems and master this language.', problemsCount: 576 },
    { title: 'JavaScript 🚀', description: 'Solve JavaScript Practice Problems and master it.', problemsCount: 576 },
    { title: 'HTML/CSS 📄', description: 'Solve HTML/CSS Practice Problems and build your website.', problemsCount: 576 },
    { title: 'SQL Queries 🗄', description: 'Solve SQL Queries and learn data storage and processing.', problemsCount: 576 },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <Head>
        <title>Practice Problems</title>
      </Head>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold">Sharpen your skills with practice problems and level up!</h1>
        <p className="mt-4 text-gray-400">
          Practice major problems and challenges in coding languages and solve hard problems to prove your coding skills.
        </p>
      </div>
      <div className="flex justify-center space-x-4 mb-6">
        <button className="px-4 py-2 bg-purple-600 rounded">Recently faced Problems</button>
        <button className="px-4 py-2 bg-purple-600 rounded">Starred Problems</button>
      </div>
      <div className="flex flex-wrap justify-center space-x-4">
        {problems.map((problem, index) => (
          <ProblemCard
            key={index}
            title={problem.title}
            description={problem.description}
            problemsCount={problem.problemsCount}
          />
        ))}
      </div>
    </div>
  );
}
