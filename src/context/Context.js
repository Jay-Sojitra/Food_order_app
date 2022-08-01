import React, { useReducer, useContext, createContext } from "react";
import { Data } from "../data/Data";


import { Reducer } from "./Reducers";

const CartStateContext = createContext();



export const CartProvider = ({ children }) => {

  
  const [state, dispatch] = useReducer(Reducer, {
    products :Data,
    cart :[]
  });

  return (
    
      <CartStateContext.Provider value={{state, dispatch}}>
        {children}
      </CartStateContext.Provider>
   
  );
};

export const useCart = () => useContext(CartStateContext);
