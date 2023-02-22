import React from 'react';
import Login from '../pages/Login';

export const RequireAuth = ({Component}) => {
    if (!localStorage.getItem("tknData")) {
        return <Login />
    }else{
        return <Component />
    }
}

export const UserAuth = ({Component}) => {
    if (!localStorage.getItem("tknData")) {
        return <Component />
    }
}