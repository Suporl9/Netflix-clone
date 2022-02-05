import React, { useContext } from 'react'
const AuthContext = React.createContext();
export function useAuth(){
    return useContext(AuthContext)
}

function AuthProvider() {
    const [currentuser,setCurrent]

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

