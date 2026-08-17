import React from 'react';
import { X, Award, Flame, BookOpen, Sparkles, CheckCircle2, Shield } from 'lucide-react';
import { currentUser } from '../data/learningData';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-sm w-full p-5 shadow-2xl border border-slate-100 space-y-4 animate-in zoom-in-95">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
            <Shield className="w-4 h-4 text-indigo-600" />
            <span>Student Profile</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Profile Card */}
        <div className="flex items-center gap-3.5">
          <div className="w-14 h-14 rounded-full overflow-hidden ring-4 ring-indigo-50 shadow-sm flex-shrink-0">
            <img
              src={currentUser.avatarUrl}
              alt={currentUser.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">{currentUser.name}</h3>
            <p className="text-xs text-indigo-600 font-semibold">{currentUser.gradeLevel}</p>
            <p className="text-[11px] text-slate-400">{currentUser.currentSubject}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2.5 pt-2">
          <div className="bg-slate-50 rounded-2xl p-3 text-center border border-slate-100">
            <p className="text-lg font-extrabold text-[#312e81]">{currentUser.overallMastery}%</p>
            <p className="text-[11px] text-slate-500">Overall Mastery</p>
          </div>
          <div className="bg-slate-50 rounded-2xl p-3 text-center border border-slate-100">
            <p className="text-lg font-extrabold text-cyan-600">{currentUser.streakDays} Days</p>
            <p className="text-[11px] text-slate-500">Active Streak</p>
          </div>
        </div>

        {/* Badges Earned */}
        <div className="space-y-2 pt-1">
          <p className="text-xs font-bold text-slate-700">Recent Milestones</p>
          <div className="space-y-1.5 text-xs text-slate-600">
            <div className="flex items-center gap-2 p-2 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Algebra Basics Master (Level 1)</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-xl bg-indigo-50 text-indigo-900 border border-indigo-100">
              <Sparkles className="w-4 h-4 text-indigo-600 flex-shrink-0" />
              <span>7-Day Consistent Practice Streak</span>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-sm transition-all"
        >
          Done
        </button>
      </div>
    </div>
  );
};
