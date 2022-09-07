import {Post, PostProps} from "../PostCard";
import {PostInput} from "../PostInput";
import './style.css';

export const Feed = ({ props }: { props: PostProps[] }) => {
    return (
        <>
            <PostInput />

            <h1 className="feed-title">Seu Feed</h1>

            {
                props.map((p, index) => (<Post props={p} key={index} />))
            }
        </>
    )
}