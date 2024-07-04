import { StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/base";

// nécessaire
import React from "react";

export const ClickableIcon = (props) => {
  return (
    <TouchableOpacity
      style={{
        height: props.height ?? 50,
        width: props.width ?? 50,
        justifyContent: "center",
      }}
      onPress={props.onPress}
    >
      <Icon
        type={"material-community"}
        name={props.name}
        color={props.color}
        size={props.size}
        containerStyle={[{
          backgroundColor: props.backgroundColor,
          borderWidth: 2, // Adjust the width to your preference
          borderColor: props.borderColor ?? "transparent", // Adjust the color to your preference
          borderRadius: 50, // Adjust the radius to make it rounded
        }]}

      />
    </TouchableOpacity>
  );
};

