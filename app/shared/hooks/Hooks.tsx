import { IDataResponse } from "../interfaces/DataResponse";

export const Message = (error, statusCode, message, payload = false): IDataResponse => {
  return {
    error,
    statusCode,
    message,
    payload,
  };
};
