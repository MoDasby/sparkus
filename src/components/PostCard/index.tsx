import './style.css';
import {PostProps} from "../../types/post";
import React, {RefObject, useEffect, useState} from "react";
import {api} from "../../service/api";
import {Toast} from "../Toast";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";


export const Post = ({props}: { props: PostProps }) => {

    const heartRef = React.useRef() as RefObject<HTMLObjectElement>;

    const [isLiked, setIsLiked] = useState<boolean>(props.is_liked);
    const [likesCount, setLikesCount] = useState<number>(props.likes)

    useEffect(() => {

        if (isLiked) {
            heartRef.current?.classList.add("like__active");
        } else if (!isLiked && heartRef.current?.classList.contains("like__active")) {
            heartRef.current?.classList.remove("like__active");
        }

    }, [isLiked, heartRef]);

    const handleLikeClick = () => {
        const likeUri = isLiked ? `/like/remove/${props.id}` : `/like/add/${props.id}`;

        api.put<number>(likeUri, {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("@App:token")}`
            }
        })
            .then(res => {
                setLikesCount(res.data);

                setIsLiked(!isLiked);
            })
            .catch(e => {
                toast.error("ocorreu um erro", {
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

    }

    return (
        <div className="post-container">

            <Toast />

            <header className="author-container">
                <img
                    src={props.author.icon_path}
                    className="profile-picture"
                    alt="foto do perfil"
                />

                <div className="author-data">
                    <Link to={`/${props.author.username}`}>
                        <h4 className="profile-name pointer">{props.author.name}</h4>
                        <small className="profile-username pointer">{`@${props.author.username}`}</small>
                    </Link>
                </div>
            </header>

            <article>
                <p className="post-text">{props.text}</p>
            </article>

            <ul className="interactions-list">
                <li className="interactions-item" onClick={handleLikeClick}>
                    <i className="uil uil-heart-sign" ref={heartRef}></i>
                    {likesCount}
                </li>
            </ul>
        </div>
    )
}