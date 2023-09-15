import React from "react";
import { View, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";

const styles = StyleSheet.create({
  imageOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  container: {
    backgroundColor: "#e1e4e8",
  },
});

function ProgressiveImage({ thumbnailSource, source, style }) {
  return (
    <View style={{ ...styles.container, ...style }}>
      <FastImage
        source={thumbnailSource}
        style={[styles.imageOverlay, style]}
        focusable
      />
      <FastImage
        source={source}
        style={[styles.imageOverlay, style]}
        focusable
      />
    </View>
  );
}

export default ProgressiveImage;
