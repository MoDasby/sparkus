import {Post, PostProps} from "../PostCard";
import {PostInput} from "../PostInput";

export const Feed = ({ props }: { props: PostProps[] }) => {
    return (
        <>
            <PostInput />
            {
                props.map((p, index) => (<Post props={p} key={index} />))
            }
        </>
    )
}