import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreens from "../component/screens/HomeScreens";
import SettingsScreens from "../component/screens/SettingsScreens";

const Drawer = createDrawerNavigator();

export default function NavigationsDrawers() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreens} />
      <Drawer.Screen name="config" component={SettingsScreens} />
    </Drawer.Navigator>
  );
}
