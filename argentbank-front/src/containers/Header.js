import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { logout } from '../redux/actions/auth.actions';
import logo from "../images/argentBankLogo.png"


export default function Header() {
        const isConnected = useSelector((state) => state.auth.token);
        const username = useSelector((state) => state.user.userData.username);
        const dispatch = useDispatch();
        const logoutpage = () => {
                dispatch(logout());
                sessionStorage.clear();
                localStorage.clear();
        }

        return (
                <nav className="main-nav">
                        <Link to="/" className="main-nav-logo">
                                <img
                                        src={logo}
                                        alt="Argent Bank Logo"
                                        className="main-nav-logo-image">
                                </img>
                                <h1 className="sr-only">Argent Bank</h1>
                        </Link>
                        {isConnected ? (
                                <div className='connected'>
                                        <div className="profil">
                                                <Link to='/profile'>
                                                        <FontAwesomeIcon icon='fa-solid fa-2x fa-circle-user' />
                                                        <p>{username}</p>
                                                </Link>
                                        </div>
                                        <div className="logout">
                                                <Link to="/" onClick={logoutpage}> 
                                                        <p> Sign out </p>
                                                        <FontAwesomeIcon icon='fa-solid fa-arrow-right-from-bracket' />
                                                </Link>
                                        </div>
                                </div>
                        ) : (
                                <div className='connected-no'>
                                        <Link to="/login" className="main-nav-item">
                                                <FontAwesomeIcon icon="fa-solid fa-circle-user" />
                                                &nbsp;Sign In
                                        </Link>
                                </div>
                        )}
                </nav>
        );
}

