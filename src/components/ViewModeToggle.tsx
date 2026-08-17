import React from 'react';
import { Smartphone, Monitor, Eye } from 'lucide-react';
import { ScreenType } from '../types';

interface ViewModeToggleProps {
  currentScreen: ScreenType;
  onSelectScreen: (screen: ScreenType) => void;
  isPhoneFrame: boolean;
  onTogglePhoneFrame: () => void;
}

export const ViewModeToggle: React.FC<ViewModeToggleProps> = ({
  currentScreen,
  onSelectScreen,
  isPhoneFrame,
  onTogglePhoneFrame,
}) => {
  const screens: { id: ScreenType; label: string; tag: string }[] = [
    { id: 'landing', label: '1. Landing', tag: 'Image 1' },
    { id: 'home', label: '2. Home', tag: 'Image 3' },
    { id: 'quiz', label: '3. Quiz Session', tag: 'Image 5' },
    { id: 'ai-path', label: '4. AI Analysis', tag: 'Image 7' },
    { id: 'journey', label: '5. Journey Steps', tag: 'Image 11' },
  ];

  return (
    <aside aria-label="Screen navigator" className="bg-white/95 backdrop-blur-md border-b border-slate-200 px-3 py-2 text-xs z-40 sticky top-0 shadow-xs">
      <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* Screen Jump Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 no-scrollbar">
          <span className="text-[11px] font-bold text-slate-500 mr-1 flex items-center gap-1">
            <Eye className="w-3.5 h-3.5 text-indigo-600" />
            <span className="hidden sm:inline">Screens:</span>
          </span>
          {screens.map((s) => (
            <button
              key={s.id}
              onClick={() => onSelectScreen(s.id)}
              className={`px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                currentScreen === s.id
                  ? 'bg-[#3b38d8] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <span>{s.label}</span>
            </button>
          ))}
        </div>

        {/* Device Frame View Toggle */}
        <div className="flex items-center gap-1 ml-auto">
          <button
            onClick={onTogglePhoneFrame}
            className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              isPhoneFrame
                ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                : 'text-slate-500 hover:bg-slate-100'
            }`}
            title="Toggle Mobile Mockup Frame"
          >
            {isPhoneFrame ? (
              <>
                <Smartphone className="w-3.5 h-3.5 text-indigo-600" />
                <span className="hidden sm:inline">Phone Frame</span>
              </>
            ) : (
              <>
                <Monitor className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Full Width</span>
              </>
            )}
          </button>
        </div>
      </div>
    </aside>
  );
};
