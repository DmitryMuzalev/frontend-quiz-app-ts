import { createContext } from "react";
import { State } from "types";

export const Context = createContext<State | null>(null);

type ContextProviderProps = {
  children: React.ReactNode;
};

export const ContextApp = (props: ContextProviderProps) => {
  const state: State = {};
  return <Context.Provider value={state}>{props.children}</Context.Provider>;
};
