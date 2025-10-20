import React from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

const COURSES = [
  { id: "c1", title: "Intro to React Native", description: "Learn the basics of React Native." },
  { id: "c2", title: "Advanced JavaScript", description: "Deep dive into modern JavaScript." },
  { id: "c3", title: "UI/UX for Developers", description: "Design better user interfaces." },
];

type Props = NativeStackScreenProps<any, "CourseList">;

export default function CourseListScreen({ navigation }: Props) {
  function renderItem({ item }: { item: (typeof COURSES)[number] }) {
    return (
      <Pressable
        onPress={() => navigation.navigate("CourseDetail", { courseId: item.id, title: item.title, description: item.description })}
        style={({ pressed }) => [styles.item, pressed && styles.itemPressed]}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.description}</Text>
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList data={COURSES} keyExtractor={(c) => c.id} renderItem={renderItem} contentContainerStyle={styles.list} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  list: { padding: 16 },
  item: { padding: 12, marginBottom: 12, backgroundColor: "#f2f2f2", borderRadius: 8 },
  title: { fontSize: 16, fontWeight: "700", marginBottom: 6 },
  desc: { color: "#666" },
  itemPressed: { opacity: 0.7 },
});
