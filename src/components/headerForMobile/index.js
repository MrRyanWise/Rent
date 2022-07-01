import { Text, View, TextInput } from "react-native";

import styles from "./styles";
import { Feather, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";

import { colors } from "../../modal/color";

const HeaderForMobile = () => {
  return (
    <>
      <View style={styles.headerWrap}>
        <View style={styles.searchByTextWrap}>
          <Feather name="search" size={24} color={colors.black} />
          <TextInput
            placeholder="S earch in Rent.com"
            style={styles.searchPlaceholder}
            multiline={false}
          />
        </View>
        <View style={styles.localisationCatSearchWrap}>
          <View style={styles.localisationSearchWrap}>
            <MaterialIcons name="location-on" size={24} color="black" />
            <Text>Location : </Text>
            <Text style={styles.localisationSearchText}>New York</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <SimpleLineIcons name="settings" size={20} color="black" />
            <Text style={styles.catText}> Category : </Text>
            <Text style={styles.catDynText}>Vehicule</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default HeaderForMobile;
