import Navbar from "../../components/Navbar";
import {ProfileDetails} from "../../components/ProfileDetails";
import {useEffect, useState} from "react";
import {api} from "../../service/api";
import {toast} from "react-toastify";
import {Toast} from "../../components/Toast";
import {UserDetails} from "../../types/userDetails";
import {useParams} from "react-router-dom";
import { Loading } from "../../components/Loading";

export const ProfileDetailsPage = () => {
    const { username } = useParams();

    const [data, setData] = useState<UserDetails>({
        username: "",
        name: "",
        icon_path: "",
        posts: []
    });
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const getData = () => {
                api.get<UserDetails>(`/userDetails/${username}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("@App:token")}`
                    }
                }).then((res) => {
                setData(res.data);
            }).catch((e) => {
                toast.error(`Ocorreu um erro ao carregar,\n\n${e.response.data.description}`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                })
            })
        }

        if (isLoading) {
            getData();
            setIsLoading(false);
        }
    }, [data, isLoading])

    return ( isLoading ? <div style={{height: "100vh"}}><Toast /> <Loading /></div> :
        <>
            <Toast />

            <Navbar />
            
            <ProfileDetails data={data} />
        </>
        
    )
}