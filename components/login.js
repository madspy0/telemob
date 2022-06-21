import React, {useEffect, useState} from 'react';
import {getSecureUser} from "../util/auth";
import {List} from "../list"
import {LoginForm} from "../login_form";

export const Login = () => {

    useEffect(() => {
        getSecureUser().then(r => setCurrentUser(r));
    }, []);
    const [currentUser, setCurrentUser] = useState(null);

    let out;
    console.log('user', currentUser)
    if (currentUser) {
        out = List(currentUser, setCurrentUser)
    } else {
        out = LoginForm(currentUser, setCurrentUser)
    }

    return (out)
}

