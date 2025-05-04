'use client';

import Overview from '../components/overview';
import PlatformStats from '../components/platformstats';
import Notes from '../components/notes';
import AiTips from '../components/AiTips';
import DailyActivity from '../components/DailyActivity';
import RecommendedResources from '../components/recomResources';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-6 space-y-8">
      {/* Top Header Section */}
      <div className="space-y-2 mb-6">
        <h1 className="text-4xl font-bold">Coding Progress Tracker</h1>
        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
        <button className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-indigo-100 hover:scale-105 transition-all duration-300 shadow-md">
              <b>Daily Stats</b>
            </button>
            <button className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-indigo-100 hover:scale-105 transition-all duration-300 shadow-md">
              <b>Coding Activity</b>
            </button>
            <button className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-indigo-100 hover:scale-105 transition-all duration-300 shadow-md">
              <b>AI Tips</b>
            </button>
          <button className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-indigo-100 hover:scale-105 transition-all duration-300 shadow-md">
              <b>Notes</b>
            </button>
            <button className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-indigo-100 hover:scale-105 transition-all duration-300 shadow-md">
              <b>Resources</b>
            </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Overview />
      <div> 
        <DailyActivity />
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Notes />
        <AiTips />
        <PlatformStats />
        <RecommendedResources />  
      </div>
    </div>
  );
}
