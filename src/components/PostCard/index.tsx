import './style.css';
import { PostProps } from "../../types/post";
import { Toast } from "../Toast";
import { Link } from "react-router-dom";


export const Post = ({ props }: { props: PostProps }) => {
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
                    <Link to={`/user/${props.author.username}`}>
                        <h4 className="profile-name pointer">{props.author.name}</h4>
                        <small className="profile-username pointer">{`@${props.author.username}`}</small>
                    </Link>
                </div>
            </header>

            <article>
                <p className="post-text">{props.text}</p>
            </article>

        </div>
    )
}