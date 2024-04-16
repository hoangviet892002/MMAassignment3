import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FavouritesScreen } from "../screens";
const FavouriesStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Favouries">
      <Stack.Screen
        name="Favouries"
        component={FavouritesScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default FavouriesStack;
