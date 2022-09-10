import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/HomePage";
import Search from "./Pages/SearchPage";
import {ProfileDetailsPage} from "./Pages/ProfileDetailsPage";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/search" element={ <Search /> } />
                <Route path="/user" element={ <ProfileDetailsPage /> } />
            </Routes>
        </BrowserRouter>
    )
}