import React, { createContext, useContext, useState } from 'react';

const CustomContext = createContext();

export function useCustomContext() {
  const contextValue = useContext(CustomContext);
  if (!contextValue) {
    throw new Error("useCustomContext must be used within a CustomContextProvider");
  }
  return contextValue;
}

export function CustomContextProvider({ children }) {
  const [active, setActive] = useState("Dashboard");
  const [user , setUser] = useState("")

  const [showPanel, setShowPanel] = useState(false);
  const [panelType, setPanelType] = useState(null);
  

  return (
    <CustomContext.Provider value={{ active, setActive , user , setUser,showPanel, setShowPanel , panelType, setPanelType }}>
      {children}
    </CustomContext.Provider>
  );
}
