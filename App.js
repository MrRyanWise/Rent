import { SafeAreaView, StyleSheet } from "react-native";

import { StatusBar } from "expo-status-bar";

import { colors } from "./src/modal/color";
import Route from "./src/navigation/Router";

export default function App() {
  return (
    <SafeAreaView style={styles.SafeAreaViewForDroid}>
      <StatusBar barStyle="dark-content" backgroundColor="#fec85c" />
      <Route />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaViewForDroid: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
    backgroundColor: colors.background,
  },
});
