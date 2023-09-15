import React from "react";
import { Text } from "react-native";

function Apptext({
  children,
  isBold,
  size,
  padding,
  height,
  style,
  color = "black",
}) {
  return (
    <Text
      style={{
        ...style,
        fontFamily: isBold ? "OCRAEXT" : "OCRAEXT",
        fontSize: size,
        color: color,
        height: height,
        padding: padding,
      }}
    >
      {children}
    </Text>
  );
}

export default Apptext;
