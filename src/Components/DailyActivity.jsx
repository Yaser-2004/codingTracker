'use client';

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const pieData = [
  { name: 'LeetCode', value: 45 },
  { name: 'Codeforces', value: 35 },
  { name: 'HackerRank', value: 20 },
];
const COLORS = ['#3b82f6', '#10b981', '#f59e0b'];

export default function DailyActivity() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Daily Activity</h2>
      <div className="bg-gray-800 p-6 rounded-xl">
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={30}
                outerRadius={60}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="text-sm mt-2 space-y-1">
          {pieData.map((d) => (
            <p key={d.name}>{d.name}: {d.value}%</p>
          ))}
        </div>
      </div>
    </section>
  );
}
