import { createContext, useEffect, useState } from "react";
import { QuestionType, QuizType, State } from "types";

import data from "data.json";

export const Context = createContext<State | null>(null);

type ContextProviderProps = {
  children: React.ReactNode;
};

export const ContextApp = (props: ContextProviderProps) => {
  const quizzes: QuizType[] = data.quizzes;
  const [currentQuiz, setCurrentQuiz] = useState<QuizType | null>(null);
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [indexCurrentQuestion, setIndexCurrentQuestion] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionType | null>(
    null
  );

  const [answer, setAnswer] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    currentQuiz ? setQuestions(currentQuiz.questions) : setQuestions([]);
  }, [currentQuiz]);

  useEffect(() => {
    setCurrentQuestion(questions[indexCurrentQuestion]);
  }, [indexCurrentQuestion, questions]);

  //_Actions:
  const selectQuiz = (name: string) => {
    const quiz = quizzes.find((q) => q.title === name);
    if (quiz) {
      setCurrentQuiz(quiz);
    }
  };

  const selectAnswer = (text: string) => setAnswer(text);

  const resetApp = () => {
    setCurrentQuiz(null);
  };

  const nextQuestion = () => {
    setIndexCurrentQuestion((prev) => prev + 1);
    setAnswer("");
    setIsChecked(false);
  };

  const checkAnswer = () => setIsChecked(true);

  const state: State = {
    quizzes,
    currentQuiz,
    indexQuestion: indexCurrentQuestion + 1,
    maxIndexQuestion: questions.length,
    currentQuestion,
    isChecked,
    answer,
    checkAnswer,
    selectQuiz,
    resetApp,
    nextQuestion,
    selectAnswer,
  };
  return <Context.Provider value={state}>{props.children}</Context.Provider>;
};
