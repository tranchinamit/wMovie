import { ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import SectionUpdatedMovies from '../components/SectionUpdatedMovies';
import SectionTVShows from '../components/SectionTVShows';
import SectionMovies from '../components/SectionMovies';
import SectionAnime from '../components/SectionAnime';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import WatchingFilm from '../components/WatchingFilm';
import SearchBox from '../components/SearchBox';

export default function TabHome({ navigation }: RootTabScreenProps<'TabHome'>) {
  return (
    <View style={styles.container}>
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
  scrollView: {
    marginHorizontal: 8,
  },
});
