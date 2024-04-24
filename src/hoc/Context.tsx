import { createContext, useEffect, useState } from "react";
import { QuizType, State } from "types";

export const Context = createContext<State | null>(null);

type ContextProviderProps = {
  children: React.ReactNode;
};

export const ContextApp = (props: ContextProviderProps) => {
  const [quizzes, setQuizzes] = useState<QuizType[]>([]);
  const [currentQuiz, setCurrentQuiz] = useState<QuizType | null>(null);

  useEffect(() => {
    async function getQuizzesData() {
      try {
        const response = await fetch("./data.json");
        if (response.ok) {
          const data = await response.json();
          const quizzes: QuizType[] = data.quizzes;
          setQuizzes(quizzes);
        } else {
          throw new Error("Data retrieval error!");
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        }
        console.log(error);
      }
    }
    getQuizzesData();
  }, []);

  function selectQuiz(theme: string) {
    const quiz = quizzes.find((quiz) => quiz.title === theme);
    if (quiz) setCurrentQuiz(quiz);
  }

  const state: State = {
    quizzes,
    selectQuiz,
    currentQuiz,
  };

  return <Context.Provider value={state}>{props.children}</Context.Provider>;
};
