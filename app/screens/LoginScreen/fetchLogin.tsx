import axios from "axios";
import { Environment } from "../../../Environment";
import { useFetch } from "../../shared/hooks/useFetch";
import { IUserLogin } from "../../shared/interfaces/DataUser";

export const fetchLogin = (body: IUserLogin) => {
  const API_ADVERTISEMENTS_URL = `${Environment.API_URL}/auth/login-app-mobile`;
  return new useFetch(API_ADVERTISEMENTS_URL).post(body)
};
