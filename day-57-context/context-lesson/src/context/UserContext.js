import { createContext, useDebugValue } from "react";

const UserContext = createContext(null);

// provider
//suu xxk bj bolno . irgeded suu hiiluuldeg

const UserProvider = ({ children }) => {
  const userName = "sine suu";
  return (
    <UserContext.Provider value={userName}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserProvider };
