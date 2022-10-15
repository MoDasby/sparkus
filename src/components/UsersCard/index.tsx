import './style.css';
import {UserProps} from "../../types/user";
import {Link} from "react-router-dom";


export const UsersCard = ({ users }: { users: Array<UserProps> }) => {
    return (
        <aside className="new-users-card">
            <h1>Novos Usuários</h1>
            {
                users.map((u, index) => {
                    return (
                        <UserCard user={u} key={index} />
                    )
                })
            }
        </aside>
    )
}

interface UsersCardProps {
    user: UserProps,
    isFromSearch?: boolean
}

export const UserCard = (props: UsersCardProps) => {
    const { user, isFromSearch } = props;

    const addToRecent = () => {
        const recentSearches = Array.from(JSON.parse(localStorage.getItem("recent") || "[]"));
        recentSearches.push(user);

        const recentSearchesUnique = recentSearches.filter(function (a) {
            // @ts-ignore
            return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
        }, Object.create(null))

        localStorage.setItem("recent", JSON.stringify(recentSearchesUnique));
    }

    return (
        <header className="author-container">
            <img
                src={user.icon_path}
                className="profile-picture"
                alt="foto do perfil"
            />

            <div className="author-data" onClick={() => {
                if (isFromSearch) addToRecent();
            }} >
                <Link to={`/user/${user.username}`}>
                    <h4 className="profile-name pointer">{user.name}</h4>
                    <small className="profile-username pointer">{`@${user.username}`}</small>
                </Link>
            </div>
        </header>
    )
}