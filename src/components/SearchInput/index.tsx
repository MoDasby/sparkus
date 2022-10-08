import './style.css';
import React, {RefObject, useEffect, useState} from "react";
import { api } from "../../service/api";
import { UserProps } from "../../types/user";
import { Toast } from "../Toast";
import { toast } from "react-toastify";
import { UserCard } from "../UsersCard";
import { Loading } from "../Loading";

export const SearchInput = () => {

    const [searchResults, setSearchResults] = useState<Array<UserProps>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const recentSearches = JSON.parse(localStorage.getItem("recent") || "[]");

    const resultsRef = React.useRef() as RefObject<HTMLInputElement>;

    useEffect(() => {

        if (searchTerm.length > 0) setIsLoading(true);
        if (searchResults.length > 0 && searchTerm.length === 0) setSearchResults([]);

        searchTerm.length > 0 && api.get<Array<UserProps>>(`/search/${searchTerm}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("@App:token")}`
            }
        })
            .then(res => {
                setSearchResults(res.data);
                setIsLoading(false);
            })
            .catch(() => {
                toast.error("ocorreu um erro ao pesquisar por usuários", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                })
            });
    }, [searchTerm, searchResults.length])

    return (
        <div className="search-container">
            <Toast />

            <input
                className="search-input"
                placeholder="Procurar"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />

            {
                searchTerm.length > 0 &&
                <div className="results-container" ref={resultsRef}>
                    {
                        (isLoading) ?
                            <Loading/> :
                            searchResults.map((u, index) => {
                                return (
                                    <UserCard user={u} isFromSearch={true} key={index}/>
                                )
                            })
                    }

                    {
                        recentSearches.length > 0 &&
                        <div className="recent">
                            <h1>Recentes</h1>
                            {recentSearches.map((u: any, index: number) => <UserCard user={u} key={index}/>)}
                        </div>
                    }
                </div>
            }
        </div>
    )
}