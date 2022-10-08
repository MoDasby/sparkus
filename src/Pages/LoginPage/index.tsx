import {LoginForm} from "../../components/LoginForm";
import './style.css';
import {Toast} from "../../components/Toast";

export const LoginPage = () => {
    return (
        <>
            <div className="login-wrapper">
                <Toast />
                <LoginForm />
            </div>
        </>
    )
}