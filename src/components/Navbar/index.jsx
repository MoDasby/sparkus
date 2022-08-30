import './style.css';
import SearchInput from "../SearchInput";
import {Link} from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="navbar">

            <Link to="/">
                Sparkus
            </Link>

            <SearchInput />

            <a href="/search" className="mobile-menu">
                <i className="uil uil-search"></i>
            </a>

            <div className="profile-container">
                <div className="profile-picture-container">
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
                        </div>

                        <a className="pointer">
                            <i className="uil uil-user"></i>
                            Meu Perfil
                        </a>

                        <a className="pointer">
                            <i className="uil uil-signout"></i>
                            Sair
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;