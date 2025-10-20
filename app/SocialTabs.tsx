import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { Text } from "react-native";

export type SocialTabParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<SocialTabParamList>();

export default function SocialTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarActiveTintColor: "#2f95dc",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ color }) => {
          // simple emoji icons
          if (route.name === "Home") return <Text style={{ fontSize: 18 }}>🏠</Text>;
          if (route.name === "Profile") return <Text style={{ fontSize: 18 }}>👤</Text>;
          if (route.name === "Settings") return <Text style={{ fontSize: 18 }}>⚙️</Text>;
          return null;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: "Home" }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: "Profile" }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: "Settings" }} />
    </Tab.Navigator>
  );
}
