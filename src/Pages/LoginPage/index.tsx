import {LoginForm} from "../../components/LoginForm";
import Navbar from "../../components/Navbar";
import './style.css';

export const LoginPage = () => {
    return (
        <>
            <Navbar />
            <div className="login-wrapper">
                <LoginForm />
            </div>
        </>
    )
}