import {
  HStack,
  Spinner,
  Heading,
  Box,
  Image
} from "native-base";
import React from 'react';

export default function LoadingSpinerComponent() {
  return (
    <Box>
      <HStack space={8} justifyContent="center" alignItems="center">
        <Heading color="indigo.500" fontSize="lg">
          Cargando
        </Heading>
        <Spinner color="indigo.500" size="lg" />
      </HStack>
    </Box>
  )
}