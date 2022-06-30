import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import PostItems from "./src/components/postItems";

export default function App() {
  return (
    <SafeAreaView style={styles.SafeAreaViewForDroid}>
      <PostItems />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaViewForDroid: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
