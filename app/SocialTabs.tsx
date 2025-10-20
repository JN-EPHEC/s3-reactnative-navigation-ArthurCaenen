import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import PostListScreen from "./screens/PostListScreen";
import PostDetailScreen from "./screens/PostDetailScreen";
import CourseTabs from "./CourseTabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";

export type SocialTabParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
  Blog: undefined;
  Cours: undefined;
};

const Tab = createBottomTabNavigator<SocialTabParamList>();

type BlogStackParamList = {
  PostList: undefined;
  PostDetail: { postId: string; title: string; content: string };
};

const BlogStack = createNativeStackNavigator<BlogStackParamList>();

function BlogStackScreen() {
  return (
    <BlogStack.Navigator initialRouteName="PostList">
      <BlogStack.Screen name="PostList" component={PostListScreen as any} options={{ title: 'Posts' }} />
      <BlogStack.Screen name="PostDetail" component={PostDetailScreen as any} options={({ route }) => ({ title: route?.params?.title ?? 'Post Detail' })} />
    </BlogStack.Navigator>
  );
}

export default function SocialTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarActiveTintColor: "#2f95dc",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ color }) => {
          // simple emoji icons colored to match active/inactive tint
          const style = { fontSize: 18, color } as const;
          if (route.name === "Home") return <Text style={style}>🏠</Text>;
          if (route.name === "Profile") return <Text style={style}>👤</Text>;
          if (route.name === "Settings") return <Text style={style}>⚙️</Text>;
          if (route.name === "Blog") return <Text style={style}>📝</Text>;
                  if (route.name === "Cours") return <Text style={style}>📚</Text>;
          return null;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: "Accueil", tabBarLabel: "Accueil" }} />
  <Tab.Screen name="Blog" component={BlogStackScreen} options={{ title: "Blog", tabBarLabel: "Blog", headerShown: false }} />
              <Tab.Screen name="Cours" component={CourseTabs as any} options={{ title: "Cours", tabBarLabel: "Cours" }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: "Profil", tabBarLabel: "Profil" }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: "Paramètres", tabBarLabel: "Paramètres" }} />
    </Tab.Navigator>
  );
}
