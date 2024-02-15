/* PLOP_INJECT_IMPORT */
import { React, useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { styles } from "./VideoPlayer.style";
import { Dimensions } from "react-native";
import { VideoControls } from "./pieces/VideoControls";
import { VideoComponent } from "./pieces/VideoComponent";
import { Spinner } from "./pieces/Spinner";

// le ratio par défaut à appliquer au component Video
const defaultScreenRatio =
  Dimensions.get("window").width / Dimensions.get("window").height;

/**
 *
 
<VideoPlayer
  backgroundColor={Constants.defaultContentColor}
  //fontFamily={Constants.defaultFontFamily}
  color={"red"}
  loop={true}
  autoplay={true}
  videoURI={
    //"https://maslowschool.org/static/streaming-playlists/hls/6be7ec0e-6e99-4ff1-b2b1-28f069491f3b/f0494f8a-f67b-49ad-8ce0-d48eeba63cc0-master.m3u8" // paysage
    "https://maslowschool.org/static/streaming-playlists/hls/290554c1-2f2d-4087-b74a-33c9e7d23ba5/4a7fcb9d-4eb5-43d8-9729-9d293a525596-master.m3u8" // PORTRAIT
  }
/>

 * 
 * @returns
 */
const VideoPlayer = (props) => {
  // permet de faire des actions lors de la création/destruction du component.
  onComponentLifeAndDeath(props.index);

  // quelle orientation à lécran ?
  // ("PORTRAIT" ou "LANDSCAPE")
  //const currentOrientation = GetOrientation({});

  // une chose permettant
  // play/pause/resume/stop/seek, etc...
  const video = useRef(null);

  // getter/setter permet de consulter/stocker le statut actuel de playback vidéo
  const [status, setStatus] = useState({});

  // videoRatio: le ratio de la vidéo en tant que nombre entier (par défaut celui de lécran)
  //
  // videoType: le ratio de la vidéo en tant que String
  // (PORTRAIT ou PAYSAGE, par défaut PORTRAIT)
  //
  // videoLoaded: la vidéo est elle prête a etre visionnée ?
  // (par défaut false)
  const [videoInfo, setVideoInfo] = useState({
    videoRatio: defaultScreenRatio,
    videoType: "PORTRAIT",
    videoLoaded: false,
  });

  // Update the videoRatio right after we know the video natural size
  const updateVideoRatioOnDisplay = (videoDetails) => {
    const { width, height } = videoDetails.naturalSize;
    const newVideoRatio = width / height;

    setVideoInfo({
      videoType: width >= height ? "LANDSCAPE" : "PORTRAIT",
      videoRatio: newVideoRatio,
      videoLoaded: true,
    });
  };


  return (
    <View
      style={[styles.container, { backgroundColor: props.backgroundColor }]}
    >

      <VideoComponent
        video={video}
        setStatus={setStatus}
        videoInfo={videoInfo}
        updateVideoRatioOnDisplay={updateVideoRatioOnDisplay}
        backgroundColor={props.backgroundColor}
        color={props.color}
        videoURI={props.videoURI}
        autoplay={props.autoplay}
        loop={props.loop}
      ></VideoComponent>

      {/*<ShowSpinnerWhileLoadingVideo
        backgroundColor={props.backgroundColor}
        color={props.color}
        videoInfo={videoInfo}
  ></ShowSpinnerWhileLoadingVideo>*/}


      <VideoControls
        current={video.current}
        status={status}
        videoInfo={videoInfo}
        color={props.color}
      ></VideoControls>
    </View>
  );
};

const ShowSpinnerWhileLoadingVideo = (props) => {
  // si la vidéo est pas chargée, affiche le spiiner
  return (
    !props.videoInfo.videoLoaded && (
      <Spinner
        backgroundColor={props.backgroundColor}
        color={props.color}
      ></Spinner>
    )
  );
};

/**
 * @returns rien
 *
 * Ceci nous permet de pouvoir faire
 * des choses avant/après que le component soit contruit/détruit
 */
const onComponentLifeAndDeath = (index) => {
  useEffect(() => {
    // Anything in here is fired on component mount.

    return () => {
      // Anything in here is fired on component unmount.
      //
    };
  }, []);
};

export { VideoPlayer };
