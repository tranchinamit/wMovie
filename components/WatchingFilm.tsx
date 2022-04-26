import { View, Text, TextProps } from './Themed';
import { StyleSheet, ImageBackground } from 'react-native';
import { THUMB_IMG, extractDateString, timenDate } from '../utils';
import LAYOUT from '../constants/Layout';
import videoSource from './video.mp4';
import { Video, AVPlaybackStatus } from 'expo-av';
import { useRef, useState } from 'react';

const URL = `https://1080.hdphimonline.com/20220420/17802_fcc237c6/index.m3u8`

interface IProps {
  m3u8Link: string;
}

export default ({ m3u8Link }: IProps) => {
  const videoRef = useRef(null);
  const [status, setStatus] = useState({});

  // console.log(status)

  return <View style={styles.wrapVideo}>
    <Video
      key={"1"}
      ref={videoRef}
      style={styles.video}
      // source={videoSource}
      source={{ uri: m3u8Link || URL }}
      useNativeControls
      resizeMode="contain"
      isLooping
    // onPlaybackStatusUpdate={status => setStatus(() => status)}
    />
  </View >
}

const styles = StyleSheet.create({
  wrapVideo: {
    flex: 1,
  },
  video: {
    alignSelf: 'center',
    width: LAYOUT.window.width,
    height: LAYOUT.window.height - 120,
  },
});
