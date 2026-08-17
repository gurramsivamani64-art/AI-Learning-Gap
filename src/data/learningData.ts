import { UserProfile, RecommendedSession, SubjectItem, ConceptTag, QuizQuestion, SkillNode, JourneyStep } from '../types';

export const currentUser: UserProfile = {
  name: 'Alex',
  avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop', // Matching Image 9.jpeg young female professional/student in library blazer
  overallMastery: 68,
  streakDays: 7,
  gradeLevel: 'Grade 11 Honors',
  currentSubject: 'Mathematics - Advanced Algebra',
};

export const recommendedSession: RecommendedSession = {
  topic: 'Quadratic Equations',
  subject: 'MATHEMATICS',
  reason: 'Based on your last assessment, brushing up on factoring will help solidify your algebraic foundation.',
  estimatedMinutes: 12,
  difficulty: 'Intermediate',
};

export const subjectsList: SubjectItem[] = [
  {
    id: 'math',
    name: 'Mathematics',
    iconName: 'Calculator',
    currentTopic: 'Advanced Algebra',
    masteryPercentage: 85,
    color: '#4f46e5',
    category: 'STEM',
    totalModules: 14,
    completedModules: 12,
  },
  {
    id: 'physics',
    name: 'Physics',
    iconName: 'Rocket',
    currentTopic: 'Kinematics & Dynamics',
    masteryPercentage: 62,
    color: '#0891b2',
    category: 'STEM',
    totalModules: 10,
    completedModules: 6,
  },
  {
    id: 'literature',
    name: 'English Literature',
    iconName: 'BookOpen',
    currentTopic: 'Essay Structure & Analysis',
    masteryPercentage: 78,
    color: '#7c3aed',
    category: 'Humanities',
    totalModules: 8,
    completedModules: 6,
  },
  {
    id: 'chem',
    name: 'Chemistry',
    iconName: 'FlaskConical',
    currentTopic: 'Stoichiometry & Reactions',
    masteryPercentage: 45,
    color: '#059669',
    category: 'STEM',
    totalModules: 12,
    completedModules: 5,
  }
];

export const conceptOverview: ConceptTag[] = [
  { id: '1', name: "Newton's Laws", category: 'strong', mastery: 94, subject: 'Physics' },
  { id: '2', name: 'Essay Structure', category: 'strong', mastery: 88, subject: 'Literature' },
  { id: '3', name: 'Linear Equations', category: 'strong', mastery: 82, subject: 'Mathematics' },
  { id: '4', name: 'Trigonometry', category: 'needs-review', mastery: 48, subject: 'Mathematics' },
  { id: '5', name: 'Kinematics', category: 'needs-review', mastery: 52, subject: 'Physics' },
  { id: '6', name: 'Factorization', category: 'needs-review', mastery: 45, subject: 'Mathematics' },
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 4,
    questionNumber: 4,
    totalQuestions: 15,
    topic: 'Quadratic Equations',
    prompt: 'Solve for x:',
    equation: '3x² - 12x = 0',
    instruction: 'Select the correct roots for the equation above.',
    options: [
      { id: 'A', text: 'x = 0, x = 4', isCorrect: true, explanation: 'Factoring out 3x gives 3x(x - 4) = 0. Therefore 3x = 0 (x = 0) or x - 4 = 0 (x = 4).' },
      { id: 'B', text: 'x = 4, x = -4', isCorrect: false, explanation: 'Remember that factoring out 3x produces one linear factor x = 0 and another x - 4 = 0.' },
      { id: 'C', text: 'x = 0, x = -4', isCorrect: false, explanation: 'When moving -12 to the other side or factoring x - 4 = 0, we get positive 4, not -4.' },
      { id: 'D', text: 'x = 3, x = 12', isCorrect: false, explanation: '3 and 12 are the coefficients, not the root solutions of the equation.' },
    ],
    hint: 'Look for common factors. Can you factor out 3x from both terms?',
    aiBreakdown: [
      'Step 1: Identify the Greatest Common Factor (GCF) in 3x² and -12x, which is 3x.',
      'Step 2: Factor out 3x: 3x(x - 4) = 0',
      'Step 3: Apply the Zero Product Property:',
      '  • Either 3x = 0  ⟹  x = 0',
      '  • Or x - 4 = 0  ⟹  x = 4',
      'Conclusion: The roots are x = 0 and x = 4.'
    ]
  },
  {
    id: 5,
    questionNumber: 5,
    totalQuestions: 15,
    topic: 'Quadratic Equations',
    prompt: 'Solve by factoring:',
    equation: 'x² - 5x + 6 = 0',
    instruction: 'Find the two real solutions.',
    options: [
      { id: 'A', text: 'x = 2, x = 3', isCorrect: true, explanation: '(x - 2)(x - 3) = 0 gives x = 2 and x = 3.' },
      { id: 'B', text: 'x = -2, x = -3', isCorrect: false, explanation: 'The factors are (x - 2) and (x - 3), so roots are positive 2 and 3.' },
      { id: 'C', text: 'x = 1, x = 6', isCorrect: false, explanation: '1 and 6 multiply to 6, but 1 + 6 = 7, not -5.' },
      { id: 'D', text: 'x = -1, x = -6', isCorrect: false, explanation: '-1 * -6 = 6, but sum is -7.' },
    ],
    hint: 'Find two numbers that multiply to +6 and add up to -5.',
    aiBreakdown: [
      'Step 1: Look for two integers whose product is +6 and sum is -5.',
      'Step 2: -2 and -3 multiply to +6 and add to -5.',
      'Step 3: Write in factored form: (x - 2)(x - 3) = 0.',
      'Step 4: Set each factor to zero: x = 2 or x = 3.'
    ]
  }
];

export const mathSkillNodes: SkillNode[] = [
  { id: 'algebra', name: 'Algebra', level: 1, status: 'root', mastery: 72, x: 50, y: 15 },
  { id: 'linear', name: 'Linear Eq.', level: 2, status: 'strong', mastery: 82, x: 26, y: 45, parentId: 'algebra' },
  { id: 'identities', name: 'Identities', level: 2, status: 'partially-understood', mastery: 55, x: 74, y: 45, parentId: 'algebra' },
  { id: 'factorization', name: 'Factorization', level: 3, status: 'weak', mastery: 45, x: 38, y: 78, parentId: 'identities' },
  { id: 'quadratics', name: 'Quadratics', level: 3, status: 'weak', mastery: 38, x: 62, y: 78, parentId: 'identities' },
];

export const mathJourneySteps: JourneyStep[] = [
  {
    stepNumber: 1,
    title: 'Algebra Basics',
    description: 'Variables, expressions, and the fundamental building...',
    status: 'completed',
    rating: 3,
    actionText: 'Review'
  },
  {
    stepNumber: 2,
    title: 'Algebraic Identities',
    description: 'Mastering expanding and factorizing common...',
    status: 'current',
    progress: 40,
    actionText: 'Continue →'
  },
  {
    stepNumber: 3,
    title: 'Factorization',
    description: 'Breaking down complex expressions into simpler...',
    status: 'locked'
  },
  {
    stepNumber: 4,
    title: 'Quadratic Equations',
    description: 'Solving for x when powers are involved.',
    status: 'locked'
  },
  {
    stepNumber: 5,
    title: 'Module Reassessment',
    description: 'Comprehensive mastery evaluation and badge unlock.',
    status: 'milestone'
  }
];
