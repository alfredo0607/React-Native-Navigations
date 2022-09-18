import React from "react";
import { TextInput, View, Text, Button } from "react-native";
// import PropTypes from "prop-types";

export default function Login() {
  return (
    <View>
      <Text>Usuario</Text>
      <TextInput placeholder="Usurio" />
      <Text>Contraseña</Text>
      <TextInput placeholder="Contraseña" />
      <Button title="Entrar" />
    </View>
  );
}

//para validar cuando los prosp son obligatorios
// Login.propTypes = {
//   state: PropTypes.bool.isRequired,
// };
