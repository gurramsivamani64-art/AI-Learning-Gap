import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, Lightbulb, Info } from 'lucide-react';
import { motion } from 'motion/react';
import { mathSkillNodes } from '../../data/learningData';

interface AiPathScreenProps {
  onStartRecommendedPath: () => void;
}

export const AiPathScreen: React.FC<AiPathScreenProps> = ({
  onStartRecommendedPath,
}) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  const selectedNode = mathSkillNodes.find((n) => n.id === selectedNodeId);

  return (
    <div className="max-w-md mx-auto px-4 pt-2 pb-24 space-y-4">
      {/* Title & Status Badges (matching Image 7.png) */}
      <div>
        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-1">
          <Lightbulb className="w-4 h-4 text-indigo-600" />
          <span>Your Personalized Learning Analysis</span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ede9fe] text-[#4f46e5] text-xs font-semibold">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          <span>Mathematics Assessment Complete</span>
        </div>
      </div>

      {/* AI Summary Card (matching Image 7.png) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-white rounded-3xl p-5 border border-slate-100 shadow-sm border-l-4 border-l-[#4338ca]"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-[#e0e7ff] text-[#4338ca] flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold text-slate-900">AI Summary</h3>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed font-normal">
          You have a strong understanding of basic algebra, but your performance in factorization suggests that reviewing algebraic identities may help you understand quadratic equations more effectively.
        </p>
      </motion.div>

      {/* Skill Map Section (matching Image 7.png) */}
      <div>
        <div className="flex items-center justify-between mb-2 px-1">
          <h3 className="text-sm font-bold text-slate-900">Skill Map</h3>
          {selectedNode && (
            <span className="text-[11px] text-indigo-600 font-semibold">
              {selectedNode.name}: {selectedNode.mastery}%
            </span>
          )}
        </div>

        {/* Visual Interactive SVG Knowledge Graph */}
        <div className="relative bg-white rounded-3xl p-4 border border-slate-100 shadow-sm h-64 overflow-hidden flex items-center justify-center">
          <svg viewBox="0 0 320 220" className="w-full h-full select-none">
            {/* Dashed connector links */}
            <g stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 3">
              {/* Root Algebra -> Linear Eq */}
              <line x1="160" y1="45" x2="90" y2="105" />
              {/* Root Algebra -> Identities */}
              <line x1="160" y1="45" x2="230" y2="105" />
              {/* Identities -> Factorization */}
              <line x1="230" y1="105" x2="135" y2="165" />
              {/* Identities -> Quadratics */}
              <line x1="230" y1="105" x2="205" y2="165" />
            </g>

            {/* Node 1: Root - Algebra (Purple) */}
            <g
              className="cursor-pointer group"
              onClick={() => setSelectedNodeId('algebra')}
            >
              <circle cx="160" cy="45" r="14" fill="#312e81" className="transition-transform group-hover:scale-110" />
              <text x="160" y="70" textAnchor="middle" fill="#1e1b4b" fontSize="11" fontWeight="bold">
                Algebra
              </text>
            </g>

            {/* Node 2: Linear Eq. (Green - Strong) */}
            <g
              className="cursor-pointer group"
              onClick={() => setSelectedNodeId('linear')}
            >
              <circle cx="90" cy="105" r="12" fill="#34d399" className="transition-transform group-hover:scale-110" />
              <text x="90" y="128" textAnchor="middle" fill="#0f172a" fontSize="10.5" fontWeight="600">
                Linear Eq.
              </text>
            </g>

            {/* Node 3: Identities (Cyan - Partially Understood) */}
            <g
              className="cursor-pointer group"
              onClick={() => setSelectedNodeId('identities')}
            >
              <circle cx="230" cy="105" r="12" fill="#38bdf8" className="transition-transform group-hover:scale-110" />
              <text x="230" y="128" textAnchor="middle" fill="#0f172a" fontSize="10.5" fontWeight="600">
                Identities
              </text>
            </g>

            {/* Node 4: Factorization (Peach - Weak) */}
            <g
              className="cursor-pointer group"
              onClick={() => setSelectedNodeId('factorization')}
            >
              <circle cx="135" cy="165" r="11" fill="#fecdd3" stroke="#f43f5e" strokeWidth="1.5" className="transition-transform group-hover:scale-110" />
              <text x="135" y="188" textAnchor="middle" fill="#0f172a" fontSize="9.5" fontWeight="500">
                Factorization
              </text>
            </g>

            {/* Node 5: Quadratics (Peach - Weak) */}
            <g
              className="cursor-pointer group"
              onClick={() => setSelectedNodeId('quadratics')}
            >
              <circle cx="205" cy="165" r="11" fill="#fecdd3" stroke="#f43f5e" strokeWidth="1.5" className="transition-transform group-hover:scale-110" />
              <text x="205" y="188" textAnchor="middle" fill="#0f172a" fontSize="9.5" fontWeight="500">
                Quadratics
              </text>
            </g>
          </svg>
        </div>
      </div>

      {/* Breakdown Section (matching Image 7.png) */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-slate-900 px-1">Breakdown</h3>

        {/* 1. Strong Card */}
        <div className="bg-white rounded-2xl p-3.5 border border-slate-100 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-800">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#34d399]" />
              <span>Strong</span>
            </div>
            <span className="text-slate-500 font-semibold">82%</span>
          </div>
          <p className="text-xs font-semibold text-slate-700">Linear Equations</p>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div className="h-full bg-[#34d399] rounded-full" style={{ width: '82%' }} />
          </div>
        </div>

        {/* 2. Partially Understood Card */}
        <div className="bg-white rounded-2xl p-3.5 border border-slate-100 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-800">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8]" />
              <span>Partially Understood</span>
            </div>
            <span className="text-slate-500 font-semibold">55%</span>
          </div>
          <p className="text-xs font-semibold text-slate-700">Algebraic Identities</p>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div className="h-full bg-[#38bdf8] rounded-full" style={{ width: '55%' }} />
          </div>
        </div>

        {/* 3. Weak Card */}
        <div className="bg-white rounded-2xl p-3.5 border border-slate-100 shadow-xs space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-800">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#fda4af]" />
              <span>Weak</span>
            </div>
          </div>

          {/* Factorization Item */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
              <span>Factorization</span>
              <span className="text-rose-600 font-bold">45%</span>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div className="h-full bg-[#fda4af] rounded-full" style={{ width: '45%' }} />
            </div>
          </div>

          {/* Quadratic Equations Item */}
          <div className="space-y-1.5 pt-1 border-t border-slate-50">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
              <span>Quadratic Equations</span>
              <span className="text-rose-600 font-bold">38%</span>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div className="h-full bg-[#fda4af] rounded-full" style={{ width: '38%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Start Recommended Path CTA Button (matching Image 7.png) */}
      <div className="pt-2">
        <button
          onClick={onStartRecommendedPath}
          className="w-full py-3.5 px-6 rounded-2xl bg-[#3b38d8] hover:bg-[#322ebf] active:scale-[0.99] text-white font-bold text-sm shadow-md shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
        >
          <span>Start Recommended Path</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
