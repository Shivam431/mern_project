import { createContext, useContext, useState } from "react";

export const authContext = createContext();


export const AuthProvider = ({children})=>{

    const [token,storeToken] = useState(localStorage.getItem('jwt-token'));

    const setToken = (token)=>{
        storeToken(token);
        return localStorage.setItem("jwt-token",token)
    }

    const logoutUser = ()=>{
        storeToken("");
        localStorage.removeItem('jwt-token');
    }

    const isLoggedIn= !!token;

    console.log("token ",isLoggedIn);
    return <authContext.Provider value={{setToken,logoutUser,isLoggedIn}}>
        {children}
    </authContext.Provider>
}

export const useAuth = ()=>{
    return useContext(authContext)
}