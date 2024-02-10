import { createContext, useContext } from "react";

export const authContext = createContext();


export const AuthProvider = ({children})=>{

    const setToken = (token)=>{
        return localStorage.setItem("jwt-token",token)
    }
    return <authContext.Provider value={{setToken}}>
        {children}
    </authContext.Provider>
}

export const useAuth = ()=>{
    return useContext(authContext)
}