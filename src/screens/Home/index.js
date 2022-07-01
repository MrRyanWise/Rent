import { SafeAreaView, StyleSheet } from "react-native";

import HeaderForMobile from "../../components/headerForMobile";
import { StatusBar } from "expo-status-bar";

import PostItems from "../../components/postItems";
import { colors } from "../../modal/color";

const Home = () => {
  return (
    <>
      <HeaderForMobile />
      <PostItems />
    </>
  );
};

export default Home;
