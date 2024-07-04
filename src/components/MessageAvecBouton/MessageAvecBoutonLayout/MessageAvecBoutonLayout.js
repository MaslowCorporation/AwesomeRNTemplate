/* PLOP_INJECT_IMPORT */
import { GetOrientation } from 'src/services/GetOrientation/GetOrientation';
import { React, useEffect } from 'react';
import { Text, View, Image, ScrollView, StatusBar } from 'react-native';
import { styles } from './MessageAvecBoutonLayout.style.js';
import { CustomButton } from 'src/components/CustomButton/CustomButton';
import { RunIfPossible } from 'src/services/RunIfPossible/RunIfPossible.js';
import { SoundPlayer } from 'src/services/SoundPlayer/SoundPlayer.js';
import { Constants } from 'src/constants/Constants.js';

/**
 *
 * @param {*} un objet contenant du style
 * pour notre message avec bouton
 *
 * @returns un message avec bouton
 */
const MessageAvecBoutonLayout = ({
  buttonLateralMargin,
  clickSound,
  backgroundColor,
  iconPath,
  iconWidth,
  iconHeight,
  messageTextColor,
  messageTextFont,
  messageTextSize,
  messageMarginLateral,
  messageText,
  buttonText,
  buttonBackgroundColor,
  buttonTextColor,
  buttonTextFont,
  onButtonClicked,
  buttonLogoName,
  buttonLogoSize,
  buttonLogoColor,
}) => {
  onComponentLifeAndDeath();

  // debout ou couché ?
  const orientation = GetOrientation({});

  const type_icon = typeof iconPath;

  if (type_icon == 'string') {
    iconPath = { uri: iconPath };
  }

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor,
          flexDirection: orientation === 'PORTRAIT' ? 'column' : 'row',
        },
      ]}>
      <StatusBar
        barStyle={'dark-content'}
        animated={true}
        backgroundColor={Constants.defaultBackgroundColor}
      />
      {/*le logo */}
      <View style={styles.evenContainerStyle}>
        <Image
          source={iconPath}
          style={[styles.logoStyle, { width: iconWidth, height: iconHeight }]}
        />
      </View>

      {/*le texte */}
      <View style={styles.evenContainerStyle}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <Text
            style={[
              styles.blackText,
              {
                color: messageTextColor,
                fontFamily: messageTextFont,
                fontSize: messageTextSize,
                marginLeft: messageMarginLateral,
                marginRight: messageMarginLateral,
              },
            ]}>
            {messageText}
          </Text>
        </ScrollView>
      </View>

      {/*le bouton*/}
      <View style={styles.evenContainerStyle}>
        <CustomButton
          buttonText={buttonText}
          buttonContainerStyle={[
            styles.buttonContainerStyle,
            {
              backgroundColor: buttonBackgroundColor,
              margin: buttonLateralMargin,
            },
          ]}
          buttonTextStyle={[
            styles.buttonTextStyle,
            { color: buttonTextColor, fontFamily: buttonTextFont },
          ]}
          onClick={() => {
            SoundPlayer({ sound: clickSound });

            RunIfPossible({ func: onButtonClicked });
          }}
          buttonLogoName={buttonLogoName}
          buttonLogoSize={buttonLogoSize}
          buttonLogoColor={buttonLogoColor}></CustomButton>
      </View>

      <StatusBar
        barStyle={'dark-content'}
        animated={true}
        backgroundColor={Constants.defaultBackgroundColor}
      />
    </View>
  );
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

export { MessageAvecBoutonLayout };
