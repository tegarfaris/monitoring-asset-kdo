export enum ERole {
    ADMIN = "admin",
    EMPLOYEE = "employee"
}

export interface IAuthUser {
    email: string;
    username: string;
    phoneNumber: string;
}