import React, { useState } from 'react';
import { Calculator, Rocket, BookOpen, FlaskConical, Search, ArrowRight, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { subjectsList } from '../../data/learningData';

interface SubjectsScreenProps {
  onSelectSubject: (subjectId: string) => void;
}

export const SubjectsScreen: React.FC<SubjectsScreenProps> = ({
  onSelectSubject,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'STEM' | 'Humanities'>('All');

  const filteredSubjects = subjectsList.filter((subject) => {
    const matchesCategory = selectedCategory === 'All' || subject.category === selectedCategory;
    const matchesSearch =
      subject.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      subject.currentTopic.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getIcon = (name: string) => {
    switch (name) {
      case 'Calculator':
        return <Calculator className="w-5 h-5" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5" />;
      case 'FlaskConical':
        return <FlaskConical className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 pt-2 pb-24 space-y-4">
      {/* Header */}
      <div>
        <h2 className="text-xl font-extrabold text-slate-900">Your Curriculum</h2>
        <p className="text-xs text-slate-500 mt-0.5">Explore your subjects and adaptive modules.</p>
      </div>

      {/* Search and Filters */}
      <div className="space-y-2.5">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search subjects or topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-2xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 shadow-xs"
          />
        </div>

        <div className="flex gap-2">
          {(['All', 'STEM', 'Humanities'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Subject Cards List */}
      <div className="space-y-3">
        {filteredSubjects.map((subject) => (
          <div
            key={subject.id}
            onClick={() => onSelectSubject(subject.id)}
            className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-100 shadow-sm hover:border-indigo-200 hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center text-white shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform"
                  style={{ backgroundColor: subject.color }}
                >
                  {getIcon(subject.iconName)}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {subject.name}
                  </h3>
                  <p className="text-xs text-slate-500">{subject.currentTopic}</p>
                </div>
              </div>

              <div className="text-right">
                <span className="text-sm font-extrabold text-slate-900">
                  {subject.masteryPercentage}%
                </span>
                <p className="text-[10px] text-slate-400">Mastery</p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between">
              <span className="text-[11px] font-medium text-slate-500">
                {subject.completedModules} of {subject.totalModules} modules finished
              </span>
              <div className="flex items-center text-xs font-bold text-indigo-600 group-hover:translate-x-1 transition-transform">
                <span>View Path</span>
                <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
