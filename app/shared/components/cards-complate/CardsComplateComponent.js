import {
  Box,
  Image,
  AspectRatio,
  Text,
  Stack,
  Heading,
  HStack,
  Center,
} from "native-base";

import React from "react";

export default function CardsComplateComponent({
  imageUrl,
  title,
  legend,
  description,
  date,
  buttonOptions,
  style,
}) {
  return (
    <Box alignItems="center" w="auto" my="2">
      <Box
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        background={ style.bg }
      >
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: imageUrl,
              }}
              alt="image"
            />
          </AspectRatio>
          <Center
            bg="violet.500"
            _text={{
              color: "warmGray.50",
              fontWeight: "700",
              fontSize: "xs",
            }}
            position="absolute"
            bottom="0"
            px="3"
            py="1.5"
          >
            ANUNCIOS
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading color={ style.color } size="md" ml="-1">
              {title}
            </Heading>
            <Text
              fontSize="xs"
              color={ style.color }
              fontWeight="500"
              ml="-0.5"
              mt="-1"
            >
              {legend}
            </Text>
          </Stack>
          <Text fontWeight="400" color={ style.color }>
            {description}
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="warmGray.200" fontWeight="400">
                {new Date(date).toLocaleDateString()}
              </Text>
            </HStack>
          </HStack>
        </Stack>
        {buttonOptions ? (
          <HStack space="3" px="4" pb="4">
            <Text color={buttonOptions.color} fontSize={buttonOptions.fontSize}>
              {buttonOptions.title}
            </Text>
          </HStack>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
}
