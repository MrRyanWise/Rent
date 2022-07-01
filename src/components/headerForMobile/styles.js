import { StyleSheet } from "react-native";
import { colors } from "../../modal/color";

const styles = StyleSheet.create({
  headerWrap: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: colors.primary,
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  searchByTextWrap: {
    backgroundColor: colors.white,
    flexDirection: "row",
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  searchPlaceholder: {
    width: "100%",
    marginLeft: 5,
  },
  localisationCatSearchWrap: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingVertical: 10,
  },
  localisationSearchWrap: {
    flexDirection: "row",
  },
  localisationSearchText: {
    fontWeight: "bold",
    marginLeft: 5,
  },
  catText: {
    marginLeft: 5,
  },
  catDynText: {
    fontWeight: colors.bold,
    marginLeft: 5,
  },
});

export default styles;
