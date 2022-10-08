import Navbar from "../../components/Navbar";
import {Feed} from "../../components/Feed";
import './style.css'
import {UsersCard} from "../../components/UsersCard";
import {useEffect, useState} from "react";
import { api } from "../../service/api";
import {FeedProps} from "../../types/feed";
import {toast} from "react-toastify";
import {Toast} from "../../components/Toast";
import {useAuth} from "../../context/auth";
import {useNavigate} from "react-router-dom";
import {Loading} from "../../components/Loading";


const Home = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [feed, setFeed] = useState<FeedProps>({posts: [], newUsers: []});
    const authContext = useAuth();
    const navigate = useNavigate();

    const notifyError = () => {
        toast.error("ocorreu um erro ao carregar o seu feed", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        })
    }

    useEffect(() => {
        const getFeed = () => {
            api.get<FeedProps>('/feed', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("@App:token")}`
                }
            }).then((res) => {
                setFeed(res.data);
                setIsLoading(false);
            }).catch((err) => {
                if (err.response.status === 401) {
                    authContext.Logout();
                    navigate('/login');
                }
                notifyError();
            })
        }
        
        if (isLoading && authContext.isAuthenticated()) {
            getFeed();
        } else if (!authContext.isAuthenticated()) {
            navigate("/login");
        }
    }, []);

    return isLoading === true ? <div style={{height: "100vh"}}><Toast /><Loading /></div> : (
        <>
            <Toast />

            <Navbar />

            <div className="wrapper">
                <div>
                    <UsersCard users={feed.newUsers}/>
                </div>

                <div>
                    <Feed props={feed} />
                </div>
                
            </div>
        </>
    )
}

export default Home;