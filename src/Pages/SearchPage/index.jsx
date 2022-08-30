import Navbar from "../../components/Navbar";
import SearchInput from "../../components/SearchInput";
import {Navigate} from "react-router-dom";

const Search = () => {
    const isDesktop = window.innerWidth >= 768;

    return (
        <>
            <Navbar />

            {isDesktop && <Navigate to="/" />}
        </>
    )
}

export default Search;