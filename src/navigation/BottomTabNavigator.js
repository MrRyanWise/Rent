import { SafeAreaView, StyleSheet } from "react-native";

import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import PostDetails from "../screens/postDetails";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { colors } from "../modal/color";

const BottomTabNav = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarActiveBackgroundColor: colors.primary,
        tabBarActiveTintColor: colors.secondary,
        tabBarStyle: { backgroundColor: colors.primary, height: 60 },
      }}
      sceneContainerStyle={{ backgroundColor: colors.backgroundColor }}>
      <Tab.Screen
        name={"Explore"}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={25} color={colors.secondary} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name={"Listing"}
        component={PostDetails}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="clipboard-text"
              size={24}
              color="black"
            />
          ),
        }}
      />

      <Tab.Screen
        name={"Chat"}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="chat" size={24} color="black" />
          ),
        }}
      />

      <Tab.Screen
        name={"Profile"}
        component={PostDetails}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-circle" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
