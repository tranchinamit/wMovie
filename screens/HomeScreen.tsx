import { ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import SectionUpdatedMovies from '../components/SectionUpdatedMovies';
import SectionTVShows from '../components/SectionTVShows';
import SectionMovies from '../components/SectionMovies';
import SectionAnime from '../components/SectionAnime';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import SearchBox from '../components/SearchBox';
import { LinearGradient } from 'expo-linear-gradient';

export default function TabHome({ navigation }: RootTabScreenProps<'TabHome'>) {
  return (
    <View style={styles.container}>
      <LinearGradient
        // colors={['rgba(0,0,0,0.3)', '#062C30']}
        colors={['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.01)']}
        start={{
          x: 0,
          y: 0
        }}
        end={{
          x: 0,
          y: 1
        }}
        style={styles.box} />
      <ScrollView style={styles.scrollView}>
        <SearchBox navigation={navigation} />
        <SectionUpdatedMovies />
        <SectionTVShows />
        <SectionMovies />
        <SectionAnime />
        {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabHome.tsx" /> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: '100%',
    height: 24,
    // flexDirection: 'column',
  },
  scrollView: {
    marginHorizontal: 8,
  },
});
