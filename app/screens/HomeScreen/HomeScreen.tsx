import { Box, Button, Heading, Text } from "native-base";
import React, { useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { useGoToAdvertisement } from "./HomeLogic";
import { useDispatch, useSelector } from "react-redux";
import { useGoOut } from "../../shared/hooks/useRedirect";

const HomeScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const goOut = () => {
    useGoOut(navigation, dispatch);
  };

  const goToAdvertisement = () => {
    useGoToAdvertisement(navigation);
  };

  return (
    <View>
      <Box alignItems="center">
        <Box
          maxW="80"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          backgroundColor="gray.700"
          padding="10"
        >
          <Button onPressOut={goToAdvertisement}>
            <Heading color="warmGray.50" size="md" ml="-1">
              Anuncios
            </Heading>
          </Button>
        </Box>
      </Box>
      <Button onPressOut={goOut}>Salir</Button>
    </View>
  );
};


export default HomeScreen;
