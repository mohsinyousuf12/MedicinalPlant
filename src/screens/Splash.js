import React from "react";
import { Text, View, StatusBar, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
const logo = require("../../assets/logoo.jpeg");
export default function Splash({ navigation }) {
  React.useEffect(() => {
    setTimeout(
      () => navigation.navigate("Home"),

      5000
    );
  }, []);
  return (
    <LinearGradient
      colors={["rgb(10,129,216)", "rgb(6, 59, 160)"]}
      start={{ x: 0, y: 1.5 }}
      end={{ x: 0.5, y: 0 }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 50,
            width: 80,
            height: 80,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={logo}
            style={{
              width: 80,
              height: 80,
              resizeMode: "stretch",
              borderRadius: 50,
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 20,
            color: "white",
            marginTop: 13,
            fontWeight: "bold",
          }}
        >
          Al Tabee'ah
        </Text>
      </View>
    </LinearGradient>
  );
}
