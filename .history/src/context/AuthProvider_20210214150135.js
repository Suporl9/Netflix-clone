import React, { useContext, useEffect, useState } from 'react'
import {auth} from "../firebase"
const AuthContext = React.createContext();
export function useAuth(){
    return useContext(AuthContext)
}

function AuthProvider() {
    const [currentuser,setCurrentUser] = useState();
    useEffect(()=>{
        const Unsubscribe = auth.onAuthStateChanged((user=> {
            setCurrentUser(user);
            return Unsubscribe
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

