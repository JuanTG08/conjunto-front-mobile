import {
  Box,
  FormControl,
  Input,
  Text,
  Stack,
  WarningOutlineIcon,
  HStack,
  Center,
} from "native-base";
import React from "react";

export default function LoginScreen() {
  return (
    <Box alignItems="center">
      <Box w="100%" maxWidth="300px">
        <FormControl isRequired>
          <Stack mx="4">
            <FormControl.Label>Email</FormControl.Label>
            <Input type="password" defaultValue="12345" placeholder="password" />
            <FormControl.HelperText>
              Debe tener mas de 8 caracteres
            </FormControl.HelperText>
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Es requerido al menos 8 caracteres
            </FormControl.ErrorMessage>
          </Stack>
        </FormControl>
        <FormControl isRequired>
          <Stack mx="4">
            <FormControl.Label>Contraseña</FormControl.Label>
            <Input type="password" defaultValue="12345" placeholder="password" />
            <FormControl.HelperText>
              Debe tener mas de 8 caracteres
            </FormControl.HelperText>
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Es requerido al menos 8 caracteres
            </FormControl.ErrorMessage>
          </Stack>
        </FormControl>
      </Box>
    </Box>
  );
}
