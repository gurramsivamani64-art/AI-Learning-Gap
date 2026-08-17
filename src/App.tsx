import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ScreenType } from './types';
import { Navbar } from './components/Navigation/Navbar';
import { BottomNav } from './components/Navigation/BottomNav';
import { LandingScreen } from './components/Screens/LandingScreen';
import { HomeScreen } from './components/Screens/HomeScreen';
import { QuizSessionScreen } from './components/Screens/QuizSessionScreen';
import { AiPathScreen } from './components/Screens/AiPathScreen';
import { LearningJourneyScreen } from './components/Screens/LearningJourneyScreen';
import { SubjectsScreen } from './components/Screens/SubjectsScreen';
import { AnalyticsScreen } from './components/Screens/AnalyticsScreen';
import { ViewModeToggle } from './components/ViewModeToggle';
import { ProfileModal } from './components/ProfileModal';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [isPhoneFrame, setIsPhoneFrame] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const getScreenTitle = (screen: ScreenType) => {
    switch (screen) {
      case 'home':
        return 'Home';
      case 'ai-path':
      case 'journey':
        return 'Ai Path';
      case 'subjects':
        return 'Subjects';
      case 'analytics':
        return 'Analytics';
      default:
        return 'LearnPath AI';
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'landing':
        return (
          <LandingScreen
            onStartLearning={() => setCurrentScreen('home')}
            onTakeAssessment={() => setCurrentScreen('quiz')}
          />
        );
      case 'home':
        return (
          <HomeScreen
            onStartSession={() => setCurrentScreen('quiz')}
            onSelectSubject={(subjId) => {
              if (subjId === 'math') {
                setCurrentScreen('journey');
              } else {
                setCurrentScreen('subjects');
              }
            }}
            onViewAllSubjects={() => setCurrentScreen('subjects')}
            onOpenAiPath={() => setCurrentScreen('ai-path')}
          />
        );
      case 'quiz':
        return (
          <QuizSessionScreen
            onBack={() => setCurrentScreen('home')}
            onCompleteQuiz={() => setCurrentScreen('ai-path')}
          />
        );
      case 'ai-path':
        return (
          <AiPathScreen
            onStartRecommendedPath={() => setCurrentScreen('journey')}
          />
        );
      case 'journey':
        return (
          <LearningJourneyScreen
            onStartLesson={() => setCurrentScreen('quiz')}
            onReviewLesson={() => setCurrentScreen('quiz')}
          />
        );
      case 'subjects':
        return (
          <SubjectsScreen
            onSelectSubject={(subjId) => {
              if (subjId === 'math') {
                setCurrentScreen('journey');
              } else {
                setCurrentScreen('quiz');
              }
            }}
          />
        );
      case 'analytics':
        return <AnalyticsScreen />;
      default:
        return (
          <HomeScreen
            onStartSession={() => setCurrentScreen('quiz')}
            onSelectSubject={() => setCurrentScreen('journey')}
            onViewAllSubjects={() => setCurrentScreen('subjects')}
            onOpenAiPath={() => setCurrentScreen('ai-path')}
          />
        );
    }
  };

  const showNavbar = currentScreen !== 'landing' && currentScreen !== 'quiz';
  const showBottomNav = currentScreen !== 'landing' && currentScreen !== 'quiz';

  return (
    <div className="min-h-screen bg-[#f1f5f9] text-slate-800 flex flex-col items-center justify-start antialiased">
      {/* Top Preview/Screen Switcher Bar */}
      <div className="w-full">
        <ViewModeToggle
          currentScreen={currentScreen}
          onSelectScreen={(screen) => setCurrentScreen(screen)}
          isPhoneFrame={isPhoneFrame}
          onTogglePhoneFrame={() => setIsPhoneFrame(!isPhoneFrame)}
        />
      </div>

      {/* Main Content Area: Phone Frame or Responsive Center View */}
      <div className={`w-full flex-1 flex justify-center ${isPhoneFrame ? 'py-6 px-3' : ''}`}>
        <div
          className={`w-full bg-[#f8faff] min-h-screen flex flex-col relative transition-all ${
            isPhoneFrame
              ? 'max-w-[400px] min-h-[820px] rounded-[44px] shadow-2xl border-[10px] border-slate-800 overflow-hidden ring-1 ring-slate-900/10'
              : 'max-w-md shadow-sm border-x border-slate-100'
          }`}
        >
          {/* Phone Frame Speaker & Dynamic Island simulation if phone frame mode is on */}
          {isPhoneFrame && (
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-800 rounded-full z-50 pointer-events-none flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-slate-900 rounded-full mr-2" />
              <div className="w-8 h-1 bg-slate-700 rounded-full" />
            </div>
          )}

          {/* Top Navbar */}
          {showNavbar && (
            <Navbar
              title={getScreenTitle(currentScreen)}
              onProfileClick={() => setShowProfileModal(true)}
            />
          )}

          {/* Screen Body */}
          <main className="flex-1 w-full relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentScreen}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
                className="w-full"
              >
                {renderScreen()}
              </motion.div>
            </AnimatePresence>
          </main>

          {/* Bottom Tab Bar */}
          {showBottomNav && (
            <BottomNav
              currentScreen={currentScreen}
              onNavigate={(screen) => setCurrentScreen(screen)}
            />
          )}
        </div>
      </div>

      {/* Profile Modal */}
      <ProfileModal
        isOpen={showProfileModal}
        onClose={() => setShowProfileModal(false)}
      />
    </div>
  );
}
