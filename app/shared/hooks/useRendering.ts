import { Environment } from "../../../Environment";
import { IToRendering, IToRenderingParams } from "../../shared/interfaces/IToRendering";
import AuthService from "../../shared/services/auth.services";
import { StackActions } from "@react-navigation/native";

export const useGetDataToRender = async (params: IToRenderingParams): Promise<IToRendering> => {
  const service: AuthService = new AuthService(); // Obtenemos el servicio

  const data: IToRendering = {
    renderPage: Environment.PAGES_NAME.LOGIN, // Establecemos el valor por defecto del SCREEN
    next: params?.next, // Parametros necesarios de envio
    method: params?.method ? params?.method : Environment.METHOD_RENDERING.REPLACE, // Indicamos si va a utilizar replace o navigate
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
    case Environment.METHOD_RENDERING.NAVIGATE:
      navigation.navigate({
        name: toRendering.renderPage,
        params: toRendering.next,
      });
      break;
    case Environment.METHOD_RENDERING.REPLACE:
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

export const useGoTo = (navigation:any, redirect: string, method: string, next?: any) => {
  useGetDataToRender({
    toPage: redirect,
    next,
    method,
  })
    .then((res) => {
      useRenderPage(navigation, res);
      return true;
    })
    .catch((err) => {
      alert("Error interno");
      return false;
    });
}