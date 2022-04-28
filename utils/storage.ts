import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveToStorage = async (name: string, value: any) => {
  try {
    await AsyncStorage.setItem(name, JSON.stringify(value))
  } catch (err) {
    console.log(err)
  }
}

export const getFromStorage = async (name: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(name)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (err) {
    console.log(err)
  }
}

export const clearStorage = async (name: string) => {
  try {
    await AsyncStorage.removeItem(name)
  } catch (err) {
    console.log(err)
  }
}


