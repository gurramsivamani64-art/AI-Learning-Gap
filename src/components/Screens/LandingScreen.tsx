import React from 'react';
import { ArrowRight, Sparkles, Target, BookOpen, TrendingUp, Brain, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { ScreenType } from '../../types';

interface LandingScreenProps {
  onStartLearning: () => void;
  onTakeAssessment: () => void;
}

export const LandingScreen: React.FC<LandingScreenProps> = ({
  onStartLearning,
  onTakeAssessment,
}) => {
  return (
    <div className="min-h-screen bg-[#f9fbfe] pb-24 text-slate-800 antialiased overflow-x-hidden">
      {/* Top Section */}
      <div className="max-w-md mx-auto px-6 pt-10 pb-6 flex flex-col items-center text-center">
        {/* Version Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#ede9fe] text-[#4f46e5] text-xs font-bold tracking-wider uppercase mb-6 shadow-sm border border-indigo-100"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>LEARNPATH AI 2.0</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[28px] sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-[1.25] mb-3"
        >
          Learn Smarter. <br />
          <span className="text-[#3b38d8]">Focus on What You Need.</span>
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-slate-600 text-sm leading-relaxed max-w-sm mb-8 font-normal"
        >
          LearnPath AI identifies your knowledge gaps and creates a personalized learning journey designed specifically for you.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full space-y-3"
        >
          <button
            onClick={onStartLearning}
            className="w-full py-3.5 px-6 rounded-2xl bg-[#3b38d8] hover:bg-[#322ebf] active:scale-[0.99] text-white font-semibold text-[15px] shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>Start Learning</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onTakeAssessment}
            className="w-full py-3.5 px-6 rounded-2xl bg-white hover:bg-slate-50 active:scale-[0.99] text-[#3b38d8] font-semibold text-[15px] border border-slate-200 shadow-sm transition-all cursor-pointer"
          >
            Take Assessment
          </button>
        </motion.div>
      </div>

      {/* Neural Graph Illustration & Card */}
      <div className="max-w-md mx-auto px-5 my-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#ebf4ff] via-[#e6effe] to-[#f3f4ff] border border-slate-200/80 shadow-md p-4 sm:p-5"
        >
          {/* Glowing Neural Web Graphic */}
          <div className="relative w-full h-56 rounded-2xl overflow-hidden flex items-center justify-center">
            {/* Ambient background glow circles */}
            <div className="absolute w-44 h-44 bg-blue-400/20 rounded-full blur-2xl" />
            <div className="absolute w-36 h-36 bg-indigo-500/20 rounded-full blur-2xl right-6 top-4" />

            {/* Neural Brain SVG Network */}
            <svg viewBox="0 0 400 240" className="w-full h-full text-indigo-600/70" fill="none">
              {/* Connective neural synapses */}
              <g stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6">
                <path d="M60,120 Q120,40 200,100" />
                <path d="M200,100 Q260,30 340,90" />
                <path d="M120,160 Q200,190 280,150" />
                <path d="M60,120 Q130,200 200,140" />
                <path d="M200,140 Q280,210 340,140" />
                <path d="M150,70 Q200,110 250,70" />
                <path d="M200,100 L200,140" />
                <path d="M120,80 L140,140" />
                <path d="M280,80 L260,140" />
              </g>

              {/* Glowing Synaptic Axons */}
              <g stroke="url(#axon-grad)" strokeWidth="2.5" opacity="0.85">
                <path d="M80,110 C140,60 170,120 200,100" />
                <path d="M200,100 C230,80 260,130 320,100" />
                <path d="M140,150 C180,110 220,160 260,140" />
                <path d="M200,100 C200,120 200,130 200,140" />
              </g>

              <defs>
                <linearGradient id="axon-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="50%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>

              {/* Neural Nodes with Labels */}
              {/* Central AI Node */}
              <circle cx="200" cy="120" r="18" fill="#3b38d8" fillOpacity="0.15" />
              <circle cx="200" cy="120" r="10" fill="#3b38d8" />
              <text x="200" y="123" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">AI</text>

              {/* Surrounding Nodes */}
              {/* Knowledge */}
              <circle cx="130" cy="85" r="5" fill="#0284c7" />
              <rect x="90" y="60" width="80" height="18" rx="9" fill="#ffffff" fillOpacity="0.85" stroke="#bae6fd" strokeWidth="1" />
              <text x="130" y="72" textAnchor="middle" fill="#0369a1" fontSize="8" fontWeight="bold">KNOWLEDGE</text>

              {/* Skills */}
              <circle cx="270" cy="80" r="5" fill="#0ea5e9" />
              <rect x="240" y="55" width="60" height="18" rx="9" fill="#ffffff" fillOpacity="0.85" stroke="#bae6fd" strokeWidth="1" />
              <text x="270" y="67" textAnchor="middle" fill="#0369a1" fontSize="8" fontWeight="bold">SKILLS</text>

              {/* Personalized Path */}
              <circle cx="290" cy="130" r="5" fill="#6366f1" />
              <rect x="235" y="110" width="110" height="18" rx="9" fill="#ffffff" fillOpacity="0.9" stroke="#c7d2fe" strokeWidth="1" />
              <text x="290" y="122" textAnchor="middle" fill="#4338ca" fontSize="8" fontWeight="bold">PERSONALIZED PATH</text>

              {/* Growth */}
              <circle cx="260" cy="165" r="4.5" fill="#10b981" />
              <rect x="230" y="152" width="60" height="16" rx="8" fill="#ffffff" fillOpacity="0.85" stroke="#a7f3d0" strokeWidth="1" />
              <text x="260" y="163" textAnchor="middle" fill="#047857" fontSize="7.5" fontWeight="bold">GROWTH</text>

              {/* Data */}
              <circle cx="315" cy="160" r="4" fill="#3b82f6" />
              <rect x="295" y="150" width="40" height="16" rx="8" fill="#ffffff" fillOpacity="0.85" stroke="#bfdbfe" strokeWidth="1" />
              <text x="315" y="161" textAnchor="middle" fill="#1d4ed8" fontSize="7.5" fontWeight="bold">DATA</text>

              {/* Achievement */}
              <circle cx="275" cy="195" r="4" fill="#8b5cf6" />
              <rect x="235" y="186" width="80" height="16" rx="8" fill="#ffffff" fillOpacity="0.85" stroke="#ddd6fe" strokeWidth="1" />
              <text x="275" y="197" textAnchor="middle" fill="#6d28d9" fontSize="7.5" fontWeight="bold">ACHIEVEMENT</text>
            </svg>

            {/* Glowing synaptic pulses */}
            <motion.div
              animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.98, 1.02, 0.98] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute inset-0 pointer-events-none bg-radial-gradient"
            />
          </div>

          {/* Floating Calculus Mastery Card (matching Image 1.png) */}
          <div className="mt-3 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-slate-800">Calculus Mastery</span>
              <span className="text-sm font-extrabold text-[#3b38d8]">82%</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-[#3b38d8] transition-all duration-1000"
                style={{ width: '82%' }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* How it works Section (matching Image 1.png) */}
      <div className="max-w-md mx-auto px-6 mt-8">
        <div className="text-center mb-6">
          <h2 className="text-base font-bold text-slate-900">How it works</h2>
          <p className="text-xs text-slate-500 mt-0.5">The engine behind your success.</p>
        </div>

        {/* 3 Value Prop Cards */}
        <div className="space-y-3.5">
          {/* Card 1: AI Gap Analysis */}
          <motion.div
            whileHover={{ y: -2 }}
            className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-[#eef2ff] flex items-center justify-center flex-shrink-0 text-[#4f46e5]">
              <Target className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-0.5">AI Gap Analysis</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Pinpoints exactly what you don't know, saving hours of redundant studying.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Universal Scope */}
          <motion.div
            whileHover={{ y: -2 }}
            className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-[#e0f2fe] flex items-center justify-center flex-shrink-0 text-[#0284c7]">
              <BookOpen className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-0.5">Universal Scope</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                From advanced Mathematics to English Literature, your single source of truth.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Adaptive Practice */}
          <motion.div
            whileHover={{ y: -2 }}
            className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-[#e6f4ea] flex items-center justify-center flex-shrink-0 text-[#059669]">
              <TrendingUp className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-0.5">Adaptive Practice</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Questions evolve in real-time matching your growing competence level.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
