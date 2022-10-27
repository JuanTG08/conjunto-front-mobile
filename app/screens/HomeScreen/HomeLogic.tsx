import { StackActions } from "@react-navigation/native";
import { Environment } from "../../../Environment";
import { useGoTo } from "../../shared/hooks/useRendering";
import AuthService from "../../shared/services/auth.services";

export const useGoToAdvertisement = (navigation: any) => {
  useGoTo(navigation, Environment.PAGES_NAME.ADVERTISEMENT_LIST, Environment.METHOD_RENDERING.NAVIGATE);
}