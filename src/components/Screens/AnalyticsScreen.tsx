import React from 'react';
import { Flame, Clock, Award, TrendingUp, CheckCircle, Brain, Calendar, BarChart2 } from 'lucide-react';
import { currentUser } from '../../data/learningData';

export const AnalyticsScreen: React.FC = () => {
  const weeklyActivity = [
    { day: 'Mon', minutes: 45, completed: true },
    { day: 'Tue', minutes: 60, completed: true },
    { day: 'Wed', minutes: 30, completed: true },
    { day: 'Thu', minutes: 50, completed: true },
    { day: 'Fri', minutes: 40, completed: true },
    { day: 'Sat', minutes: 65, completed: true },
    { day: 'Sun', minutes: 25, completed: true },
  ];

  return (
    <div className="max-w-md mx-auto px-4 pt-2 pb-24 space-y-4">
      {/* Header */}
      <div>
        <h2 className="text-xl font-extrabold text-slate-900">Analytics & Progress</h2>
        <p className="text-xs text-slate-500 mt-0.5">Real-time competence tracking and study insights.</p>
      </div>

      {/* Top 3 Metric Cards */}
      <div className="grid grid-cols-3 gap-2.5">
        <div className="bg-white rounded-2xl p-3 border border-slate-100 shadow-xs text-center">
          <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center mx-auto mb-1.5">
            <Flame className="w-4 h-4 fill-cyan-500" />
          </div>
          <span className="text-base font-extrabold text-slate-900">{currentUser.streakDays} Days</span>
          <p className="text-[10px] text-slate-400 font-medium">Current Streak</p>
        </div>

        <div className="bg-white rounded-2xl p-3 border border-slate-100 shadow-xs text-center">
          <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto mb-1.5">
            <Clock className="w-4 h-4" />
          </div>
          <span className="text-base font-extrabold text-slate-900">5.2 hrs</span>
          <p className="text-[10px] text-slate-400 font-medium">Study Time</p>
        </div>

        <div className="bg-white rounded-2xl p-3 border border-slate-100 shadow-xs text-center">
          <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-1.5">
            <Award className="w-4 h-4" />
          </div>
          <span className="text-base font-extrabold text-slate-900">85%</span>
          <p className="text-[10px] text-slate-400 font-medium">Accuracy</p>
        </div>
      </div>

      {/* Weekly Activity Bar Chart */}
      <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Weekly Learning Velocity</h3>
          <span className="text-xs text-indigo-600 font-semibold">315 mins total</span>
        </div>

        {/* Bar Visualizer */}
        <div className="flex items-end justify-between gap-2 pt-4 h-32">
          {weeklyActivity.map((item) => (
            <div key={item.day} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
              <span className="text-[10px] text-slate-400 font-mono">{item.minutes}m</span>
              <div className="w-full bg-slate-100 rounded-t-lg h-24 relative flex items-end">
                <div
                  className="w-full bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-lg transition-all"
                  style={{ height: `${(item.minutes / 70) * 100}%` }}
                />
              </div>
              <span className="text-[11px] font-bold text-slate-600">{item.day}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Knowledge Retention Breakdown */}
      <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-3">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Knowledge Retention</h3>

        <div className="space-y-2.5">
          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
              <span>Algebraic Reasoning</span>
              <span className="text-indigo-600 font-bold">88%</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-600 rounded-full" style={{ width: '88%' }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
              <span>Kinematics & Vector Math</span>
              <span className="text-cyan-600 font-bold">64%</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-500 rounded-full" style={{ width: '64%' }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
              <span>Textual Synthesis</span>
              <span className="text-purple-600 font-bold">82%</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 rounded-full" style={{ width: '82%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
