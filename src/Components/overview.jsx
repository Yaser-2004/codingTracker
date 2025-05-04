'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const lineData = [
  { date: 'Mar 7', solved: 5 },
  { date: 'Mar 14', solved: 8 },
  { date: 'May', solved: 12 },
  { date: 'Jan 28', solved: 10 },
  { date: 'Apr 4', solved: 14 },
];

export default function Overview() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Overview</h2>
      <div className="bg-gray-800 p-6 rounded-xl">
        <p className="text-xl mb-4">
          You've solved <strong>725</strong> problems so far!
        </p>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="date" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip />
              <Line type="monotone" dataKey="solved" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
