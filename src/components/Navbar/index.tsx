import './style.css';
import {Link, useNavigate} from "react-router-dom";
import {SearchInput} from "../SearchInput";
import React, {RefObject} from "react";
import {UserProps} from "../../types/user";
import {useAuth} from "../../context/auth";

const Navbar = () => {

    const user = JSON.parse(localStorage.getItem("@App:user") || "{}") as UserProps;
    const navigate = useNavigate();

    const authContext = useAuth();

    const navRef = React.useRef() as RefObject<HTMLObjectElement>;

    window.onscroll = () => {
        if (window.scrollY > 0) navRef.current?.classList.add("glass");
        else {
            if (navRef.current?.classList.contains("glass")) navRef.current?.classList.remove("glass");
        }
    }

    const handleLogout = () => {
        authContext.Logout();
        navigate("/login");
    }

    return (
        <nav className="navbar" ref={navRef}>

            <Link to="/">
                <h2>
                    Sparkus
                </h2>
            </Link>

            <SearchInput />

            <a href="/search" className="mobile-menu">
                <i className="uil uil-search"></i>
            </a>

            <div className="profile-container">
                <img
                    src={user.icon_path}
                    className="profile-picture pointer"
                    alt="foto do perfil"
                />

                <div className="profile-dropdown">
                    <div>
                        <p className="profile-name pointer">
                            {user.name}
                        </p>

                        <small className="profile-username pointer">
                            { `@${user.username}` }
                        </small>

                        <div className="divider"></div>
                    </div>

                    <a className="pointer" href={`/user/${user.username}`}>
                        <i className="uil uil-user"></i>
                        Meu Perfil
                    </a>

                    <div className="divider"></div>

                    <button className="pointer warning logout" onClick={handleLogout}>
                        <i className="uil uil-signout"></i>
                        Sair
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;