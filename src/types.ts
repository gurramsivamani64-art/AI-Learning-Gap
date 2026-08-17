export type ScreenType = 
  | 'landing'
  | 'home'
  | 'quiz'
  | 'ai-path'
  | 'journey'
  | 'subjects'
  | 'analytics';

export interface UserProfile {
  name: string;
  avatarUrl: string;
  overallMastery: number;
  streakDays: number;
  gradeLevel: string;
  currentSubject: string;
}

export interface RecommendedSession {
  topic: string;
  subject: string;
  reason: string;
  estimatedMinutes: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface SubjectItem {
  id: string;
  name: string;
  iconName: string;
  currentTopic: string;
  masteryPercentage: number;
  color: string;
  category: string;
  totalModules: number;
  completedModules: number;
}

export interface ConceptTag {
  id: string;
  name: string;
  category: 'strong' | 'needs-review';
  mastery: number;
  subject: string;
}

export interface QuizOption {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
  isCorrect: boolean;
  explanation?: string;
}

export interface QuizQuestion {
  id: number;
  questionNumber: number;
  totalQuestions: number;
  topic: string;
  prompt: string;
  equation: string;
  instruction: string;
  options: QuizOption[];
  hint: string;
  aiBreakdown: string[];
}

export interface SkillNode {
  id: string;
  name: string;
  level: number;
  status: 'strong' | 'partially-understood' | 'weak' | 'root';
  mastery: number;
  x: number;
  y: number;
  parentId?: string;
}

export interface JourneyStep {
  stepNumber: number;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'locked' | 'milestone';
  rating?: number; // e.g. 3 stars
  progress?: number; // e.g. 40%
  actionText?: string;
}
