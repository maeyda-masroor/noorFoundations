import { createContext } from "react";

export const LocaleContext = createContext({
  // Defaults that we'll override in a moment. 
  locale: "",
  setLocale: () => {},
});