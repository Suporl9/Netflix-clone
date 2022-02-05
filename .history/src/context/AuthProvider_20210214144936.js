import React from 'react'
const AuthContext = React.createContext();

function AuthProvider() {
    return (
        <AuthContext.Provider value={value}>

        </AuthContext.Provider>
    )
}

export default AuthProvider
