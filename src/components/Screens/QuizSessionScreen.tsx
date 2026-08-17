import React, { useState } from 'react';
import { ArrowLeft, Bot, Sparkles, CheckCircle2, XCircle, ChevronRight, HelpCircle, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { quizQuestions } from '../../data/learningData';

interface QuizSessionScreenProps {
  onBack: () => void;
  onCompleteQuiz: () => void;
}

export const QuizSessionScreen: React.FC<QuizSessionScreenProps> = ({
  onBack,
  onCompleteQuiz,
}) => {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showAiHint, setShowAiHint] = useState(false);
  const [score, setScore] = useState(0);

  const question = quizQuestions[currentQuestionIdx] || quizQuestions[0];
  const selectedOption = question.options.find((opt) => opt.id === selectedOptionId);
  const isCorrect = selectedOption?.isCorrect ?? false;

  const handleSubmit = () => {
    if (!selectedOptionId) return;
    setIsSubmitted(true);
    if (selectedOption?.isCorrect) {
      setScore((s) => s + 1);
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 },
      });
    }
  };

  const handleNext = () => {
    if (currentQuestionIdx < quizQuestions.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
      setSelectedOptionId(null);
      setIsSubmitted(false);
      setShowAiHint(false);
    } else {
      onCompleteQuiz();
    }
  };

  const progressPercentage = Math.round(((question.questionNumber) / question.totalQuestions) * 100);

  return (
    <div className="min-h-screen bg-[#f8faff] text-slate-800 antialiased pb-20">
      {/* Header (matching Image 5.png) */}
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-slate-100 px-4 py-3.5">
        <div className="max-w-md mx-auto flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-1.5 -ml-1 text-slate-700 hover:text-indigo-600 hover:bg-slate-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold text-slate-900">Quiz Session</h1>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 pt-4 space-y-4">
        {/* Progress Header */}
        <div>
          <div className="flex items-center justify-between text-xs font-bold text-slate-600 tracking-wider mb-2">
            <span>QUESTION {question.questionNumber} OF {question.totalQuestions}</span>
            <span className="text-slate-500 font-semibold">{progressPercentage}%</span>
          </div>
          {/* Progress Bar */}
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#06b6d4] transition-all duration-300 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Topic Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dcfce7] text-[#166534] text-xs font-bold">
          <span>Σ</span>
          <span>{question.topic}</span>
        </div>

        {/* Question Box Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-3">
          <p className="text-base font-bold text-slate-900">
            {question.prompt}
          </p>

          {/* Formula Display Box (matching Image 5.png) */}
          <div className="bg-[#eff2fe] rounded-2xl py-6 px-4 text-center border border-indigo-100/60 shadow-xs">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tracking-wider">
              {question.equation}
            </span>
          </div>

          <p className="text-xs text-slate-500 leading-relaxed">
            {question.instruction}
          </p>
        </div>

        {/* Multiple Choice Options List (matching Image 5.png) */}
        <div className="space-y-2.5">
          {question.options.map((option) => {
            const isSelected = selectedOptionId === option.id;
            let containerStyle = 'bg-white border-slate-100 hover:border-slate-200 text-slate-800';
            let letterStyle = 'bg-slate-100 text-slate-600';

            if (isSelected && !isSubmitted) {
              containerStyle = 'bg-indigo-50/70 border-indigo-400 text-indigo-950 ring-2 ring-indigo-500/20';
              letterStyle = 'bg-indigo-600 text-white font-bold';
            } else if (isSubmitted) {
              if (option.isCorrect) {
                containerStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 ring-2 ring-emerald-500/20';
                letterStyle = 'bg-emerald-600 text-white font-bold';
              } else if (isSelected && !option.isCorrect) {
                containerStyle = 'bg-rose-50 border-rose-400 text-rose-950 ring-2 ring-rose-500/20';
                letterStyle = 'bg-rose-600 text-white font-bold';
              }
            }

            return (
              <motion.button
                key={option.id}
                whileTap={{ scale: 0.99 }}
                disabled={isSubmitted}
                onClick={() => setSelectedOptionId(option.id)}
                className={`w-full p-4 rounded-2xl border shadow-xs flex items-center gap-3.5 transition-all text-left cursor-pointer ${containerStyle}`}
              >
                {/* Circle Letter Badge */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${letterStyle}`}>
                  {option.id}
                </div>

                <span className="text-sm font-semibold font-mono flex-1">
                  {option.text}
                </span>

                {isSubmitted && option.isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                )}
                {isSubmitted && isSelected && !option.isCorrect && (
                  <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* AI Tutor Hint Card (matching Image 5.png) */}
        <div
          onClick={() => setShowAiHint(!showAiHint)}
          className="bg-[#e0e7ff]/60 hover:bg-[#e0e7ff] border border-indigo-100 rounded-2xl p-3.5 flex items-center justify-between cursor-pointer transition-all shadow-xs"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#4f46e5] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Need a hint?</p>
              <p className="text-[11px] text-slate-600">Ask the AI Tutor to break it down.</p>
            </div>
          </div>
          <ChevronRight className={`w-4 h-4 text-indigo-600 transition-transform ${showAiHint ? 'rotate-90' : ''}`} />
        </div>

        {/* Expandable AI Tutor Breakdown Drawer */}
        <AnimatePresence>
          {showAiHint && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="bg-white rounded-2xl p-4 border border-indigo-100 shadow-sm space-y-2.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-600">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AI Tutor Breakdown</span>
                </div>
                <div className="space-y-1.5 text-xs text-slate-700 font-sans leading-relaxed">
                  {question.aiBreakdown.map((step, i) => (
                    <p key={i} className="bg-slate-50 p-2 rounded-lg font-mono text-[11px]">
                      {step}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Answer Explanation once submitted */}
        {isSubmitted && selectedOption && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-2xl text-xs space-y-1.5 ${
              isCorrect ? 'bg-emerald-50 border border-emerald-200 text-emerald-900' : 'bg-rose-50 border border-rose-200 text-rose-900'
            }`}
          >
            <div className="font-bold flex items-center gap-1.5">
              {isCorrect ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <XCircle className="w-4 h-4 text-rose-600" />}
              <span>{isCorrect ? 'Excellent! Correct Solution' : 'Not quite. Here is why:'}</span>
            </div>
            <p className="leading-relaxed text-slate-700">
              {selectedOption.explanation}
            </p>
          </motion.div>
        )}

        {/* Submit or Next Button */}
        <div className="pt-2">
          {!isSubmitted ? (
            <button
              disabled={!selectedOptionId}
              onClick={handleSubmit}
              className={`w-full py-3.5 px-6 rounded-2xl font-bold text-sm transition-all cursor-pointer ${
                selectedOptionId
                  ? 'bg-[#3b38d8] hover:bg-[#322ebf] text-white shadow-md shadow-indigo-500/25 active:scale-[0.99]'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
            >
              Submit Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="w-full py-3.5 px-6 rounded-2xl bg-[#3b38d8] hover:bg-[#322ebf] text-white font-bold text-sm shadow-md shadow-indigo-500/25 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{currentQuestionIdx < quizQuestions.length - 1 ? 'Next Question' : 'View AI Path Analysis'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </main>
    </div>
  );
};
