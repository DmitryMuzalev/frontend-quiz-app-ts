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
  score: number;
  quizzes: Quiz[];
  isLoading: boolean;
  currentQuiz: Quiz | null;
  currentScreen: Screen;
  handlerSelectQuiz: (title: string) => void;
  handleShowResults: () => void;
  handelResetGame: () => void;
  incrementScore: () => void;
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
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);

  const [score, setScore] = useState(0);

  const handlerSelectQuiz = (title: string) => {
    const selectedQuiz = quizzes.find((quiz) => quiz.title === title);
    if (selectedQuiz) {
      setCurrentQuiz(selectedQuiz);
      setCurrentScreen("quiz");
    }
  };

  const handleShowResults = () => {
    setCurrentScreen("results");
  };

  const handelResetGame = () => {
    setScore(0);
    setCurrentQuiz(null);
    setCurrentScreen("menu");
  };

  const incrementScore = () => {
    setScore((prevScoreValue) => prevScoreValue + 1);
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
    score,
    quizzes,
    isLoading,
    currentScreen,
    currentQuiz,
    handlerSelectQuiz,
    handleShowResults,
    handelResetGame,
    incrementScore,
  };

  return <Context.Provider value={state}>{children}</Context.Provider>;
};
