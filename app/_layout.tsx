import "react-native-reanimated";
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostListScreen from "./screens/PostListScreen";
import PostDetailScreen from "./screens/PostDetailScreen";
import SocialTabs from "./SocialTabs";

export type RootStackParamList = {
  PostList: undefined;
  PostDetail: { postId: string; title: string; content: string };
  Social: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootLayout() {
  return (
    <Stack.Navigator initialRouteName="PostList">
      <Stack.Screen
        name="PostList"
        component={PostListScreen}
        options={{ title: "Posts" }}
      />

      <Stack.Screen
        name="PostDetail"
        component={PostDetailScreen}
        options={({ route }) => ({ title: route?.params?.title ?? "Post Detail" })}
      />
      <Stack.Screen
        name="Social"
        component={SocialTabs}
        options={{ title: "Social" }}
      />
    </Stack.Navigator>
  );
}
