import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/HomePage";
import Search from "./Pages/SearchPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;