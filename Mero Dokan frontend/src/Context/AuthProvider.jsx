import { createContext, useEffect, useReducer, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const getToken = () => {
  const token = localStorage.getItem("token") || null;
  return {
    token: token,
  };
};
const initialState = getToken();

// action={type:"Login",payload:{token:"anjkdnfcjkdenckj"}}
// action={type:"Logout"}}

const cartReducer = (state, action) => {
  switch (action.type) {
    case "Login": {
      localStorage.setItem("token", action.payload.token);
      return { ...state, token: action.payload.token };
    }
    case "Logout": {
      localStorage.removeItem("token");
      return { ...state, token: null };
    }
    default: {
      return state;
    }
  }
};
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [state, dispatch] = useReducer(cartReducer, initialState);
  //   dispatch(45);
  // console.log(state.token);

  const getUserData = async () => {
    let res = await fetch("http://localhost:9000/api/getUser", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${state.token}`,
      },
    });
    res = await res.json();
    setUser(res);
  };
  useEffect(() => {
    getUserData();
  }, [state]);
  return (
    <AuthContext.Provider value={{ state, dispatch,user}}>
      {children}
    </AuthContext.Provider>
  );
};
