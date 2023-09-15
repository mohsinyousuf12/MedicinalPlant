import react from "react";
import { StyleSheet } from "react-native";

export const styles = (
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
) =>
  StyleSheet.create({
    cardContainer: {
      width: width,
      maxWidth: maxWidth,
      height,
      backgroundColor: bgColor || "white",
      alignItems: "center",
      alignSelf: "center",
      flexDirection: "column",
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      //  elevation: isSquared ? 10 : 1,
      borderWidth: 0.25,
      borderTopWidth: isSubTopBar && 0,
      justifyContent: justifyContent && justifyContent,
      marginTop: mt,
      marginBottom: mb,
      zIndex: -99999,
      // elevation: 10,
      margin,
      borderRadius,
    },
  });
