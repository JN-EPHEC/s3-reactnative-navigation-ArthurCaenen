import "react-native-reanimated";
import * as React from "react";
import CourseTabs from "./CourseTabs";
import ProfileScreen from "./screens/ProfileScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function RootLayout() {
  // Drawer at the root exposes the different app roots (Shop and Social).
  return (
    <Drawer.Navigator initialRouteName="Courses">
      <Drawer.Screen name="Courses" component={CourseTabs} options={{ title: "Courses", headerShown: false }} />
      <Drawer.Screen name="MyProfile" component={ProfileScreen} options={{ title: "My Profile" }} />
    </Drawer.Navigator>
  );
}
