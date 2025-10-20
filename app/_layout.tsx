import "react-native-reanimated";
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostListScreen from "./screens/PostListScreen";
import PostDetailScreen from "./screens/PostDetailScreen";

export type RootStackParamList = {
  PostList: undefined;
  PostDetail: { postId: string; title: string; content: string };
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
    </Stack.Navigator>
  );
}
