'use client';

import Overview from '../components/overview';
import Notes from '@/Components/notes';
import PlatformStats from '@/Components/platformstats';
import AiTips from '@/Components/AiTips';
import RecentSubmissions from '@/Components/recSub';

export default function OverviewPage() { 
    return ( <div className="min-h-screen bg-[#0f0f0f] text-white px-6 py-6"> 
    <div className="flex justify-between items-center mb-6">
         <h1 className="text-xl font-semibold">Overview</h1> 
         <div className="flex items-center space-x-3"> 
            <button className="bg-gray-800 text-white px-3 py-1 rounded-full">U</button> <span>User</span> </div> </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
        <button className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-indigo-100 hover:scale-105 transition-all duration-300 shadow-md">
              <b>Overview</b>
            </button>
            <button className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-indigo-100 hover:scale-105 transition-all duration-300 shadow-md">
              <b>Progress</b>
            </button>
          <button className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-indigo-100 hover:scale-105 transition-all duration-300 shadow-md">
              <b>Platform stats</b>
            </button>
            <button className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-indigo-100 hover:scale-105 transition-all duration-300 shadow-md">
              <b>Notes</b>
            </button>
        </div>
        <br />
  <div className="text-3xl font-bold mb-2">Welcome back, Yaser!</div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <Overview/>
  <Notes/>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PlatformStats/>
        <AiTips />
        <Notes/>
  </div><br />
  <div className="flex justify-between items-center mb-6">
  <div className="text-3xl font-bold mb-2">Upcoming Events</div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <section>
    <div className="bg-gray-800 p-6 rounded-xl hover:bg-blue-100 hover:text-black hover:scale-105 transition-all duration-300">
            <h1><b>Contest 1138</b></h1><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae sit natus vero, corrupti, modi non possimus debitis recusandae id autem, deleniti tenetur enim labore! Facilis, iure! Dolor, cupiditate. Blanditiis.</p>
        </div>
        </section>
        <section>
    <div className="bg-gray-800 p-6 rounded-xl hover:bg-blue-100 hover:text-black hover:scale-105 transition-all duration-300">
            <h1><b>Contest 1138</b></h1><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae sit natus vero, corrupti, modi non possimus debitis recusandae id autem, deleniti tenetur enim labore! Facilis, iure! Dolor, cupiditate. Blanditiis.</p>
        </div>
        </section>
        <section>
    <div className="bg-gray-800 p-6 rounded-xl hover:bg-blue-100 hover:text-black hover:scale-105 transition-all duration-300">
            <h1><b>Contest 1138</b></h1><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae sit natus vero, corrupti, modi non possimus debitis recusandae id autem, deleniti tenetur enim labore! Facilis, iure! Dolor, cupiditate. Blanditiis.</p>
        </div>
        </section>
  </div>
  </div>
<RecentSubmissions/>
</div>

); }
