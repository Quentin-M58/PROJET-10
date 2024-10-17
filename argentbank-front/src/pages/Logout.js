import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { logout } from '../redux/actions/auth.actions';


export default function Logout() {
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const logouter = () => {
                dispatch(logout());
                sessionStorage.clear();
                localStorage.clear();
                navigate('/');
        }
        setTimeout(logouter, 1000)
        return (
                <div className="loggout">
                        <main className="Errorcontent">
                                <h1>En cours de Déconnexion </h1>
                                <h2>Au revoir. À bientot.</h2>
                        </main>
                </div>
        );
}