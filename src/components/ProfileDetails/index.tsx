import { UserProps } from "../NewUsersCard";
import './style.css';
import {Post, PostProps} from "../PostCard";


export const ProfileDetails = () => {
    const user: UserProps = {
        name: "Modasby",
        username: "modasby",
        icon_path: "https://veja.abril.com.br/wp-content/uploads/2018/03/selfie0mulher-20150128-0007.jpg"
    }

    const postsMock: PostProps[] = [{
        post_author: null,
        author_name: "Modasby",
        author_username: "modasby",
        author_icon_path: "https://veja.abril.com.br/wp-content/uploads/2018/03/selfie0mulher-20150128-0007.jpg",
        text: "Só testando aqui mesmo parsa",
        likes: 24,
        comments: []
    }]

    return (
        <div className="profile-details">
            <header className="user-data-container">
                <img
                    src={user.icon_path}
                    className="user-picture"
                    alt="foto do perfil"
                />

                <div className="author-data">
                    <h3 className="name pointer">{user.name}</h3>
                    <small className="username pointer">{`@${user.username}`}</small>
                </div>

                <button
                    className="btn"
                    type="submit"
                    onClick={(e) => e.preventDefault()}
                >
                    Seguir
                </button>

                <button
                    className="btn btn__secondary"
                >
                    Editar Perfil
                </button>
            </header>

            <div className="post-wrapper">
                <h2>Posts</h2>

                {
                    postsMock.map(p => <Post props={p} />)
                }
            </div>
        </div>
    )
}