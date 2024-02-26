import React, { createContext, useContext, useState } from "react";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [apiUrl, setApiUrl] = useState("http://localhost:5000/games");

  return (
    <ApiContext.Provider value={{ apiUrl, setApiUrl }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  return useContext(ApiContext);
};
