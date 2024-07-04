/* PLOP_INJECT_IMPORT */
import { GetOrientation } from "src/services/GetOrientation/GetOrientation";
import { React, useEffect } from "react";
import { Text, View, ScrollView } from "react-native";
import { styles } from "./MessageAvecLayout.style.js";

/**
 *
 * @param {*} un objet contenant du style
 * pour notre message avec bouton
 *
 * @returns un message avec bouton
 */

function MessageWithComponent(props) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: props.backgroundColor,
          flexDirection: props.orientation === "PORTRAIT" ? "column" : "row",
        },
      ]}
    >
      {/*le message */}
      <View
        style={[
          styles.evenContainerStyle,
          {
            flex: props.messageFlex,
            fontSize: props.messageFontSize,
          },
        ]}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        >
          <Text
            style={{
              fontSize: 24,
              color: props.messageTextColor,
              fontFamily: props.messageTextFont,
            }}
          >
            {props.messageText}
          </Text>
        </ScrollView>
      </View>

      {/*le component */}
      <View
        style={[
          styles.evenContainerStyle,
          {
            flex: props.componentFlex,
          },
        ]}
      >
        {props.component()}
      </View>
    </View>
  );
}

/**
 *
 * @param {*} un objet contenant du style
 * pour notre message avec bouton
 *
 * @returns un message avec bouton
 */

function ComponentWithMessage(props) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: props.backgroundColor,
          flexDirection: props.orientation === "PORTRAIT" ? "column" : "row",
        },
      ]}
    >
      {/*le component */}
      <View
        style={[
          styles.evenContainerStyle,
          {
            flex: props.componentFlex,
          },
        ]}
      >
        {props.component()}
      </View>

      {/*le message */}
      <View
        style={[
          styles.evenContainerStyle,
          {
            flex: props.messageFlex,
          },
        ]}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        >
          <Text
            style={{
              fontSize: props.messageFontSize,
              color: props.messageTextColor,
              fontFamily: props.messageTextFont,
            }}
          >
            {props.messageText}
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}

const MessageAvecLayout = ({
  backgroundColor,
  messageTextColor,
  messageTextFont,
  messageText,
  component,
  messageFlex,
  componentFlex,
  componentFirst,
  messageFontSize,
}) => {
  onComponentLifeAndDeath();

  // debout ou couché ?
  const orientation = GetOrientation({});

  if (componentFirst === false) {
    return (
      <MessageWithComponent
        orientation={orientation}
        backgroundColor={backgroundColor}
        messageTextColor={messageTextColor}
        messageTextFont={messageTextFont}
        messageText={messageText}
        component={component}
        messageFlex={messageFlex}
        messageFontSize={messageFontSize}
        componentFlex={componentFlex}
      ></MessageWithComponent>
    );
  } else {
    return (
      <ComponentWithMessage
        orientation={orientation}
        backgroundColor={backgroundColor}
        messageTextColor={messageTextColor}
        messageTextFont={messageTextFont}
        messageText={messageText}
        component={component}
        messageFlex={messageFlex}
        componentFlex={componentFlex}
        messageFontSize={messageFontSize}
      ></ComponentWithMessage>
    );
  }
};

/**
 * @returns rien
 *
 * Ceci nous permet de pouvoir faire
 * des choses avant/après que le component soit contruit/détruit
 */
const onComponentLifeAndDeath = () => {
  useEffect(() => {
    // Anything in here is fired on component mount.

    return () => {
      // Anything in here is fired on component unmount.
    };
  }, []);
};

export { MessageAvecLayout };
