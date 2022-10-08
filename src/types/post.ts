import {UserProps} from "./user";

export interface PostProps {
    id: string,
    post_author: string | null,
    author: UserProps,
    text: string,
    likes: number,
    comments: Array<PostProps>,
    is_liked: boolean,
}