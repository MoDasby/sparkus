import './style.css';
import { Post } from "../PostCard";
import {UserDetails} from "../../types/userDetails";

export const ProfileDetails = ({ data } : { data: UserDetails }) => {

    return (
        <div className="profile-details">
            <header className="user-data-container">
                <img
                    src={data.icon_path}
                    className="user-picture"
                    alt="foto do perfil"
                />

                <div className="author-data">
                    <h3 className="name pointer">{data.name}</h3>
                    <small className="username pointer">{`@${data.username}`}</small>
                </div>

                {/*<button
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
    </button>*/}
            </header>

            <div className="post-wrapper">
                <h2>Posts</h2>

                {
                    data.posts.map((p, index) => <Post key={index} props={p} />)
                }
            </div>
        </div>
    )
}