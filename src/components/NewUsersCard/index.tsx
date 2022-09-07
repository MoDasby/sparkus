import './style.css';

export interface UserProps {
    name: string,
    username: string,
    icon_path: string
}

export const NewUsersCard = ({ users }: { users: Array<UserProps> }) => {
    return (
        <aside className="new-users-card">
            <h1>Novos Usuários</h1>
            {
                users.map((u, index) => {
                    return (
                        <header className="author-container" key={index}>
                            <img
                                src={u.icon_path}
                                className="profile-picture"
                                alt="foto do perfil"
                            />

                            <div className="author-data">
                                <h4 className="profile-name pointer">{u.name}</h4>
                                <small className="profile-username pointer">{`@${u.username}`}</small>
                            </div>
                        </header>
                    )
                })
            }
        </aside>
    )
}