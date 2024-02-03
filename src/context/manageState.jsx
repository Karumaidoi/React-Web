/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

// Creating the app State
const AppState = createContext();

// Initail State
const initialState = {
  currentProduct: {},
  cartNumber: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { ...state, currentProduct: action.payload };
    case "addToCart":
      return { ...state, cartNumber: state.cartNumber + 1 };
  }
}

function AppProvider({ children }) {
  const [{ currentProduct }, dispatch] = useReducer(reducer, initialState);

  // Function to set current product
  function setCurrentProduct(currentProduct) {
    dispatch({ type: "add", payload: currentProduct });
  }

  // Add to Likes
  function addCounter() {
    dispatch({ type: "addToCart" });
  }

  // Add To CART

  return (
    <AppState.Provider
      value={{ currentProduct, setCurrentProduct, addCounter }}
    >
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
