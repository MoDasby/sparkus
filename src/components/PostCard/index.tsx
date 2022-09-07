import './style.css';
import {MarkUser} from "../MarkUser";

export interface PostProps {
    post_author: string | null,
    author_name: string,
    author_username: string,
    author_icon_path: string,
    text: string,
    likes: number,
    comments: Array<PostProps>
}


export const Post = ({props}: { props: PostProps }) => {
    return (
        <div className="post-container">
            <header className="author-container">
                <img
                    src={props.author_icon_path}
                    className="profile-picture"
                    alt="foto do perfil"
                />

                <div className="author-data">
                    <h4 className="profile-name pointer">{props.author_name}</h4>
                    <small className="profile-username pointer">{`@${props.author_username}`}</small>
                </div>
            </header>

            <article>
                { props.post_author ?
                    <p className="post-text">
                        <MarkUser username={props.post_author} />
                        {props.text}
                    </p> :
                    <p className="post-text">{props.text}</p>
                }
            </article>

            <ul className="interactions-list">
                <li className="interactions-item">
                    {props.comments?.length || 0}
                    <i className="uil uil-comment-alt-lines"></i>
                </li>

                <li className="interactions-item">
                    <i className="uil uil-heart-sign"></i>
                    {props.likes}
                </li>
            </ul>

            <div className="comments-area">
                {
                    props.comments.map(p => <Post props={p} />)
                }
            </div>
        </div>
    )
}