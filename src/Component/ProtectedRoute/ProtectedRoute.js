import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import {auth} from "../../fireBase.config"

export default function ProtectedRoute({component: Component,...rest}) {
    
        return (
            <Route {...rest}  render={(props) => {
                if (auth.currentUser) {
                  return <Component {...props} />
                }
                 else {
                    return (
                      <Redirect
                        to={{
                          pathname: "/sign-in",
                          state: {
                            from: props.location,
                          },
                        }}/>)
                    }
                }}/>
          
        )
    
}
