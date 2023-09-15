import React from "react";
import { Animated, View, TouchableOpacity, Dimensions } from "react-native";
import { COLORS } from "../../constants/colors";
import { isIOS } from "../../helpers/platform";
import { styles } from "./NavigatorStyles";
const { fontScale } = Dimensions.get("window");
export default function Navigator({
  state,
  descriptors,
  navigation,
  fontSize = 12,
  tabHeight = 30,
  secondary = true,
}) {
  const styles = (secondary) =>
    StyleSheet.create({
      container: {
        flexDirection: "row",
        width: "95%",
        alignSelf: "center",
        borderRadius: 10,
        backgroundColor: secondary ? COLORS.GREYD : COLORS.SILVER,
        height: tabHeight,
        marginTop: 10,
        marginBottom: 10,
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 20,
        padding: 1,
      },
    });
  return (
    <View style={styles(secondary).container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const backgroundColor = isFocused
          ? secondary
            ? COLORS.WHITE
            : COLORS.PRIMARY_BLUE
          : secondary
          ? COLORS.GREYD
          : COLORS.SILVER;

        const fontColor = isFocused
          ? secondary
            ? COLORS.PRIMARY_BLUE
            : COLORS.WHITE
          : COLORS.BLACK;

        return (
          <TouchableOpacity
            accessibilityRole="button"
            key={index}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={
              styles(
                secondary,
                fontSize,
                tabHeight,
                fontScale,
                fontColor,
                backgroundColor
              ).mainContainer
            }
          >
            {/**Animated Text */}
            <Animated.Text
              style={
                styles(
                  secondary,
                  fontSize,
                  tabHeight,
                  fontScale,
                  fontColor,
                  backgroundColor
                ).animatedText
              }
            >
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
