import { useLocalStorage } from "hook/useLocalStorage";
import { createContext, useEffect, useState } from "react";
import { QuizType, State } from "types";

export const Context = createContext<State | null>(null);

type ContextProviderProps = {
  children: React.ReactNode;
};

export const ContextApp = (props: ContextProviderProps) => {
  const [quizzes, setQuizzes] = useState<QuizType[]>([]);
  const [currentQuiz, setCurrentQuiz] = useLocalStorage<QuizType | null>(
    null,
    "currentQuiz"
  );

  const questions = currentQuiz ? currentQuiz.questions : [];

  const [score, setScore] = useLocalStorage<number>(0, "score");
  const [step, setStep] = useLocalStorage<number>(0, "step");
  const [isChecked, setIsChecked] = useLocalStorage<boolean>(
    false,
    "isChecked"
  );
  const [selectedAnswer, setSelectedAnswer] = useLocalStorage<string>(
    "",
    "selectedAnswer"
  );

  //_Load data:
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

  //_Actions:
  function selectQuiz(theme: string) {
    const quiz = quizzes.find((quiz) => quiz.title === theme);
    if (quiz) setCurrentQuiz(quiz);
  }

  const selectAnswer = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const checkAnswer = () => {
    if (selectedAnswer === questions[step]?.answer) {
      const updateScore = score + 1;
      setScore(updateScore);
    }
    setIsChecked(true);
  };

  const nextQuestion = () => {
    const updateStep = step + 1;
    setStep(updateStep);
    setSelectedAnswer("");
    setIsChecked(false);
  };

  const resetApp = () => {
    setScore(0);
    setStep(0);
    setCurrentQuiz(null);
    setSelectedAnswer("");
    setIsChecked(false);
  };

  const state: State = {
    quizzes,
    currentQuiz,
    currentQuestion: questions[step],
    step: step + 1,
    score,
    numberQuestion: questions.length,
    selectedAnswer,
    isChecked,
    selectQuiz,
    nextQuestion,
    checkAnswer,
    selectAnswer,
    resetApp,
  };

  return <Context.Provider value={state}>{props.children}</Context.Provider>;
};

/* function isQuestion(question: any): question is QuizType {
  return "answer" in question;
} */
