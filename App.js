import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";

import Home from "./components/home/Home";

// const RootStack = createStackNavigator(
//   {
//     Home: Home,
//   },
//   {
//     initialRouteName: "Home",
//   }
// );

// const AppContainer = createAppContainer(RootStack);

export default function App() {
  return <Home></Home>;
}
