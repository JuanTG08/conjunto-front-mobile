import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useGetDataToRender, useRenderPage } from "./LoadingLogic";

export default function LoadingScreen({ route, navigation }) {
  useEffect(() => {
    useGetDataToRender(route.params).then((toRendering) => {
      useRenderPage(navigation, toRendering)
    });
  });
  return (
    <View>
      <Text>Cargando</Text>
    </View>
  );
}
