import { Text, TouchableOpacity } from "react-native";

// nécessaire
import React from "react";

export const ClickableTextIcon = (props) => {
  return (
    <TouchableOpacity
      style={{
        height: props.height ?? 50,
        width: props.width ?? null,
        justifyContent: "center",
        flex: 1,
        paddingLeft: 15,
      }}
      onPress={props.onPress}
    >
      <Text
        style={{
          fontFamily: props.fontFamily,
          color: props.color,
          fontSize: props.textSize,
          backgroundColor: props.backgroundColor,
          borderRadius: 20,
          borderWidth: 2,
          borderColor: props.borderColor ?? "transparent",
          padding: 5,
          margin: 5,
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};
