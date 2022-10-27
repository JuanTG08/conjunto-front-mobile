import { Environment } from "../../../Environment";
import { useGoTo } from "../../shared/hooks/useRendering";

export const useGoToAdvertisement = (navigation) => {
  useGoTo(navigation, Environment.PAGES_NAME.ADVERTISEMENT_LIST, Environment.METHOD_RENDERING.NAVIGATE);
}