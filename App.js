import React from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./src/screens/Splash";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./src/screens/Home";
import MapScreen from "./src/screens/MapScreen";

import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        translucent
        backgroundColor={"white"}
        barStyle="dark-content"
      />
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Splash"
        component={Splash}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
