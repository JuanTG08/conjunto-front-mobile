import { IDataResponse } from "../interfaces/DataResponse";

export const Message = (error, statusCode, message, payload = false): IDataResponse => {
  return {
    error,
    statusCode,
    message,
    payload,
  };
};

export const isEmail = (email: string): boolean | string => {
  const expresionMail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  return expresionMail.test(email) ? email : false;
}

export const _length = (value: any, max: number, min: number) => {
  if (value === undefined) return undefined;
  if (typeof value == "object")
    return value.length <= max && value.length >= min ? value : undefined;
  value = value.toString();
  return value.length <= max && value.length >= min ? value : undefined;
}
