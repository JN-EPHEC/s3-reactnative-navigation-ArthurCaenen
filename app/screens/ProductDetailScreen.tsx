import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ShopStackParamList } from "../ShopTabs";

type Props = NativeStackScreenProps<ShopStackParamList, "ProductDetail">;

export default function ProductDetailScreen({ route }: Props) {
  const { title, description } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 12 },
  body: { fontSize: 16, lineHeight: 22 },
});
