import { React, useState } from "react";
import { View, TouchableOpacity, ActivityIndicator } from "react-native";
import { styles } from "../VideoPlayer.style";
import { Constants } from "src/constants/Constants";
import { Icon } from "@rneui/themed";

export function VideoControls(props) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <View style={styles.videoControls}>
      <TouchableOpacity
        onPress={() => {
          if (props.videoInfo.videoLoaded === true) {
            let backTime =
              props.status.positionMillis - Constants.TRAVEL_TIME_MSEC;

            if (backTime < 0) {
              backTime = 0;
            }


            props.current.playFromPositionAsync(backTime);
          }
        }}
        style={styles.backForward}
      ></TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          if (props.videoInfo.videoLoaded === true) {

            if (props.status.isPlaying) {
              setIsPaused(true);
              props.current.pauseAsync();
            } else {
              setIsPaused(false);
              props.current.playAsync();
            }
          }
        }}
        style={styles.pauseResume}
      >
        {IconGivenPlaybackStatus(props, isPaused)}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          if (props.videoInfo.videoLoaded === true) {
            let fwdTime =
              props.status.positionMillis + Constants.TRAVEL_TIME_MSEC;

            if (
              props.status.durationMillis != null &&
              fwdTime > props.status.durationMillis
            ) {
              fwdTime = 0;
            }


            props.current.playFromPositionAsync(fwdTime);
          }
        }}
        style={styles.backForward}
      ></TouchableOpacity>
    </View>
  );
}

/* licone a afficher selon que la vidéo joue ou charge, ou autre */
function IconGivenPlaybackStatus(props, isPaused) {
  if (props.videoInfo.videoLoaded) {
    if (props.status.isPlaying) {
      // ca joue
      return null;
    }
    // il faut rajouter cette clause isPaused car il y a un truc chiant
    // ou quand on appuie sur pause, il y a du buffering pendant quelques secondes
    // avant de pauser.
    else if (props.status.isBuffering && isPaused === false) {
      // ca charge
      return (
        <ActivityIndicator size="large" color={props.color}></ActivityIndicator>
      );
    } else {
      // pause
      return (
        <Icon
          type={"material-community"}
          name={"play"}
          color={props.color}
          size={35}
        />
      );
    }
  } else {
    return null;
  }
}
