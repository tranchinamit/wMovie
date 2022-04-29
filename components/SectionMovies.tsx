import { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { View, Text, TextProps } from './Themed';
import { NEW_MOVIES_PAGE1 } from '../mocks/newMovies';
import LAYOUT from '../constants/Layout';
import { SectionTitle } from './StyledText';
import { movieAPI } from '../services';
import MovieDetailsCard from './MovieDetailsCard';

// console.log(NEW_MOVIES_PAGE1);

export default () => {
  const [arr, setArr] = useState<any[]>([]);

  // useEffect(() => {
  //   (async () => {
  //     const res: any = await movieAPI.getMovies();
  //     setArr(res?.data?.pageProps?.data?.items);
  //   })()
  // }, [])

  return <View style={styles.container}>
    <SectionTitle>Movies</SectionTitle>
    <FlatList
      data={NEW_MOVIES_PAGE1?.items}
      // data={arr}
      style={styles.flatList}
      numColumns={1}
      horizontal={true}
      keyExtractor={(e) => e._id}
      renderItem={({ item }) => {
        return (
          <MovieDetailsCard {...item} />
        );
      }}
    />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'column',
    minHeight: LAYOUT.window.width < 500 ? 290 : 370,
  },
  flatList: {
    flex: 1,
  },
});
