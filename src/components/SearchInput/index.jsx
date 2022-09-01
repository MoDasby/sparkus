import './style.css';
import {Navigate} from "react-router-dom";

export const SearchInput = () => {
    const isDesktop = window.innerWidth >= 768;

    return (
        <div className="container">
            <i className="uil uil-angle-left-b"></i>
            <input
                className="search-input"
                placeholder="Procurar"
            />

            {isDesktop && <Navigate to="/" />}
        </div>
    )
}