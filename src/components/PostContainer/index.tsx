import './style.css';

export interface PostProps {
    author_name: string,
    author_username: string,
    author_icon_path: string,
    text: string,
    photo_path: string | null,
    likes: number,
    comments: string
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

            <div>
                <p className="post_text">{props.text}</p>
                {
                    props.photo_path && <img alt="foto do post" src={props.photo_path} className="post_img" />
                }
            </div>

            <div className="icons-list">
                <i className="uil uil-comment-alt-lines"></i>

                <i className="uil uil-heart-sign"></i>
            </div>
        </div>
    )
}