import { Text, View, Image, Pressable } from "react-native";

import styles from "./styles";

import { useNavigation } from "@react-navigation/native";

const PostItems = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("PostDetails");
      }}
      style={styles.container}>
      <View style={styles.postWrap}>
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          style={styles.postImage}></Image>
        <View style={styles.PostContentWrap}>
          <View>
            <Text style={styles.postTitle}>This is title for rent </Text>
            <Text style={styles.postPlace}>New York</Text>
          </View>
          <Text style={styles.PostValue}>$100 / Day</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PostItems;
