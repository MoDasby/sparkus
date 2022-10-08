import {UserProps} from "./user";
import {PostProps} from "./post";

export interface UserDetails extends UserProps {
    posts: Array<PostProps>
}