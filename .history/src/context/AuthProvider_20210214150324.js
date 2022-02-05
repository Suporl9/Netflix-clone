import React, { useContext, useEffect, useState } from 'react'
import {auth} from "../firebase"
const AuthContext = React.createContext();
export function useAuth(){
    return useContext(AuthContext)
}

function AuthProvider() {
    const [currentuser,setCurrentUser] = useState();
    function signup(email,password){
        return auth.createUserWithEmailAndPassword(email)
    }


    useEffect(()=>{
        const Unsubscribe = auth.onAuthStateChanged((user=> {
            setCurrentUser(user);
            return Unsubscribe;   //return to remove unneccesary behavior or prevent unnecessary memory leakage

        }))
    },[])

    const value={
currentuser
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
