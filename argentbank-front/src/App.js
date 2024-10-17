import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { useSelector } from 'react-redux';
import './style/main.scss';
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Profile from "./pages/Profile.js";
import Error from "./pages/Error.js";
import Header from "./containers/Header.js"
import Footer from "./containers/Footer.js"


import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

function App() {
  const isConnected = useSelector((state) => state.auth.isConnected);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/acceuil" />} />
        <Route path="acceuil" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path='profile' element={isConnected ? <Profile /> : <Navigate to="/login" />}/>
        <Route path="/404" element={<Error />} />
        <Route path="/*" element={<Navigate replace to="/404" />} />
      </Routes>
      <Footer />
    </BrowserRouter >
  );
}

export default App;
library.add(fab, fas, far)