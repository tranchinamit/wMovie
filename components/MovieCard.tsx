import { View, Text, TextProps } from './Themed';
import { StyleSheet, ImageBackground } from 'react-native';
import { THUMB_IMG, extractDateString, timenDate } from '../utils';
import LAYOUT from '../constants/Layout';
import FAKE_IMAGE from '../assets/images/image.jpg';

interface IProps {
  _id: string;
  slug: string;
  origin_name: string;
  name: string;
  modified: {
    time: string;
  }
}

export default ({ _id, slug, origin_name, name, modified: { time } }: IProps) => {

  return <View style={styles.card}>
    <ImageBackground
      // source={{ uri: THUMB_IMG({ slug }) }}
      source={require("../assets/images/image.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{name}</Text>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{origin_name}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="gray" />
      <Text style={styles.time}>{timenDate(time)}</Text>

    </ImageBackground>

  </View>
}

const styles = StyleSheet.create({
  card: {
    width: LAYOUT.window.width < 500 ? 160 : 220,
    height: LAYOUT.window.width < 500 ? 200 : 280,
    borderRadius: LAYOUT.window.width < 500 ? 30 : 40,
    marginVertical: 12,
    marginHorizontal: 18,
    overflow: 'hidden',
    //  Ios
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    // Android
    elevation: 4,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: 'column',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    // backgroundColor: '#EFEFEF',
    color: 'black',
    textAlign: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
    height: 24,
  },
  time: {
    fontFamily: 'nunito',
    color: 'black',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    textAlign: 'center',
    paddingVertical: 4,
  },
  separator: {
    height: 1,
    width: '80%',
    alignSelf: 'center'
  },
});
