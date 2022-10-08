import {PostProps} from "./post";
import {UserProps} from "./user";

export interface FeedProps {
    newUsers: Array<UserProps>
    posts: Array<PostProps>
}