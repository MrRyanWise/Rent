import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff8000",
  },
  postWrap: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  postImage: {
    height: 100,
    width: 100,
    borderRadius: 30,
    marginLeft: 10,
    marginRight: 20,
    marginVertical: 10,
  },
  PostContentWrap: {
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  PostValue: {
    color: "#fec85c",
    backgroundColor: "#293241",
    alignSelf: "flex-start",
    padding: 5,
    borderRadius: 10,
  },
  postPlace: { color: "grey" },
  postTitle: { fontWeight: "bold" },
});

export default styles;
