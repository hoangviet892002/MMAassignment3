import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

// Stacks

import { HomeStack, FavouriesStack } from "../stacks";
//Screen names
const homeName = "HomeStack";
const favouritesName = "FavouritesStack";
import { storeData, getData } from "../data/storedb";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../redux/action/watchAction";
import { getBrand } from "../redux/action/brandAction";

const Tab = createBottomTabNavigator();

function MainContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchStore = async () => {
      await storeData();
    };
    const fetchWatches = async () => {
      const data = await getData();
      const uniqueBrandNames = [
        ...new Set(data.map((watch) => watch.brandName)),
      ];
      dispatch(getBrand(uniqueBrandNames));
      dispatch(getProducts(data));
    };
    fetchStore();
    fetchWatches();
  }, []);
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === favouritesName) {
            iconName = focused ? "list" : "list-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={homeName}
        component={HomeStack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={favouritesName}
        component={FavouriesStack}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default MainContainer;
