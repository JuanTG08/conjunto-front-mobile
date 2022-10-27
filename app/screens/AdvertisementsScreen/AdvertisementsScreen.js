import React, { useEffect } from "react";
import { Environment } from "../../../Environment";
import { NativeBaseProvider, ScrollView, Text } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import CardsComplateComponent from "../../shared/components/cards-complate/CardsComplateComponent";
import LoadingSpinerComponent from "../../shared/components/loading-spinner/LoadingSpinerComponent";
import AdvertisementFetching from "./useAdvertisementFetching";
import { Alert } from "react-native";

const AdvertisementsScreen = ({ navigation }) => {
  const {
    listAdvertisements,
    errorRequest,
  } = AdvertisementFetching("012312");

  return (
    <NativeBaseProvider>
      <ScrollView px="8" background="primary.100">
        {
          errorRequest
            ?
            <Text>{errorRequest}</Text>
            :
            listAdvertisements ? (
              listAdvertisements.map((advertisements) => {
                return (
                  <CardsComplateComponent
                    key={advertisements._id}
                    imageUrl={`${Environment.IMAGES_URL}/${advertisements.miniature}`}
                    title={advertisements.title}
                    legend={advertisements.transmitter.nameTransmitter}
                    description={advertisements.description}
                    date={new Date(advertisements.created_at).toLocaleDateString()}
                    buttonOptions={{
                      title: "VER MAS",
                      color: "#6ee7b7",
                      fontSize: 18,
                    }}
                    style={{
                      bg: "gray.700",
                      color: "white",
                    }}
                  />
                );
              })
            ) : (
              <LoadingSpinerComponent />
            )
        }
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default AdvertisementsScreen;
