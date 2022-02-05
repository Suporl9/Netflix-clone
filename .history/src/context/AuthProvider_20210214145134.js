import React from 'react'
const AuthContext = React.createContext();
function useAuth()
{}

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
