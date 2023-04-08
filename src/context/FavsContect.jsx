import React, { createContext, useReducer } from "react";

export const FavsContext = createContext({});

const handleDispatch = (state, action) => {
  switch (action.type) {
    case "ADD":
      sessionStorage.setItem("token", JSON.stringify([...state.data, action.payload]));
      return {
        ...state,
        data: [...state.data, action.payload]
      };
      case "TAKE":
        const resultado = state.data.filter(favs => favs.id !== action.payload.id)
        sessionStorage.setItem("token", JSON.stringify(resultado));
        return {
          ...state,
          data: resultado
        };
    default:
      return {
        ...state,
      };
  }
};

const FavsContectProvider = ({ children }) => {
  const initialState = { data: JSON.parse(sessionStorage.getItem("token")) ?? [] };
  const [state, dispatch] = useReducer(handleDispatch, initialState);
  const State = { state, dispatch };


  return (
    <FavsContext.Provider value={State}>
    {children}
    </FavsContext.Provider>
  );
}

export default FavsContectProvider;
