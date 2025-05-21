/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();
const initialState = {
  CartItems: [],
};

const CartReducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "ADD_TO_CART": {
      const isExist = state.CartItems.find((item) => {
        return item._id === action.payload._id;
      });
      if (isExist) {
        const updatedCart = state.CartItems.map((item) => {
          if (item._id === action.payload._id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
        return { ...state, CartItems: updatedCart };
      } else {
        // action.payload={name,price}
        const newCartItem = { ...action.payload, qty: 1 };
        const updatedCartItems = [...state.CartItems, newCartItem];
        alert(`${action.payload.name}, Added to cart`);
        return {
          ...state,
          CartItems: updatedCartItems,
        };
      }
    }
    case "Increment": {
      const updatedCart = state.CartItems.map((item) => {
        if (item._id === action.payload._id) {
          return { ...item, qty: item.qty + 1 };
        } else {
          return item;
        }
      });
      return {
        ...state,
        CartItems: updatedCart,
      };
    }
    case "Decrement": {
      const updatedCart = state.CartItems.map((item) => {
        if (item._id === action.payload._id && item.qty > 1) {
          return { ...item, qty: item.qty - 1 }; 
        } else {
          return item;
        }
      });
      return {
        ...state,
        CartItems: updatedCart,
      };
    }

    case "Delete": {
      const filteredItems = state.CartItems.filter((item) => {
        return item._id !== action.payload._id;
      });
      return {
        ...state,
        CartItems: filteredItems,
      };
    }

    case "ClearCart": {
      return { ...state, CartItems: [] };
    }

    default: {
      return state;
    }
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(CartReducer, initialState);
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};
