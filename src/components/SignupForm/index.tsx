import {useState, MouseEventHandler, useRef, ChangeEventHandler} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/auth';
import { api } from '../../service/api';
import { UserData } from '../../types/userData';
import './style.css'

export const SignupForm = () => {

    const [userData, setUserData] = useState<UserData>({
        username: '',
        name: '',
        icon_path: '',
        email: '',
        password: ''
        });
    const authContext = useAuth();
    const navigate = useNavigate();
    const [icon_path, setIconPath] = useState<string>(`${document.dir}/default-avatar.jpg`);
    const [imageFile, setImageFile] = useState<File>();

    const inputRef = useRef<HTMLInputElement>(null);

    const handleSignupRequest: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();

        if (userData.username.length === 0 || userData.name.length === 0 || userData.email.length === 0 || userData.password.length === 0) {
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

        if (imageFile) {
            const formData = new FormData();
            formData.append('file', imageFile);

            api.post("/image/upload", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((response) => {
                const { data } = response;
                setIconPath(data.path);
                console.log("iconPath: ", icon_path)
            }).catch((error) => {
                console.log(error);
            });
            
        }

        authContext.Signup({
            username: userData.username,
            name: userData.name,
            icon_path: icon_path,
            email: userData.email,
            password: userData.password
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
    }, () => {navigate("/")})};

    const handleFileChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        e.preventDefault();

        const image = e.target.files![0];

        if (image) {
            setImageFile(image);
            setIconPath(URL.createObjectURL(image));

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
                    <img src={icon_path} className="profile-picture" alt='adicione uma foto de perfil' />
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
                   onChange={e => setUserData({...userData, username: e.target.value})}
                   value={userData.username}
               />

               <input
                   placeholder="Nome"
                   className="form-input"
                   onChange={e => setUserData({...userData, name: e.target.value})}
                   value={userData.name}
               />
           </div>
           
           <div className="form-control">
               <input
                   placeholder="Email"
                   className="form-input"
                   onChange={e => setUserData({...userData, email: e.target.value})}
                   value={userData.email}
                   type="email"
               />

               <input
                   placeholder="Senha"
                   className="form-input"
                   onChange={e => setUserData({...userData, password: e.target.value})}
                   value={userData.password}
               />
           </div>

           <div className="btn-wrapper">
               <button className="btn btn__secondary" onClick={() => {navigate("/login")}}>Fazer Login</button>
               <button type="submit" className="btn" onClick={handleSignupRequest}>Criar Conta</button>
           </div>
        </form>
    )
}