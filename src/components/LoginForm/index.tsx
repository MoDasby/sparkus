import './style.css';
import {MouseEventHandler, useState} from "react";
import {useAuth} from "../../context/auth";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

export const LoginForm = () => {

    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const authContext = useAuth();
    const navigate = useNavigate();

    const handleLoginRequest: MouseEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault();

        if (credential.length === 0 || password.length === 0) {
            toast.error("Preencha todos os campos!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            })

            return;
        }

        authContext.Login(credential, password, (message) => {
            toast.error(`${message}`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
        }, () => {navigate("/")});
    }

    return (
       <form className="login-form">
           <h2>
               Sparkus
           </h2>

           <h2>
               Faça login ou crie uma conta
           </h2>

           <input
               placeholder="Usuário ou email"
               className="form-input"
               onChange={e => setCredential(e.target.value)}
               value={credential}
           />

           <input
               placeholder="Senha"
               className="form-input"
               onChange={e => setPassword(e.target.value)}
               value={password}
           />
           <div className="btn-wrapper">
               <button className="btn btn__secondary" >Criar Conta</button>
               <button type="submit" className="btn" onClick={handleLoginRequest}>Entrar</button>
           </div>

       </form>
    )
}