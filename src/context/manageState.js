/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

// Creating the app State
const AppState = createContext();

// Initail State
const initialState = {
  currentProduct: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { ...state, currentProduct: action.payload };
  }
}

function AppProvider({ children }) {
  const [{ currentProduct }, dispatch] = useReducer(reducer, initialState);

  function setCurrentProduct(currentProduct) {
    dispatch({ type: "add", payload: currentProduct });
  }

  return (
    <AppState.Provider value={{ currentProduct, setCurrentProduct }}>
      {children}
    </AppState.Provider>
  );
}

// Check if the Provider is being used in the wrong context
function useAppState() {
  const context = useContext(AppState);
  if (context === undefined)
    throw new Error("Context used in a wrong Provider");
  return context;
}

export { AppProvider, useAppState };
