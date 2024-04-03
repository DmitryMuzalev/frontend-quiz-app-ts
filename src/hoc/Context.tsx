import { createContext } from "react";
import { QuizType, State } from "types";

import data from "data.json";

export const Context = createContext<State | null>(null);

type ContextProviderProps = {
  children: React.ReactNode;
};

export const ContextApp = (props: ContextProviderProps) => {
  const quizzes: QuizType[] = data.quizzes;

  const state: State = { quizzes };
  return <Context.Provider value={state}>{props.children}</Context.Provider>;
};
