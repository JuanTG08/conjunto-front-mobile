import { fetchLogin } from "./fetchLogin";

export const useLoginFetching = (data: any): any => {
  let errorLogin = false;
  fetchLogin(data)
    .then((res) => console.log(res))
    .catch((err) => err = "Error de Conexión");
  return {errorLogin};
}
