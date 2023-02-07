import { createContext } from "react";
import { DATA } from "../data/data";

const BookContext = createContext(null);
const BookContextProvider = ({ children }) => {
  const bookDATA = DATA;
  return (
    <BookContext.Provider value={bookDATA}>{children}</BookContext.Provider>
  );
};

export { BookContext, BookContextProvider };
