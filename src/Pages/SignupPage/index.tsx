import { SignupForm } from "../../components/SignupForm"
import { Toast } from "../../components/Toast"
import './style.css'

export const SignupPage = () => {
    return (
        <div className="signup-wrapper">
            <Toast />
            <SignupForm />
        </div>
    )
}