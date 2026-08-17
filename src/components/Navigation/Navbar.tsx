import React, { useState } from 'react';
import { Bell, Sparkles, X, Check } from 'lucide-react';
import { LearnPathLogo } from '../Common/LearnPathLogo';
import { currentUser } from '../../data/learningData';

interface NavbarProps {
  title?: string;
  onProfileClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  title = 'Home',
  onProfileClick,
}) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      title: 'New AI Insight Available',
      desc: 'Factoring review recommended to boost your Calculus readiness.',
      time: '10m ago',
      read: false,
    },
    {
      id: '2',
      title: '7-Day Streak Active! 🔥',
      desc: 'Keep up the consistent momentum to earn your Algebra Mastery badge.',
      time: '2h ago',
      read: false,
    },
  ]);

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-100 px-4 py-3 sm:px-6 transition-all">
      <div className="max-w-md mx-auto flex items-center justify-between">
        {/* Left branding & title */}
        <div className="flex items-center gap-2.5">
          <LearnPathLogo size="sm" showText={false} />
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1e1b4b]">
            {title}
          </h1>
        </div>

        {/* Right actions: Notifications & User Avatar */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              aria-label="Notifications"
              className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-slate-50 rounded-full transition-colors relative"
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-indigo-600 rounded-full ring-2 ring-white animate-pulse" />
              )}
            </button>

            {/* Notifications Popover */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Learning Alerts</span>
                  </div>
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllRead}
                      className="text-[11px] text-indigo-600 hover:underline font-semibold"
                    >
                      Mark read
                    </button>
                  )}
                </div>

                <div className="space-y-2">
                  {notifications.map((item) => (
                    <div
                      key={item.id}
                      className={`p-2.5 rounded-xl text-xs transition-colors ${
                        item.read ? 'bg-slate-50 text-slate-600' : 'bg-indigo-50/60 text-indigo-950 font-medium'
                      }`}
                    >
                      <div className="font-semibold text-[13px] flex items-center justify-between">
                        <span>{item.title}</span>
                        <span className="text-[10px] text-slate-400 font-normal">{item.time}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setShowNotifications(false)}
                  className="w-full mt-2.5 py-1.5 text-center text-xs font-semibold text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition"
                >
                  Close
                </button>
              </div>
            )}
          </div>

          {/* User Avatar matching student photo */}
          <button
            onClick={onProfileClick}
            className="group relative flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-full"
            title={`${currentUser.name}'s Profile`}
          >
            <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-indigo-500/20 group-hover:ring-indigo-500 transition-all shadow-sm">
              <img
                src={currentUser.avatarUrl}
                alt={currentUser.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full" />
          </button>
        </div>
      </div>
    </header>
  );
};
