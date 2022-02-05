import React, { useContext } from 'react'
const AuthContext = React.createContext();
function useAuth(){
    return useContext(AuthContext)
}

function AuthProvider() {

    const value={

    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
export useAuth
