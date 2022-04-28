import { Platform, StyleSheet, ScrollView, ImageBackground } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { movieAPI } from '../services';
import { IMovie } from '../interface/movie';
import { OBJ_FILM } from '../mocks/movie';
import { SectionTitle } from '../components/StyledText';
import { removeHTMLTag } from '../utils';

const DATA_TYPE = { string: 1, array: 2, }

const arrInfo = [
  { label: 'Status', field: 'episode_current', type: DATA_TYPE.string },
  { label: 'Episodes', field: 'episode_total', type: DATA_TYPE.string },
  { label: 'Time', field: 'time', type: DATA_TYPE.string },
  { label: 'Year', field: 'year', type: DATA_TYPE.string },
  { label: 'Quality', field: 'quality', type: DATA_TYPE.string },
  { label: 'Language', field: 'lang', type: DATA_TYPE.string },
  // { label: 'Directors', field: 'director', type: DATA_TYPE.array },
  // { label: 'Actors', field: 'actor', type: DATA_TYPE.array },
  // { label: 'Categories', field: 'category', type: DATA_TYPE.array },
  // { label: 'Country', field: 'country', type: DATA_TYPE.array },

  { label: 'Status1', field: 'episode_current', type: DATA_TYPE.string },
  { label: 'Episodes1', field: 'episode_total', type: DATA_TYPE.string },
  { label: 'Time1', field: 'time', type: DATA_TYPE.string },
  { label: 'Year1', field: 'year', type: DATA_TYPE.string },
  { label: 'Quality1', field: 'quality', type: DATA_TYPE.string },
  { label: 'Language1', field: 'lang', type: DATA_TYPE.string },
]


export default () => {
  const route: RouteProp<any> = useRoute();

  const [objFilm, setObjFilm] = useState<IMovie | undefined>(OBJ_FILM);

  // useEffect(() => {
  //   try {
  //     const slug = route?.params?.slug || '';
  //     if (slug) {

  //       (async () => {
  //         const res = await movieAPI.getFilm(slug);
  //         setObjFilm(res?.data?.pageProps?.data);
  //       })()


  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [route])



  return (
    <View style={styles.container}>
      <SectionTitle>{objFilm?.item?.origin_name || ''}</SectionTitle>
      <ScrollView style={styles.scrollView}>
        <View style={styles.flexRow}>
          <View style={styles.flex}>
            {arrInfo.map(({ label, field, type }) => (
              <View key={label}>
                <View style={styles.flexRow}>
                  <Text style={styles.tag}>{label}</Text>
                  <Text style={styles.value}>{objFilm?.item?.[field] || `N/A`}</Text>
                </View>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
              </View>
            ))}
          </View>
          <View style={styles.flex}>
            <ImageBackground
              // source={{ uri: THUMB_IMG({ slug }) }}
              source={require("../assets/images/image.jpg")}
              resizeMode="cover"
              style={styles.image}
            />
          </View>
        </View>
        <View style={styles.flex}>
          <Text style={styles.content}>{removeHTMLTag(objFilm?.item?.content)}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  separator: {
    height: 1,
    width: '80%',
    marginLeft: '5%',
  },
  scrollView: {
    flex: 1,
    width: '100%'
  },
  flex: { flex: 1 },
  flexRow: { flex: 1, width: '100%', flexDirection: 'row', padding: 8 },
  tag: { flex: 1, fontWeight: 'bold', color: 'grey', maxWidth: 100 },
  value: { flex: 1, },
  image: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  content: {
    padding: 20,
    fontFamily: 'nunito'
  }
});
