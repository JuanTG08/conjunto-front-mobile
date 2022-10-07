export type TDataResponse = {
    error: boolean;
    statusCode: number;
    message: string;
    payload: any | boolean;
}

export interface IDataResponse {
    error: boolean;
    statusCode: number;
    message: string;
    payload: any | boolean;
}