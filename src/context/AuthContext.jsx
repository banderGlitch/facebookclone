import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";
import { getItem } from "../_services/_apiServices";
import { setItem } from '../_services/_apiServices';



const INITIAL_STATE = {
    user : getItem("user") || JSON.stringify(null) ,
    isFetching : false,
    error : false

}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({ children }) => {
    const [state , dispatch ] = useReducer(AuthReducer, INITIAL_STATE)
    console.log("state", state)

    useEffect(() => {
        setItem("user", state.user)
    },[state.user])

    return (
        <AuthContext.Provider
         value={{
            user: state.user,
            isFetching : state.isFetching,
            error: state.error,
            dispatch,
         }}
        >
            {children}
        </AuthContext.Provider>
    )
}


