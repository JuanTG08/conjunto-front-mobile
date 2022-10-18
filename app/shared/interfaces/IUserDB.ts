export interface IUserRolDB {
    _id: string;
    name: string;
}

export interface IUserDB {
    _id: string;
    name: string;
    last_name: string;
    role: IUserRolDB;
}