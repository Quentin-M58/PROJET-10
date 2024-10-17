
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginFailed, loginSuccess } from '../redux/actions/auth.actions.jsx';
import Profiler from "../tools/Profiler.js";

export const useLogin = () => {
        const [errorMessage, setErrorMessage] = useState(null);
        const dispatch = useDispatch();
        const navigate = useNavigate();

        const login = async (email, password, rememberMe) => {
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
                                const token = data.body.token;
                                dispatch(loginSuccess(token));
                                sessionStorage.setItem("token", token);
                                Profiler(dispatch);
                                navigate('/profile');
                                if (rememberMe) {
                                        localStorage.setItem("token", token);
                                }
                        } else {
                                const error = "Incorrect email/password";
                                dispatch(loginFailed(error));
                                setErrorMessage(error);
                        }
                } catch (error) {
                        console.error(error);
                        setErrorMessage("An error occurred. Please try again.");
                }
        };

        return { login, errorMessage };
};