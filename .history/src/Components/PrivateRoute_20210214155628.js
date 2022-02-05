import React from 'react'
import { useAuth } from '../context/AuthProvider'
import {Route} from "react-router-dom"

function PrivateRoute({component: Component,...rest}) {
    const {currentuser} = useAuth()
    return (
     <Route></Route>
    )
}

export default PrivateRoute
