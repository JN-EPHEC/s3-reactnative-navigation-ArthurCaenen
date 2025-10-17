import "react-native-reanimated";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostListScreen from "./screens/PostListScreen";
import PostDetailScreen from "./screens/PostDetailScreen";
import { Route } from "expo-router/build/Route";

export type RootStackParamList = {
  PostList: undefined;
  PostDetail: { postId: string; title: string; content: string };
};

export default function RootLayout() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

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
      options={({ route }) => ({ title: route.params.title })}
    />
  </Stack.Navigator>
    );
;
