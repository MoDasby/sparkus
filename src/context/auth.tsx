import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {api} from "../service/api";
import {UserProps} from "../types/user";
import { UserData } from "../types/userData";

interface AuthContextData {
    isAuthenticated(): boolean,
    user: UserProps | null,
    Login (credential: string, password: string, loginError: (message: string) => void, redirectToHome: () => void): void,
    Signup (userData: UserData, signupError: (message: string) => void, redirectToHome: () => void): void,
    Logout(): void,
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const useAuth = () => {
    return useContext(AuthContext);
}

interface AuthProviderProps {
    children: ReactNode
}

interface AuthResponse {
    token: string,
    user: UserProps,
}

export const AuthProvider = ({children}: AuthProviderProps) => {

    const [user, setUser] = useState<UserProps | null>({} as UserProps);

    useEffect(() => {
        const storageUser = localStorage.getItem('@App:user');
        const storageToken = localStorage.getItem('@App:token');

        if (storageToken && storageUser) {
            setUser(JSON.parse(storageUser));
        }
    }, []);

    const Login = (credential: string, password: string, loginError: (message: string) => void, redirectToHome: () => void) => {
        api.post<AuthResponse>("/auth", {
            credential, password
        }).then(response => {

            if (response.data.user.icon_path === null || response.data.user.icon_path === "") {
                response.data.user.icon_path = `${window.location.host}/default-avatar.jpg`;
            }
            localStorage.setItem('@App:user', JSON.stringify(response.data.user));
            localStorage.setItem('@App:token', response.data.token);

            setUser(response.data.user);
            redirectToHome();
        }).catch(err => {
            loginError(err.response.data.description);
        })
    }

    const Signup = (userData: UserData, loginError: (message: string) => void, redirectToHome: () => void) => {
        console.log(userData);
        api.post<UserProps>("/auth/signup", userData).then(() => {
            Login(userData.username, userData.password, loginError, redirectToHome);
        }).catch(err => {
            loginError(err.response.data.description);
        });
    }

    const Logout = () => {
        setUser(null);

        localStorage.removeItem('@App:user');
        localStorage.removeItem('@App:token');
    }

    const isAuthenticated = () => {
        const token = localStorage.getItem("@App:token");
        return token !== null;
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, Login, Logout, Signup}}>
            {children}
        </AuthContext.Provider>
    )
}