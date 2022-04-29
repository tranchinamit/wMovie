/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const LINKING: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabHome: {
            screens: {
              TabHome: 'TabHome',
            },
          },
          TabPlaying: {
            screens: {
              TabPlaying: 'TabPlaying',
            },
          },
          TabFavorite: {
            screens: {
              TabFavorite: 'TabFavorite',
            },
          },
          TabSettings: {
            screens: {
              TabSettings: 'TabSettings',
            },
          },
        },
      },
      Modal: 'Modal',
      NotFound: '*',
    },
  },
};

export default LINKING;
