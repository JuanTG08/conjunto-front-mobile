import { Environment } from "../../../Environment";
import { Message, verifyDataObject, _length } from "../hooks/Hooks";
import useLocalStorage from "../hooks/useStorage";

export default class AuthService {
  validData(res) {
    if (!res || res.length < 1) return Message(true, "Datos Vacios")
    return Message(false, "Se obtuvo los datos", res)
  }

  async setUserData(userData) {
    // Verificamos los datos que nos llegan
    const data = {
      _id: _length(userData._id, 128, 1),
      name: _length(userData.name, 64, 1),
      email: _length(userData.email, 64, 1),
      last_name: _length(userData.last_name, 64, 1),
      role: _length(userData.role, 64, 1),
    };
    const dataVerify = verifyDataObject(data, ["last_name"]);
    if (dataVerify !== true) return Message(true, "Datos incompletos");
    return useLocalStorage
      .setItem(Environment.VAR_DATA_SAVE.USER, JSON.stringify(data))
      .then((res) => Message(!res, "Ok"))
      .catch((err) => Message(false, "No es posible guardar la información"));
  }
  setToken(token) {
    // Establecemos el token
    if (token.length < 1) return Message(true, "Datos incompletos");
    return useLocalStorage
      .setItem(Environment.VAR_DATA_SAVE.TOKEN, token)
      .then((res) => Message(!res, "Ok"))
      .catch((err) => Message(false, "No es posible guardar la información"));
  }

  getUserData() {
    return useLocalStorage
      .getItem(Environment.VAR_DATA_SAVE.USER)
      .then((res) => this.validData(res))
      .catch((err) => Message(true, "Error al obtener los datos"));
  }

  getToken() {
    return useLocalStorage
      .getItem(Environment.VAR_DATA_SAVE.TOKEN)
      .then((res) => this.validData(res))
      .catch((err) => Message(true, "Error al obtener los datos"));
  }

  async getData() {
    let token = await (await this.getToken());
    let user = await (await this.getUserData());
    if (token.error || user.error)
      return Message(true, "Datos Vacios");
    try {
      user = JSON.parse(user.payload);
      token = token.payload;
      return Message(false, "Ok", { token, user });
    } catch (error) {
      return Message(true, "Datos Vacios");
    }
  }

  closeSession() {
    useLocalStorage.Clear()
  }
}
