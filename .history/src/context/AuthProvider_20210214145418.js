import React, { useContext } from 'react'
const AuthContext = React.createContext();
export function useAuth(){
    return useContext(AuthContext)
}

function AuthProvider() {
    const 

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

