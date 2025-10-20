import * as React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductListScreen from "./screens/ProductListScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import CartScreen from "./screens/CartScreen";

export type ShopStackParamList = {
  ProductList: undefined;
  ProductDetail: { productId: string; title: string; description: string };
};

const Stack = createNativeStackNavigator<ShopStackParamList>();
function ShopStack() {
  return (
    <Stack.Navigator initialRouteName="ProductList">
      <Stack.Screen name="ProductList" component={ProductListScreen} options={{ title: "Products" }} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={({ route }) => ({ title: route.params.title })} />
    </Stack.Navigator>
  );
}

export type ShopTabParamList = {
  Shop: undefined;
  Cart: undefined;
};

const Tab = createBottomTabNavigator<ShopTabParamList>();

export default function ShopTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Shop"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#2f95dc",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ color }) => {
          const style = { fontSize: 18, color } as const;
          if (route.name === "Shop") return <Text style={style}>🛍️</Text>;
          if (route.name === "Cart") return <Text style={style}>🧺</Text>;
          return null;
        },
      })}
    >
      <Tab.Screen name="Shop" component={ShopStack} options={{ title: "Shop", tabBarLabel: "Shop" }} />
      <Tab.Screen name="Cart" component={CartScreen} options={{ title: "My Cart", tabBarLabel: "Mon Panier" }} />
    </Tab.Navigator>
  );
}
