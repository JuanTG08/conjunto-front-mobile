import { Environment } from "../../../Environment";
import { IToRendering } from "../../shared/interfaces/IToRendering";
import AuthService from "../../shared/services/auth.services";
import { StackActions } from "@react-navigation/native";

export const useGetDataToRender = async (params: any): Promise<IToRendering> => {
  const service: AuthService = new AuthService(); // Obtenemos el servicio

  const data: IToRendering = {
    renderPage: Environment.PAGES_NAME.LOGIN, // Establecemos el valor por defecto del SCREEN
    next: params?.next, // Parametros necesarios de envio
    method: params?.method ? params?.method : 'replace', // Indicamos si va a utilizar replace o navigate
  }

  const toPage = params?.toPage; // Obtenemos hacia donde quiere ir
  const dataAllUser = await service.getData();
  if (dataAllUser.error || !dataAllUser.payload) return data;
  if (!toPage) {
    data.renderPage = Environment.PAGES_NAME.HOME;
    return data;
  }
  data.renderPage = toPage;
  return data;
};

export const useRenderPage = (navigation: any, toRendering: IToRendering) => {
  switch (toRendering.method) {
    case "navigate":
      navigation.navigate({
        name: toRendering.renderPage,
        params: toRendering.next,
      });
      break;
    case "replace":
      navigation.dispatch(StackActions.replace(toRendering.renderPage, { ...toRendering.next }));
      break;
    default:
      navigation.navigate({
        name: toRendering.renderPage,
        params: toRendering.next,
      });
      break;
  }
}
