import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainContainer from "./src/navigations";
import { Provider } from "react-redux";
import configureStore from "./src/redux/store/configureStore";
export default function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainContainer />
      </NavigationContainer>
    </Provider>
    // <View className="flex-1 items-center justify-center bg-white">
    //   <Text>Open up App.js to start working on your app!</Text>
    // </View>
  );
}
