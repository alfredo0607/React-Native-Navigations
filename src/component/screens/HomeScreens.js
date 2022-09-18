import React from "react";
import { Text, SafeAreaView, Button } from "react-native";

export default function HomeScreens(props) {
  const { navigation } = props;

  const goToPage = () => {
    navigation.navigate("config");
  };

  return (
    <SafeAreaView>
      <Text>HomeScreens</Text>
      <Button title="Pasar" onPress={goToPage} />
    </SafeAreaView>
  );
}
