import React, { useCallback, useEffect, useState } from "react";
import { Environment } from "../../../Environment";
import AdvertisementsService from "./AdvertisementsServices";
import {
    Box,
    Image,
    AspectRatio,
    Text,
    Stack,
    Heading,
    HStack,
    NativeBaseProvider,
    Center,
    ScrollView,
    Flex
} from "native-base";
import { AntDesign } from '@expo/vector-icons';

const service = new AdvertisementsService();

const AdvertisementsScreen = () => {
    const [listAdvertisements, setListAdvertisement] = useState();
    const [errorRequest, setErrorResponse] = useState(false);
    useEffect(() => {
        service
            .listAdvertisements("012312")
            .then(({ data }) => {
                if (data.error || data.statusCode !== 200)
                    return setErrorResponse(data.message);
                setListAdvertisement(data.payload);
            })
            .catch((err) => console.error(err));
    }, []);

    const ShowListAdvertisements = (advertisements) => {
        return (
            <Box alignItems="center" w="auto" my="2">
                <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1"  background="gray.700">
                    <Box>
                        <AspectRatio w="100%" ratio={16 / 9}>
                            <Image source={{
                                uri: `${Environment.IMAGES_URL}/${advertisements.miniature}`
                            }} alt="image" />
                        </AspectRatio>
                        <Center bg="violet.500" _dark={{
                            bg: "violet.400"
                        }} _text={{
                            color: "warmGray.50",
                            fontWeight: "700",
                            fontSize: "xs"
                        }} position="absolute" bottom="0" px="3" py="1.5">
                            ANUNCIOS
                        </Center>
                    </Box>
                    <Stack p="4" space={3}>
                        <Stack space={2}>
                            <Heading color="white" size="md" ml="-1">
                                {advertisements.title}
                            </Heading>
                            <Text fontSize="xs" color="white" fontWeight="500" ml="-0.5" mt="-1">
                                {advertisements.transmitter.nameTransmitter}
                            </Text>
                        </Stack>
                        <Text fontWeight="400" color="white">
                            {advertisements.description}
                        </Text>
                        <HStack alignItems="center" space={4} justifyContent="space-between">
                            <HStack alignItems="center">
                                <Text color="warmGray.200" fontWeight="400">
                                    {new Date(advertisements.created_at).toLocaleDateString()}
                                </Text>
                            </HStack>
                        </HStack>
                    </Stack>
                    <HStack space="3" px="4" pb="4">
                        <Text color="emerald.300" fontSize={18}>
                            VER MAS
                        </Text>
                        <AntDesign name="rightcircleo" size={24} color="#6ee7b7" />
                    </HStack>
                </Box>
            </Box>
        );
    };

    return (
        <NativeBaseProvider>
            <ScrollView space="2.5" px="8" background="primary.100">
                {listAdvertisements ? (
                    listAdvertisements.map((advertisements) => {
                        return (
                            <>
                                {ShowListAdvertisements(advertisements)}
                            </>
                        );
                    })
                ) : (
                    <Text>Not Content</Text>
                )}
            </ScrollView>
        </NativeBaseProvider>
    );
};

export default AdvertisementsScreen;
