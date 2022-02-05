import React from 'react'
import { useAuth } from '../context/AuthProvider'
import {Route,Redirect} from "react-router-dom"

function PrivateRoute({component: Component,...rest}) {
    const {currentuser} = useAuth()
    return (
     <Route {...rest} render={props=>{
         return {}
     }}/>
    )
}

export default PrivateRoute
