import React, { useLayoutEffect } from "react";
import { StyleSheet, Pressable, FlatList, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<any, "PostList">;

const POSTS = [
  {
    id: "1",
    title: "React Native is Awesome",
    content:
      "React Native lets you build mobile apps using only JavaScript. Learn once, write anywhere! This is a fake post used for the exercise.",
  },
  {
    id: "2",
    title: "State Management Tips",
    content:
      "Managing state can be tricky. Use simple patterns first, then introduce libraries when needed. This is sample content for the exercise.",
  },
  {
    id: "3",
    title: "UI Design Principles",
    content:
      "Good UI is about clarity and consistency. Keep interfaces simple and predictable. More sample content here.",
  },
  {
    id: "4",
    title: "Optimizing Performance",
    content:
      "Profile first, then optimize. Use proper list virtualization and avoid unnecessary renders. This is dummy text.",
  },
];

export default function PostListScreen({ navigation }: Props) {
  function openSocial() {
    navigation.navigate("Social");
  }
  // Add a small header button to open the tabs quickly
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={openSocial} style={styles.headerButton}>
          <Text style={{ color: '#2f95dc' }}>Onglets</Text>
        </Pressable>
      ),
    });
  }, [navigation]);
  function renderItem({ item }: { item: (typeof POSTS)[number] }) {
    return (
      <Pressable
        onPress={() =>
          navigation.navigate("PostDetail", {
            postId: item.id,
            title: item.title,
            content: item.content,
          })
        }
        style={({ pressed }) => [styles.item, pressed && styles.itemPressed]}
      >
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemSnippet}>{item.content.slice(0, 100)}{item.content.length > 100 ? '…' : ''}</Text>
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={POSTS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 16,
  },
  item: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: "rgba(0,0,0,0.03)",
  },
  itemPressed: {
    opacity: 0.7,
  },
  socialButton: {
    padding: 12,
    backgroundColor: "rgba(47,149,220,0.12)",
    margin: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  socialButtonText: {
    color: '#2f95dc',
    fontWeight: '600',
  },
  headerButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  itemSnippet: {
    color: '#666',
    fontSize: 14,
  },
});
