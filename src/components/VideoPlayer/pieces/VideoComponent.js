import { React } from "react";
import { Video } from "expo-av";
import { styles } from "../VideoPlayer.style";
import { ResizeMode } from "expo-av";

/**
 *
 * @param {*} props
 *
 * @returns le lecteur de vidéo.
 */
const VideoComponent = (props) => {
  return (
    <Video
      ref={props.video}
      style={[
        styles.video,
        {
          aspectRatio: props.videoInfo.videoRatio,
          backgroundColor: props.backgroundColor,
          //flex: currentOrientation === "LANDSCAPE" ? 1 : null,
          //width: currentOrientation === "PORTRAIT" ? DEVICE_WIDTH : null,
          height: props.videoInfo.videoType === "PORTRAIT" ? "100%" : null,
          width: props.videoInfo.videoType === "LANDSCAPE" ? "100%" : null,
        },
      ]}
      source={{
        uri: props.videoURI,
      }}
      useNativeControls={false}
      shouldPlay={props.autoplay}
      resizeMode={ResizeMode.CONTAIN}
      isLooping={props.loop} // le listener permettant de
      // faire des changements
      // selon le statut du lecteur vidéo
      // (isPlaying, etc....)
      onPlaybackStatusUpdate={(status) => {
        //
        props.setStatus(() => status);
      }} // Update the video Ratio once done loading the first frame of the video
      onReadyForDisplay={props.updateVideoRatioOnDisplay}
    ></Video>
  );
};

export { VideoComponent };
