import {Post} from "../PostCard";
import {PostInput} from "../PostInput";
import './style.css';
import {PostProps} from "../../types/post";
import {FeedProps} from "../../types/feed";

export const Feed = ({ props }: { props: FeedProps }) => {
    return (
        <>
            <PostInput />

            <h1 className="feed-title">Seu Feed</h1>

            {
                props.posts.map((p, index) => (<Post props={getPostProp(p)} key={index} />))
            }
        </>
    )
}

const getPostProp = (post: PostProps) => {
    return {
        id: post.id,
        post_author: post.post_author,
        author: {
            name: post.author.name,
            username: post.author.username,
            icon_path: post.author.icon_path
        },
        text: post.text,
        likes: post.likes,
        comments: [],
        is_liked: post.is_liked
    }
}