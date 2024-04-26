export type State = {
  quizzes: QuizType[];
  currentQuiz: QuizType | null;
  currentQuestion: QuestionType;
  step: number;
  score: number;
  numberQuestion: number;
  selectedAnswer: string;
  isChecked: boolean;
  selectQuiz: (value: string) => void;
  selectAnswer: (value: string) => void;
  nextQuestion: () => void;
  checkAnswer: () => void;
  resetApp: () => void;
};

export type QuizType = {
  title: string;
  icon: string;
  questions: QuestionType[];
};

export type QuestionType = {
  question: string;
  options: string[];
  answer: string;
};
