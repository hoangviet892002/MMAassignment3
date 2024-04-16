const dbData = require("./db.json");
import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async () => {
  try {
    const jsonValue = JSON.stringify(dbData);
    await AsyncStorage.setItem("@db_data", jsonValue);
  } catch (e) {
    console.error("Error saving data", e);
  }
};
export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@db_data");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error("Error fetching data", e);
  }
};
