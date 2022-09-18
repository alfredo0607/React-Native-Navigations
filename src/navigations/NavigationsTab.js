import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreens from "../component/screens/HomeScreens";
import SettingsScreens from "../component/screens/SettingsScreens";

const Tap = createBottomTabNavigator();

export default function NavigationsTab() {
  return (
    <Tap.Navigator>
      <Tap.Screen name="Home" component={HomeScreens} />
      <Tap.Screen name="config" component={SettingsScreens} />
    </Tap.Navigator>
  );
}


