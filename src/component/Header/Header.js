import React from "react";
import { View, Text, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Feather";
import Apptext from "../AppText/AppText";
import Card from "../Card/Card";
import ListSeparator from "../ListSeparator";
import { styles } from "./HeaderStyles";

export default function Header({
  title,
  secondary,
  hasActionButton,
  hideBottomLine,
  description,
  onCrossPress,
  primary,
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <View style={styles(secondary, hideBottomLine).headerContainer}>
      {secondary && (
        <TouchableOpacity
          onPress={onCrossPress}
          style={styles(secondary, hideBottomLine).icon}
        >
          <Icon
            name="x"
            size={25}
            color="rgb(7, 56, 205)"
            style={{ padding: 20 }}
          />
        </TouchableOpacity>
      )}
      <View style={styles(secondary, hideBottomLine).title}>
        <Text
          style={
            secondary
              ? {
                  fontSize: 15,
                  textAlign: "center",
                }
              : styles(secondary, hideBottomLine).headerTitleText
          }
        >
          {title}
        </Text>
        {description && (
          <Text style={styles(secondary, hideBottomLine).descriptionText}>
            {description}
          </Text>
        )}
      </View>
    </View>
  );
}
