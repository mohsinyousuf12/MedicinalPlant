import react from "react";
import { StyleSheet } from "react-native";

export const styles = (secondary, hideBottomLine) =>
  StyleSheet.create({
    headerContainer: {
      borderBottomWidth: hideBottomLine ? 0 : 1,
      backgroundColor: "white",
      flexDirection: secondary ? "row" : "column",
      justifyContent: "flex-start",
      borderBottomColor: "rgba(0, 0, 0, 0.1)",
      paddingTop: 40,
    },
    headerTitleText: {
      fontSize: 24,
      fontWeight: "bold",
      marginTop: 20,
      marginLeft: 16,
      fontFamily: "Inter-Bold",
    },
    icon: {
      width: "10%",
    },
    title: { width: "80%", alignSelf: secondary ? "center" : "flex-start" },
    descriptionText: {
      textAlign: "center",
      fontSize: 11,
      color: "rgb(109, 109, 114)",
    },
    container: {
      position: "absolute",
      zIndex: 99,
      width: 200,
      right: 0,
      top: 80,
    },
    reorderText: {
      padding: 10,
      fontSize: 15,
    },
    removeText: {
      padding: 10,
      fontSize: 15,
    },
  });
