import {useState, MouseEventHandler, useRef, ChangeEventHandler} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/auth';
import { api } from '../../service/api';
import { UserData } from '../../types/userData';
import './style.css'

export const SignupForm = () => {

    const [name, setName] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    let iconPath = `https://avatars.dicebear.com/api/identicon/${username}.svg`;

    const authContext = useAuth();
    const navigate = useNavigate();
    const [provisoryIconPath, setProvisoryIconPath] = useState<string>(`/default-avatar.jpg`);
    const [imageFile, setImageFile] = useState<File>();

    const inputRef = useRef<HTMLInputElement>(null);

    const handleSignupRequest: MouseEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault();

        if (username.length === 0 || name.length === 0 || email.length === 0 || password.length === 0) {
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

        if (!validateEmail(email)) {
            toast.error("Email inválido!", {
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

        if (imageFile) {
            const formData = new FormData();
            formData.append('file', imageFile);

            const res = await api.post("/image/upload", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            iconPath = res.data.path;
        }

        authContext.Signup({
            name: name,
            username: username,
            email: email,
            password: password,
            icon_path: iconPath
        }, (message: string) => {
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
        }, () => {navigate("/")})
};

    const handleFileChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        e.preventDefault();

        const image = e.target.files![0];

        if (image) {
            setImageFile(image);
            setProvisoryIconPath(URL.createObjectURL(image));

        }
    }

    return (
        <form className="form">
            <h2>
               Sparkus
           </h2>

           <h2>
               Faça login ou crie uma conta
           </h2>

            <div className="form-input__picture">
                <div className="picture" onClick={() => inputRef.current?.click()}>
                    <img src={provisoryIconPath} className="profile-picture" alt='adicione uma foto de perfil' />
                    <div>
                        <i className="uil uil-image-plus"></i>
                    </div>
                    <input 
                        type="file" 
                        hidden 
                        accept='image/*' 
                        multiple={false} 
                        ref={inputRef} 
                        onChange={handleFileChange}
                    />
                </div>
            </div>

           <div className="form-control">
               <input
                   placeholder="Nome de usuário"
                   className="form-input"
                   onChange={e => setUsername(e.target.value.trim())}
                   value={username}
               />

               <input
                   placeholder="Nome"
                   className="form-input"
                   onChange={e => setName(e.target.value)}
                   value={name}
               />
           </div>
           
           <div className="form-control">
               <input
                   placeholder="Email"
                   className="form-input"
                   onChange={e => setEmail(e.target.value)}
                   value={email}
                   type="email"
                   pattern='/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'
               />

               <input
                   placeholder="Senha"
                   className="form-input"
                   onChange={e => setPassword(e.target.value)}
                   value={password}
               />
           </div>

           <div className="btn-wrapper">
               <button className="btn btn__secondary" onClick={() => {navigate("/login")}}>Fazer Login</button>
               <button type="submit" className="btn" onClick={handleSignupRequest}>Criar Conta</button>
           </div>
        </form>
    )
}

const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };