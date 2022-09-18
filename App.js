import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationsDrawers from "./src/navigations/NavigationsDrawers";

export default function App() {
  return (
    <NavigationContainer>
      <NavigationsDrawers />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
