import {LoginForm} from "../../components/LoginForm";
import Navbar from "../../components/Navbar";
import './style.css';
import React from "react";

export const LoginPage = () => {
    return (
        <>
            <div className="login-wrapper">
                <LoginForm />
            </div>
        </>
    )
}