import react from "react";
import { View } from "react-native";
import { styles } from "./CardStyles";
export default function Card({
  children,
  width = "93%",
  isSubTopBar,
  height = "auto",
  isSquared = false,
  justifyContent,
  mt = 0,
  mb = 0,
  bgColor,
  maxWidth = 371,
  margin = 0,
  borderRadius = 3,
}) {
  const initializeStyles = styles(
    isSubTopBar,
    isSquared,
    justifyContent,
    mb,
    mt,
    width,
    height,
    maxWidth,
    bgColor,
    margin,
    borderRadius
  );
  return <View style={initializeStyles.cardContainer}>{children}</View>;
}
