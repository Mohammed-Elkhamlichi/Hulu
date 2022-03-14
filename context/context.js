import { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

export const huluContext = createContext();

export const HuluContext = ({ children }) => {
    return (
        <huluContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </huluContext.Provider>
    );
};
