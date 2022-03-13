import { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

const huluAppContext = createContext();

export const HuluContext = ({ children }) => {
    return (
        <huluAppContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </huluAppContext.Provider>
    );
};

// use The Context
export const useHuluContext = () => {
    return useContext(huluAppContext);
};

/*
TODO test this extenstion.
* test this extension.
! test this extension.
? ezkjfrzfkhfrz
// zekjekfhbfhr
 */
