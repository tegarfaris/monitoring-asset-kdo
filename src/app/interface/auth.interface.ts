export enum ERole {
    ADMIN = "admin",
    USER = "user"
}

export interface IAuthUser {
    username: string;
    phoneNumber: string;
}