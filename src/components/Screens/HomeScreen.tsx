import React, { useState } from 'react';
import { Sparkles, Flame, GitBranch, ArrowRight, Calculator, Rocket, BookOpen, FlaskConical, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { currentUser, recommendedSession, subjectsList, conceptOverview } from '../../data/learningData';
import { ScreenType } from '../../types';

interface HomeScreenProps {
  onStartSession: () => void;
  onSelectSubject: (subjectId: string) => void;
  onViewAllSubjects: () => void;
  onOpenAiPath: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onStartSession,
  onSelectSubject,
  onViewAllSubjects,
  onOpenAiPath,
}) => {
  const [selectedConcept, setSelectedConcept] = useState<string | null>(null);

  return (
    <div className="max-w-md mx-auto px-4 pt-3 pb-24 space-y-5">
      {/* 1. Good Morning Banner */}
      <div className="relative rounded-3xl overflow-hidden p-4 sm:p-5 bg-gradient-to-br from-[#dbeafe] via-[#eff6ff] to-[#e0e7ff] border border-blue-100/80 shadow-sm">
        {/* Soft background light blooms */}
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/70 rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10">
          <p className="text-xs font-semibold text-slate-500 tracking-wide uppercase">
            Good morning, {currentUser.name}
          </p>
          <h2 className="text-xl font-bold text-slate-900 mt-0.5 tracking-tight">
            Ready to keep growing today?
          </h2>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            {/* Mastery Overall progress card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-3.5 border border-white/80 shadow-xs flex items-center gap-3">
              {/* Circular Progress Meter */}
              <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center">
                <svg className="w-12 h-12 -rotate-90" viewBox="0 0 44 44">
                  <circle
                    cx="22"
                    cy="22"
                    r="18"
                    stroke="#e2e8f0"
                    strokeWidth="3.5"
                    fill="none"
                  />
                  <circle
                    cx="22"
                    cy="22"
                    r="18"
                    stroke="#4338ca"
                    strokeWidth="3.5"
                    strokeDasharray={2 * Math.PI * 18}
                    strokeDashoffset={2 * Math.PI * 18 * (1 - currentUser.overallMastery / 100)}
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
                <span className="absolute text-[11px] font-extrabold text-[#312e81]">
                  {currentUser.overallMastery}%
                </span>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800 leading-tight">Mastery</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Overall progress</p>
              </div>
            </div>

            {/* Streak Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-3.5 border border-white/80 shadow-xs flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#cffafe] flex items-center justify-center flex-shrink-0 text-[#0891b2]">
                <Flame className="w-6 h-6 fill-[#06b6d4] text-[#0891b2]" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800 leading-tight">
                  {currentUser.streakDays} Days
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">Learning streak</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Recommended Next Card (matching Image 3.png) */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
        className="relative rounded-3xl overflow-hidden p-5 bg-gradient-to-br from-[#4f46e5] via-[#4338ca] to-[#3730a3] text-white shadow-lg shadow-indigo-600/20"
      >
        {/* Subtle geometric background overlay */}
        <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/5 rounded-full blur-xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-400/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-1 text-[11px] font-extrabold tracking-wider uppercase text-indigo-200 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-indigo-200" />
            <span>RECOMMENDED NEXT</span>
          </div>

          <h3 className="text-xl font-extrabold tracking-tight text-white mb-0.5">
            {recommendedSession.topic}
          </h3>
          <p className="text-[11px] font-bold tracking-wider text-indigo-200 mb-3 uppercase">
            {recommendedSession.subject}
          </p>

          {/* Reason Box */}
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-3.5 border border-white/10 mb-4 flex items-start gap-2.5">
            <GitBranch className="w-4 h-4 text-indigo-200 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-indigo-100 leading-relaxed font-normal">
              <span className="font-bold text-white">Why:</span> {recommendedSession.reason}
            </p>
          </div>

          {/* Start Session Button */}
          <button
            onClick={onStartSession}
            className="w-full py-3 px-5 rounded-2xl bg-[#e0e7ff] hover:bg-white text-[#3730a3] font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.98] cursor-pointer"
          >
            <span>Start Session</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      {/* 3. Your Subjects (matching Image 3.png) */}
      <div>
        <div className="flex items-center justify-between mb-3 px-1">
          <h3 className="text-base font-bold text-slate-900">Your Subjects</h3>
          <button
            onClick={onViewAllSubjects}
            className="text-xs font-semibold text-[#4338ca] hover:underline"
          >
            View All
          </button>
        </div>

        {/* Subjects horizontal slider/grid */}
        <div className="grid grid-cols-2 gap-3">
          {/* Mathematics Card */}
          <div
            onClick={() => onSelectSubject('math')}
            className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:border-indigo-200 hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:scale-105 transition-transform">
                <Calculator className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-indigo-600">85%</span>
            </div>
            <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
              Mathematics
            </h4>
            <p className="text-[11px] text-slate-500 mb-3 truncate">Advanced Algebra</p>

            {/* Progress bar */}
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div className="bg-indigo-600 h-full rounded-full" style={{ width: '85%' }} />
            </div>
          </div>

          {/* Physics Card */}
          <div
            onClick={() => onSelectSubject('physics')}
            className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:border-cyan-200 hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 group-hover:scale-105 transition-transform">
                <Rocket className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-cyan-600">62%</span>
            </div>
            <h4 className="text-sm font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
              Physics
            </h4>
            <p className="text-[11px] text-slate-500 mb-3 truncate">Kinematics & Dynamics</p>

            {/* Progress bar */}
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div className="bg-cyan-600 h-full rounded-full" style={{ width: '62%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* 4. Concepts Overview (matching Image 3.png) */}
      <div>
        <h3 className="text-base font-bold text-slate-900 mb-3 px-1">Concepts Overview</h3>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm space-y-4">
          {/* Strong Performing */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-2.5">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span>Strong Performing</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <span
                onClick={() => setSelectedConcept("Newton's Laws")}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#d1fae5] text-[#065f46] text-xs font-semibold hover:bg-emerald-200 transition-colors cursor-pointer"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Newton's Laws
              </span>
              <span
                onClick={() => setSelectedConcept("Essay Structure")}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#d1fae5] text-[#065f46] text-xs font-semibold hover:bg-emerald-200 transition-colors cursor-pointer"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Essay Structure
              </span>
              <span
                onClick={() => setSelectedConcept("Linear Equations")}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#d1fae5] text-[#065f46] text-xs font-semibold hover:bg-emerald-200 transition-colors cursor-pointer"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Linear Equations
              </span>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-3">
            {/* Needs Review */}
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-2.5">
              <TrendingUp className="w-4 h-4 text-rose-500 rotate-180" />
              <span>Needs Review</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <span
                onClick={() => {
                  setSelectedConcept('Trigonometry');
                  onOpenAiPath();
                }}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#ffe4e6] text-[#9f1239] text-xs font-semibold hover:bg-rose-200 transition-colors cursor-pointer"
              >
                <AlertCircle className="w-3.5 h-3.5 text-rose-500" />
                Trigonometry
              </span>
              <span
                onClick={() => {
                  setSelectedConcept('Kinematics');
                  onOpenAiPath();
                }}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#ffe4e6] text-[#9f1239] text-xs font-semibold hover:bg-rose-200 transition-colors cursor-pointer"
              >
                <AlertCircle className="w-3.5 h-3.5 text-rose-500" />
                Kinematics
              </span>
              <span
                onClick={() => {
                  setSelectedConcept('Factorization');
                  onOpenAiPath();
                }}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#ffe4e6] text-[#9f1239] text-xs font-semibold hover:bg-rose-200 transition-colors cursor-pointer"
              >
                <AlertCircle className="w-3.5 h-3.5 text-rose-500" />
                Factorization
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
