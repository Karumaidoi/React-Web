/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

// Creating the app State
const AppState = createContext();

// Initail State
const initialState = {
  currentProduct: {},
  likesNumber: 0,
  cartNumber: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { ...state, currentProduct: action.payload };
    case "addLikes":
      return { ...state, likesNumber: state.cartNumber + 1 };
    case "addToCart":
      return { ...state, cartNumber: state.cartNumber + 1 };
  }
}

function AppProvider({ children }) {
  const [{ currentProduct, cartNumber, likesNumber }, dispatch] = useReducer(
    reducer,
    initialState
  );

  // Function to set current product
  function setCurrentProduct(currentProduct) {
    dispatch({ type: "add", payload: currentProduct });
  }

  // Add to Likes
  function addCounter() {
    dispatch({ type: "addLikes" });
  }

  // Add To CART
  function addToCart() {
    dispatch({ type: "addToCart" });
  }

  return (
    <AppState.Provider
      value={{
        currentProduct,
        setCurrentProduct,
        addCounter,
        addToCart,
        cartNumber,
        likesNumber,
      }}
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
