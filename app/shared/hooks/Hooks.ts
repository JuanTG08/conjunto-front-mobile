import { IResponseInternal } from "../interfaces/IResponseInternal";

export const Message = (error: boolean, message: string, payload: any = false): IResponseInternal => {
  return {
    error,
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

export const verifyDataObject = (obj: any, exception: string[] = []) => {
  let error: any = [];
  Object.entries(obj).forEach(([key, val]) => {
    if (!exception.includes(<never>key)) {
      if (val === undefined || val === null) error.push(<never>key);
    }
  });
  return error.length === 0 ? true : error;
};