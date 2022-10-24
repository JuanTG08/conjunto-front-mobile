import AsyncStorage from "@react-native-async-storage/async-storage";

export default class useLocalStorage {
  static async setItem(key: string, value: string) {
    try {
      await AsyncStorage.setItem(key, value);
      return true;
    } catch (err) {
      throw err;
    }
  }
  static async getItem(key: string) {
    try {
      const res = await AsyncStorage.getItem(key);
      if (res !== null) {
        return res;
      } else {
        return false;
      }
    } catch (err) {
      throw err;
    }
  }
  static async getAll() {
    try {
      const list = await AsyncStorage.getAllKeys();
      return list.length === 0 ? false : list;
    } catch (err) {
      throw err;
    }
  }
  static async multiGet(keys: string[]) {
    try {
      return await AsyncStorage.multiGet(keys);
    } catch (err) {
      throw err;
      return false;
    }
  }
  static async updateItem(key: string, value: string) {
    await useLocalStorage.removeItem(key);
    return await useLocalStorage.setItem(key, value);
  }
  static async removeItem(key: string) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (err) {
      throw err;
    }
  }
  static async Clear() {
    try {
      await AsyncStorage.clear();
    } catch (err) {
      throw err;
    }
  }
}
