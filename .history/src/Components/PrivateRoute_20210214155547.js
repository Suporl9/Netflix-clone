import React from 'react'
import { useAuth } from '../context/AuthProvider'

function PrivateRoute({component: Component,...rest}) {
    const {currentuser} = useAuth()
    return (
     
    )
}

export default PrivateRoute
