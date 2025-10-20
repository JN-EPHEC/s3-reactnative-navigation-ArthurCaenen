import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Name: John Doe</Text>
      <Text style={styles.username}>Username: @johndoe</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 16 },
  name: { fontSize: 18, fontWeight: "600", marginBottom: 8 },
  username: { fontSize: 16, color: "#666" },
});
