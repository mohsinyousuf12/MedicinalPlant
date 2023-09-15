import React from "react";
import { View } from "react-native";

export default function ListSeparator({ height = 10 }) {
  return (
    <View
      style={{
        width: "100%",
        height: 0.5,
        backgroundColor: "grey",
      }}
    />
  );
}
