import { Environment } from "../../../Environment";
import { useFetch } from "../../shared/hooks/useFetch";

export const fetchLogin = (body) => {
  const API_ADVERTISEMENTS_URL = `${Environment.API_URL}/auth/login-app-mobile`;
  return new useFetch(API_ADVERTISEMENTS_URL).post(body)
};
