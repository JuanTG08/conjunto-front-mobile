import { StackActions } from "@react-navigation/native";
import { Environment } from "../../../Environment";
import AuthService from "../../shared/services/auth.services";
const serviceAuth = new AuthService();
export const useGoOut = (navigation: any) => {
  serviceAuth.closeSession();
  navigation.dispatch(
    StackActions.replace(Environment.PAGES_NAME.LOGIN, { method: "replace" })
  );
};
