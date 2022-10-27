export interface IUserRol {
    _id: string;
    name: string;
}

export interface IUser {
    _id: string;
    name: string;
    email: string;
    last_name?: string;
    role: IUserRol;
}

export interface IUserRedux {
    _id: string;
    name: string;
    email: string;
    last_name?: string;
    role: IUserRol;
    token: string;
    status: boolean;
}