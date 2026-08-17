import React from 'react';
import { Check, Play, Lock, Trophy, Star, ArrowRight, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';
import { mathJourneySteps } from '../../data/learningData';

interface LearningJourneyScreenProps {
  onStartLesson: (stepNumber: number) => void;
  onReviewLesson: (stepNumber: number) => void;
}

export const LearningJourneyScreen: React.FC<LearningJourneyScreenProps> = ({
  onStartLesson,
  onReviewLesson,
}) => {
  return (
    <div className="max-w-md mx-auto px-4 pt-2 pb-24 space-y-5">
      {/* Screen Title & Subtitle (matching Image 11.png) */}
      <div className="px-1">
        <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
          Your Mathematics Journey
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Master algebra one step at a time.
        </p>
      </div>

      {/* Vertical Stepper Timeline (matching Image 11.png) */}
      <div className="relative pl-6 space-y-6">
        {/* Continuous background vertical connector line */}
        <div className="absolute left-[39px] top-6 bottom-8 w-[3px] bg-slate-200 rounded-full" />

        {/* Step 1: Completed */}
        <div className="relative flex items-start gap-4">
          {/* Node Icon */}
          <div className="relative z-10 w-11 h-11 rounded-full bg-[#059669] text-white flex items-center justify-center shadow-md ring-4 ring-white flex-shrink-0">
            <Check className="w-5 h-5 stroke-[3]" />
          </div>

          {/* Card */}
          <div className="flex-1 bg-white rounded-3xl p-4 sm:p-5 border border-slate-100 shadow-sm space-y-2">
            <span className="text-[11px] font-extrabold tracking-wider text-[#059669] uppercase">
              STEP 1 • COMPLETED
            </span>

            <h3 className="text-base font-bold text-slate-900">
              Algebra Basics
            </h3>

            <p className="text-xs text-slate-500 leading-relaxed">
              Variables, expressions, and the fundamental building...
            </p>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-1 text-slate-400">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              </div>

              <button
                onClick={() => onReviewLesson(1)}
                className="px-4 py-1.5 rounded-full bg-[#e2e8f0] hover:bg-slate-300 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
              >
                Review
              </button>
            </div>
          </div>
        </div>

        {/* Active Connector segment highlighted in purple */}
        <div className="absolute left-[39px] top-16 h-28 w-[3px] bg-[#3b38d8] rounded-full z-0" />

        {/* Step 2: Current Lesson (Active) */}
        <div className="relative flex items-start gap-4">
          {/* Node Icon */}
          <div className="relative z-10 w-11 h-11 rounded-full bg-[#3b38d8] text-white flex items-center justify-center shadow-lg shadow-indigo-500/30 ring-4 ring-indigo-100 flex-shrink-0 animate-pulse">
            <Play className="w-5 h-5 fill-white ml-0.5" />
          </div>

          {/* Card */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="flex-1 bg-gradient-to-br from-[#eff2fe] to-[#f5f7ff] rounded-3xl p-4 sm:p-5 border border-indigo-200/80 shadow-md space-y-2.5"
          >
            <div className="flex items-center gap-1.5 text-[11px] font-extrabold tracking-wider text-[#3b38d8] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#3b38d8]" />
              <span>CURRENT LESSON</span>
            </div>

            <h3 className="text-base font-bold text-slate-900">
              Algebraic Identities
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed">
              Mastering expanding and factorizing common...
            </p>

            {/* Progress Bar */}
            <div className="w-full bg-slate-200/80 h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#3b38d8] h-full rounded-full" style={{ width: '40%' }} />
            </div>

            {/* Action button */}
            <button
              onClick={() => onStartLesson(2)}
              className="w-full py-2.5 px-4 rounded-2xl bg-[#3b38d8] hover:bg-[#322ebf] text-white font-bold text-xs shadow-md shadow-indigo-500/25 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              <span>Continue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        </div>

        {/* Step 3: Locked */}
        <div className="relative flex items-start gap-4 opacity-75">
          {/* Node Icon */}
          <div className="relative z-10 w-11 h-11 rounded-full bg-[#f1f5f9] text-slate-400 flex items-center justify-center border border-slate-200 ring-4 ring-white flex-shrink-0">
            <Lock className="w-4 h-4" />
          </div>

          {/* Card */}
          <div className="flex-1 bg-white rounded-3xl p-4 sm:p-5 border border-slate-100 shadow-xs space-y-1.5">
            <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
              STEP 3
            </span>

            <h3 className="text-base font-bold text-slate-600">
              Factorization
            </h3>

            <p className="text-xs text-slate-400 leading-relaxed">
              Breaking down complex expressions into simpler...
            </p>
          </div>
        </div>

        {/* Step 4: Locked */}
        <div className="relative flex items-start gap-4 opacity-75">
          {/* Node Icon */}
          <div className="relative z-10 w-11 h-11 rounded-full bg-[#f1f5f9] text-slate-400 flex items-center justify-center border border-slate-200 ring-4 ring-white flex-shrink-0">
            <Lock className="w-4 h-4" />
          </div>

          {/* Card */}
          <div className="flex-1 bg-white rounded-3xl p-4 sm:p-5 border border-slate-100 shadow-xs space-y-1.5">
            <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
              STEP 4
            </span>

            <h3 className="text-base font-bold text-slate-600">
              Quadratic Equations
            </h3>

            <p className="text-xs text-slate-400 leading-relaxed">
              Solving for x when powers are involved.
            </p>
          </div>
        </div>

        {/* Step 5: Milestone */}
        <div className="relative flex items-start gap-4">
          {/* Node Icon */}
          <div className="relative z-10 w-11 h-11 rounded-full bg-[#dbeafe] text-[#3b82f6] flex items-center justify-center border border-blue-200 ring-4 ring-white flex-shrink-0">
            <Trophy className="w-5 h-5" />
          </div>

          {/* Card */}
          <div className="flex-1 bg-[#f8faff] rounded-3xl p-4 sm:p-5 border border-slate-200/80 shadow-xs space-y-1">
            <span className="text-[11px] font-extrabold tracking-wider text-slate-400 uppercase">
              MILESTONE
            </span>

            <h3 className="text-sm font-bold text-slate-700">
              Module Reassessment
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
