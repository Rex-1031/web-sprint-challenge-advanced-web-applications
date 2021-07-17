//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in
import React from 'react';
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = (props)=>{
    const { component: Component, ...rest } = props

    return (
        <Route {...rest} render={(renderProps) => {
            if (localStorage.getItem("token")){
                return <Component {...renderProps} />;
            }else{
                return <Redirect to="/" />;
            }
        }} 
        />
    );
};