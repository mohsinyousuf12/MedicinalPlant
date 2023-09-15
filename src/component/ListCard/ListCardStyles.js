import react from "react";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 12,
    height: 75,
  },
  titleText: {
    fontSize: 21,
    fontWeight: "bold",
    color: "rgb( 7, 56, 205)",
  },
  subTitleText: { color: "rgb( 0, 0, 0)", fontSize: 11 },
  icon: { marginTop: 10 },

  secondaryRow: {
    padding: 12,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 45,
  },
  secondaryRowText: { fontSize: 15, color: "rgb( 7, 56, 205)" },
  icon2: { marginTop: -2 },
});
