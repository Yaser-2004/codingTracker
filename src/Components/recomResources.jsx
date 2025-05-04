'use client';

import { FaYoutube, FaCode, FaBook } from 'react-icons/fa';

export default function RecommendedResources() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Recommended Resources</h2>
      <div className="bg-gray-800 p-6 rounded-xl">
        <ul className="text-sm space-y-2">
          <li className="flex items-center gap-2">
            <FaYoutube className="text-red-500" /> YouTube Playlist
          </li>
          <li className="flex items-center gap-2">
            <FaCode className="text-purple-500" /> Codeforces Editorial
          </li>
          <li className="flex items-center gap-2">
            <FaBook className="text-blue-400" /> Roadmap Article
          </li>
        </ul>
      </div>
    </section>
  );
}
