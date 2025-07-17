import { createContext, useEffect, useState } from "react";

//_Types:
export type Quiz = {
  title: string;
  icon: string;
  questions: Question[];
};

export type Question = {
  question: string;
  options: string[];
  answer: string;
};

export type Screen = "menu" | "quiz" | "results";

export type State = {
  quizzes: Quiz[];
  isLoading: boolean;
  currentScreen: Screen;
  handlerSelectQuiz: (title: string) => void;
};
//

type Props = {
  children: React.ReactNode;
};

export const Context = createContext<State | null>(null);

export const ContextApp = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [currentScreen, setCurrentScreen] = useState<Screen>("menu"); // 'quiz' | 'results'

  const handlerSelectQuiz = (title: string) => {
    setCurrentScreen("quiz");
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("./data.json");
      if (!response.ok) {
        throw Error(
          `Failed to load quizzes. HTTP error! status: ${response.status}`
        );
      } else {
        setIsLoading(false);
        const data = (await response.json()) as { quizzes: Quiz[] };
        setQuizzes(data.quizzes);
      }
    };
    fetchData();
  }, []);

  const state: State = {
    quizzes,
    isLoading,
    currentScreen,
    handlerSelectQuiz,
  };

  return <Context.Provider value={state}>{children}</Context.Provider>;
};
