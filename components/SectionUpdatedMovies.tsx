import { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { View, Text, TextProps } from './Themed';
import { NEW_MOVIES_PAGE1 } from '../mocks/newMovies';
import MovieCard from './MovieCard';
import LAYOUT from '../constants/Layout';
import { SectionTitle } from './StyledText';
import { movieAPI } from '../services';

export default () => {
  const [arr, setArr] = useState<any[]>([]);

  // useEffect(() => {
  //   (async () => {
  //     const res: any = await movieAPI.getNewUpdated();
  //     setArr(res.data.items);
  //   })()
  // }, [])


  return <View style={styles.container}>
    <SectionTitle>Updated Movies</SectionTitle>
    <FlatList
      data={NEW_MOVIES_PAGE1?.items}
      // data={arr}
      style={styles.flatList}
      numColumns={1}
      horizontal={true}
      keyExtractor={(e) => e._id}
      renderItem={({ item }) => {
        return (
          <MovieCard {...item} />
        );
      }}
    />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    minHeight: LAYOUT.window.width < 500 ? 290 : 370,
  },
  flatList: {
    flex: 1,
  },
});
