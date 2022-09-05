import './style.css'

export const MarkUser = ({username}: {username: string}) => {
    return (
        <a className="mark" href={`/${username}`}>
            {`@${username} `}
        </a>
    )
}