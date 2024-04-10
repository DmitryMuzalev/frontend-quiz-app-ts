export type State = {
  quizzes: QuizType[];
  currentQuiz: QuizType | null;
  indexQuestion: number;
  maxIndexQuestion: number;
  currentQuestion: QuestionType | null;
  isChecked: boolean;
  answer: string;
  selectQuiz: (value: string) => void;
  selectAnswer: (value: string) => void;
  resetApp: () => void;
  nextQuestion: () => void;
  checkAnswer: () => void;
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
