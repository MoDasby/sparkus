import './style.css';
import {Link} from "react-router-dom";
import {SearchInput} from "../SearchInput";

const Navbar = () => {

    return (
        <nav className="navbar">

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
                    src="https://cdn.pocket-lint.com/r/s/1200x630/assets/images/162179-tv-news-feature-rick-and-morty-season-6-release-date-trailer-and-how-to-watch-image1-kbmgzwpsy5.jpg"
                    className="profile-picture pointer"
                    alt="foto do perfil"
                />

                <div className="profile-dropdown">
                    <div>
                        <p className="profile-name pointer">
                            Giulliano Mendes Souto
                        </p>

                        <small className="profile-username pointer">
                            @modassssby
                        </small>

                        <div className="divider"></div>
                    </div>

                    <a className="pointer">
                        <i className="uil uil-user"></i>
                        Meu Perfil
                    </a>

                    <div className="divider"></div>

                    <a className="pointer">
                        <i className="uil uil-signout"></i>
                        Sair
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;