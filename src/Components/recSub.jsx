import React from "react";

const submissions = Array(9).fill({
  title: "Find kth Smallest number",
  platform: "Leetcode",
  date: "9 Mar, 2025",
});

export default function RecentSubmissions() {
  return (
    <div className="bg-black text-white p-6 rounded-xl shadow-lg w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Recent Submissions</h2>
      <div className="space-y-3">
        {submissions.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-[#1F1F1F] px-4 py-3 rounded-lg"
          >
            <div className="text-sm sm:text-base">{item.title}</div>
            <div className="flex items-center space-x-4">
              <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                {item.platform}
              </span>
              <span className="text-gray-400 text-sm">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
