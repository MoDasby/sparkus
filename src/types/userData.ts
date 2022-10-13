import { UserProps } from "./user";

export interface UserData extends UserProps {
    email: string,
    password: string,
}