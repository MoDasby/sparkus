import './style.css';
import {MouseEventHandler, useState} from "react";
import {api} from "../../service/api";
import {Toast} from "../Toast";
import {toast} from "react-toastify";
import {Loading} from "../Loading";

export const PostInput = () => {
    const [postText, setPostText] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const {icon_path} = JSON.parse(localStorage.getItem("@App:user") || "{}");

    const handleSubmitButton: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();

        if (postText.length === 0) {
            toast.error("não pode enviar um post vazio", {
                theme: "dark"
            })

            return;
        }

        setIsLoading(true)

        const reqBody = {
            "text": postText,
            "likes": 0,
            "author_username": "modasby"
        }

        api.post("/feed/post", reqBody, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("@App:token")}`
            }
        })
            .then(() => {
                toast.success("postado com sucesso", {
                    theme: "dark"
                })
            })
            .catch(() => {
                toast.error("ocorreu um erro ao postar", {
                    theme: "dark"
                })
            })

        setIsLoading(false);
        setPostText("");
    }

    return (
        <section className="post-input-card">
            <Toast />
            <div className="post-input-author-picture">
                <img
                    className="profile-picture"
                    src={icon_path}
                    alt="foto do perfil"
                />
            </div>
            <form className="post-input-form">
                <textarea
                    placeholder="No que está pensando?"
                    className="post-input"
                    value={postText}
                    onChange={e => setPostText(e.target.value)}
                />
                {
                    isLoading ?
                        <Loading /> :
                        <button
                            className="btn"
                            type="submit"
                            onClick={handleSubmitButton}
                        >
                            Postar
                        </button>
                }
            </form>
        </section>
    )
}