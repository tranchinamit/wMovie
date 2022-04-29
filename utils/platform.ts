import { Platform, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

export const biOS = Platform.OS === "ios";

export const bAndroidOSTouchable = Platform.OS === 'android' && Platform.Version >= 21;

export const TouchableCmp = bAndroidOSTouchable ? TouchableNativeFeedback : TouchableOpacity;
