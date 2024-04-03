export type State = {
  quizzes: QuizType[];
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
