import { createContext } from "react";

const initState = {
  todos: [],
  lists: [],
};

export default createContext(initState);
