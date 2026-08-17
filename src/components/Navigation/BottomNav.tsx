import React from 'react';
import { Home, BookOpen, BrainCircuit, BarChart3 } from 'lucide-react';
import { ScreenType } from '../../types';

interface BottomNavProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentScreen,
  onNavigate,
}) => {
  const tabs: { id: ScreenType; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'subjects', label: 'Subjects', icon: BookOpen },
    { id: 'ai-path', label: 'AI Path', icon: BrainCircuit },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200/80 py-2 px-6 safe-area-bottom shadow-lg">
      <div className="max-w-md mx-auto flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive =
            currentScreen === tab.id ||
            (tab.id === 'ai-path' && currentScreen === 'journey');

          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'text-indigo-600 scale-105'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 transition-transform ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />
                {isActive && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-indigo-600 rounded-full" />
                )}
              </div>
              <span className={`text-[11px] mt-1 font-semibold tracking-tight ${isActive ? 'text-indigo-600' : 'text-slate-500'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
