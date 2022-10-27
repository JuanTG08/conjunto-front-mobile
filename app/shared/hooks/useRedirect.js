import { StackActions } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { Environment } from "../../../Environment";
import { emptyUser } from "../../redux/slices/user.slice";
import AuthService from "../services/auth.services";

export const useGoOut = (navigation, dispatch) => {
  dispatch(emptyUser({}));
  const serviceAuth = new AuthService();
  serviceAuth.closeSession();
  navigation.dispatch(
    StackActions.replace(Environment.PAGES_NAME.LOGIN, { method: "replace" })
  );
};
