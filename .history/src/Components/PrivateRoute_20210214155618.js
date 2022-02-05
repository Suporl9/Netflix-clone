import React from 'react'
import { useAuth } from '../context/AuthProvider'
import {} from "rea"

function PrivateRoute({component: Component,...rest}) {
    const {currentuser} = useAuth()
    return (
     <Route></Route>
    )
}

export default PrivateRoute
