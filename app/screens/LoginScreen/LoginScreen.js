import {
  Box,
  FormControl,
  Input,
  Stack,
  WarningOutlineIcon,
  Heading,
  Button,
} from "native-base";
import React, { useState } from "react";
import { Environment } from "../../../Environment";
import { isEmail, _length } from "../../shared/hooks/Hooks";
import { StackActions } from "@react-navigation/native";
import {useLoginFetching} from "./useLoginFetching";

export default function LoginScreen({ navigation }) {
  const [emailRef, setEmailRef] = useState({
    value: "admin@gmail.com",
    isInvalid: false,
  });
  const [passRef, setPassRef] = useState({
    value: "12345678",
    isInvalid: false,
  });

  const getData = () => {
    const email = isEmail(emailRef.value)
    const pass = _length(passRef.value, 64, 8);
    setEmailRef({ ...emailRef, isInvalid: false });
    setPassRef({ ...passRef, isInvalid: false });
    let isValidForm = true;


    if (!email) {
      isValidForm = false;
      setEmailRef({ ...emailRef, isInvalid: true });
    }
    if (!pass) {
      isValidForm = false;
      setPassRef({ ...passRef, isInvalid: true });
    }

    if (!isValidForm) return false;
    return { email, password: pass };
  }

  const submitLoggin = async () => {
    const data = getData();
    // Validamos si los datos son correctos
    if (!data) return;
    const errorLogin = await useLoginFetching(data);
    console.log(errorLogin);
    if (errorLogin.error) return alert(errorLogin.message);
    navigation.dispatch(StackActions.replace(Environment.PAGES_NAME.LOADING, { method: 'replace' } ));
  };

  return (
    <Box alignItems="center">
      <Heading>Iniciar Sesion</Heading>
      <Box w="100%">
        <FormControl isInvalid={emailRef.isInvalid} isRequired>
          <Stack mx="4">
            <FormControl.Label>Email</FormControl.Label>
            <Input
              type="text"
              placeholder="your@email.com"
              value={emailRef.value}
              onChangeText={(value) => setEmailRef({ ...emailRef, value })}
            />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Es necesario un correo valido para este campo
            </FormControl.ErrorMessage>
            <FormControl.HelperText>
              Tu correo electronico
            </FormControl.HelperText>
          </Stack>
        </FormControl>
        <FormControl isInvalid={passRef.isInvalid} isRequired>
          <Stack mx="4">
            <FormControl.Label>Contraseña</FormControl.Label>
            <Input type="password" placeholder="Contraseña" value={passRef.value} onChangeText={(value) => setPassRef({ ...passRef, value })} />
            <FormControl.HelperText>
              Debe tener mas de 8 caracteres
            </FormControl.HelperText>
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Es requerido al menos 8 caracteres
            </FormControl.ErrorMessage>
          </Stack>
        </FormControl>
        <Box alignItems="center" my="5">
          <Button size="lg" bg="tertiary.500" onPress={() => submitLoggin()}>
            Ingresar
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
