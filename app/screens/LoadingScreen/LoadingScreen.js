import { View, Text } from "react-native";
import React, { useEffect } from "react";
import {
  useGetDataToRender,
  useGoTo,
  useRenderPage,
} from "../../shared/hooks/useRendering";
import { isLoggedIn } from "./LoadingLogic";
import { useDispatch, useSelector } from "react-redux";
import AuthService from "../../shared/services/auth.services";
import { useGoOut } from "../../shared/hooks/useRedirect";
import { setUser } from "../../redux/slices/user.slice";
import { Environment } from "../../../Environment";

const authService = new AuthService();

export default function LoadingScreen({ route, navigation }) {

  const dispatch = useDispatch();
  const User = useSelector((state) => state.user);

  const getData = async () => {
    const data = await authService.getData().then((res) => res).catch(err => err);
    if (!data || data.error) return useGoOut(navigation, dispatch);
    const dataRedux = {
      status: true,
      ...data.payload.user,
      token: data.payload.token,
    }
    dispatch(setUser(dataRedux));
    useGoTo(navigation, Environment.PAGES_NAME.HOME, Environment.METHOD_RENDERING.REPLACE);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <Text>Cargando</Text>
    </View>
  );
}
