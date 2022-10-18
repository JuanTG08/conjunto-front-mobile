import { IUserLogin } from "../../shared/interfaces/DataUser";
import { fetchLogin } from "./fetchLogin";

export const useLoginFetching = (data: IUserLogin): any => {
  let errorLogin: Boolean | string = false;
  fetchLogin(data)
    .then((res) => console.log(res))
    .catch((err) => errorLogin = "Error de Conexión");
  return {errorLogin};
}
