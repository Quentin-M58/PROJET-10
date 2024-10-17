
import React, { useState } from "react";
import Input from "./Input.js";
import { useLogin } from '../hook/useLogin.js';

export default function Form() {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [rememberMe, setRememberMe] = useState(false);
        const { login, errorMessage } = useLogin();

        const formSubmit = async (event) => {
                event.preventDefault();
                await login(email, password, rememberMe);
        };

        return (
                <form onSubmit={formSubmit}>
                        <Input
                                id="username"
                                type="email"
                                value={email}
                                placeholder="email"
                                setter={setEmail} />
                        <Input
                                id="password"
                                type="password"
                                value={password}
                                placeholder="password"
                                setter={setPassword} />
                        <div className="input-remember">
                                <input type="checkbox"
                                        id="remember-me"
                                        checked={rememberMe}
                                        onChange={(event) => setRememberMe(event.target.checked)} />
                                <label>Remember me</label>
                        </div>
                        <button className="sign-in-button">Sign In</button>
                        {errorMessage && <p className='error-message'>{errorMessage}</p>}
                </form>
        );
}