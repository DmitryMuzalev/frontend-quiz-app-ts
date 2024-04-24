export type State = {
  quizzes: QuizType[];
  selectQuiz: (value: string) => void;
  currentQuiz: QuizType | null;
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
