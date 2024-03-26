import { Context } from "hoc/Context";
import { useContext } from "react";
import { State } from "types";

export const useContextApp = (): State => {
  const currentContext = useContext(Context);
  if (!currentContext) {
    throw new Error("currentContext has to be used with in <Context.Provider>");
  }
  return currentContext;
};
