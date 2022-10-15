import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/HomePage";
import Search from "../Pages/SearchPage";
import { ProfileDetailsPage } from "../Pages/ProfileDetailsPage";
import { LoginPage } from "../Pages/LoginPage";
import { SignupPage } from "../Pages/SignupPage";
import { Error404 } from "../components/404";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/user/:username" element={<ProfileDetailsPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    )
}