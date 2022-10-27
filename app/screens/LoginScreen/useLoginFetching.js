import { Environment } from "../../../Environment";
import { Message } from "../../shared/hooks/Hooks";
import AuthService from "../../shared/services/auth.services";
import { fetchLogin } from "./fetchLogin";

export const useLoginFetching = (data) => {
  const service = new AuthService();
  return fetchLogin(data)
    .then(async (res) => {
      if (res.error || res.statusCode != 200) return Message(true, res.message);
      const { token, dataUser } = res.payload;
      if (!token || !dataUser) return Message(true, "Error en el servidor");
      const setU = await service.setUserData(dataUser);
      const setT = await service.setToken(token);
      if (setT.error || setU.error) return Message(true, "Error interno");
      return Message(false, "Ok");
    })
    .catch((err) => Message(true, "Error de conexión", err));
};
