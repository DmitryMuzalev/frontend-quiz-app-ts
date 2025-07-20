import { useContextApp } from "./useContextApp";

export const useCurrentQuiz = () => {
  const { currentQuiz } = useContextApp();
  if (!currentQuiz) {
    throw new Error("useCurrentQuiz must be used only when quiz is selected");
  }
  return currentQuiz;
};
