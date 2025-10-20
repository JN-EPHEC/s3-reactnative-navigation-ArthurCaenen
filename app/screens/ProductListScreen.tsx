import React from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ShopStackParamList } from "../ShopTabs";

type Props = NativeStackScreenProps<ShopStackParamList, "ProductList">;

const PRODUCTS = [
  { id: "p1", title: "Laptop", description: "A powerful laptop for developers." },
  { id: "p2", title: "Mouse", description: "Wireless mouse with ergonomic design." },
  { id: "p3", title: "Keyboard", description: "Mechanical keyboard with RGB." },
];

export default function ProductListScreen({ navigation }: Props) {
  function renderItem({ item }: { item: (typeof PRODUCTS)[number] }) {
    return (
      <Pressable
        onPress={() => navigation.navigate("ProductDetail", { productId: item.id, title: item.title, description: item.description })}
        style={({ pressed }) => [styles.item, pressed && styles.itemPressed]}
      >
        <Text>{item.title}</Text>
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList data={PRODUCTS} keyExtractor={(p) => p.id} renderItem={renderItem} contentContainerStyle={styles.list} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  list: { padding: 16 },
  item: { padding: 12, marginBottom: 12, backgroundColor: "#f2f2f2", borderRadius: 8 },
  itemPressed: { opacity: 0.7 },
});
