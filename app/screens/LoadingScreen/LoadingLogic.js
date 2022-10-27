import { Message } from "../../shared/hooks/Hooks";
import AuthService from "../../shared/services/auth.services";

const service = new AuthService();

export const isLoggedIn = async () => {
  return service
    .getData()
    .then((res) => {
      if (res.error) return Message(true, "Error Interno");
      const { user, token } = res.payload;
      if (!user || !token) return Message(true, "Error Interno");
      return Message(false, 'Ok', { user, token });
    })
    .catch((err) => Message(true, "Error Interno"));
};
