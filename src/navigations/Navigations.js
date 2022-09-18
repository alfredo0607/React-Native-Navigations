import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreens from "../component/screens/HomeScreens";
import SettingsScreens from "../component/screens/SettingsScreens";

const Stack = createStackNavigator();

export default function Navigations() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreens} />
      <Stack.Screen name="config" component={SettingsScreens} />
    </Stack.Navigator>
  );
}
