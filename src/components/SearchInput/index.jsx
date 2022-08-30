import './style.css';
import {useLocation} from "react-router-dom";

const SearchInput = () => {
    const isMobile = window.innerWidth <= 768;
    const location = useLocation();

    return (
        <input
            type="text"
            className={`search-input ${(isMobile && location.href === "/search") && "search-input__mobile"}`}
            placeholder="Pesquisar"
        />
    )
}

export default SearchInput;