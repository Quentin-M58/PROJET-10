import { loginFailed, loginSuccess } from '../redux/actions/auth.actions.jsx';
import Profiler from "./Profiler.js"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

export const Logger = async (email, password, rememberMe) => {
        const [errorMessage, setErrorMessage] = useState(null);
        const dispatch = useDispatch();
        const navigate = useNavigate();
        try {
                const response = await fetch("http://localhost:3001/api/v1/user/login", {
                        method: "POST",
                        headers: {
                                "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ email, password }),
                });
                if (response.ok) {
                        const data = await response.json();
                        /* 
                            Checking that the query response is indeed retrieved
                            console.log(data) 
                        */
                        const token = data.body.token;
                        dispatch(loginSuccess(token));
                        sessionStorage.setItem("token", token);
                        Profiler(dispatch);
                        navigate('/profile');
                        if (rememberMe) {
                                localStorage.setItem("token", token);
                        }
                } else {
                        const error = "Incorrect email/password"
                        dispatch(loginFailed(error));
                        setErrorMessage(error);
                }
        } catch (error) {
                console.error(error);
        }
};