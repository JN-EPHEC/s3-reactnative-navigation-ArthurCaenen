import * as React from "react";
import { Text, View, Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CourseListScreen from "./screens/CourseListScreen";
import CourseDetailScreen from "./screens/CourseDetailScreen";
import WishlistScreen from "./screens/WishlistScreen";

type CourseStackParamList = {
  CourseList: undefined;
  CourseDetail: { courseId: string; title: string; description: string };
};

const Stack = createNativeStackNavigator<CourseStackParamList>();
function CourseStack() {
  return (
    <Stack.Navigator initialRouteName="CourseList">
      <Stack.Screen
        name="CourseList"
        component={CourseListScreen as any}
        options={({ navigation }) => ({
          title: "Courses",
          headerLeft: () => (
            <Text style={{ marginLeft: 12, fontSize: 18 }} onPress={() => (navigation.getParent as any)?.()?.openDrawer?.()}>☰</Text>
          ),
        })}
      />
      <Stack.Screen
        name="CourseDetail"
        component={CourseDetailScreen as any}
        options={({ route, navigation }) => ({
          title: route?.params?.title ?? "Course Detail",
          headerLeft: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Pressable onPress={() => navigation.goBack()} style={{ paddingHorizontal: 8 }}>
                <Text style={{ fontSize: 20 }}>‹</Text>
              </Pressable>
              <Pressable onPress={() => (navigation.getParent as any)?.()?.openDrawer?.()} style={{ paddingHorizontal: 8 }}>
                <Text style={{ marginLeft: 4, fontSize: 18 }}>☰</Text>
              </Pressable>
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
export default function CourseTabs() {
  return (
    <Tab.Navigator
      initialRouteName="AllCourses"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#2f95dc",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ color }) => {
          const style = { fontSize: 18, color } as const;
          if (route.name === "AllCourses") return <Text style={style}>📚</Text>;
          if (route.name === "Wishlist") return <Text style={style}>💖</Text>;
          return null;
        },
      })}
    >
      <Tab.Screen name="AllCourses" component={CourseStack} options={{ title: "All Courses", tabBarLabel: "Cours" }} />
      <Tab.Screen name="Wishlist" component={WishlistScreen as any} options={{ title: "Wishlist", tabBarLabel: "Souhaits" }} />
    </Tab.Navigator>
  );
}
