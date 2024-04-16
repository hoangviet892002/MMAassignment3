import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import {
  AdjustmentsHorizontalIcon,
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/solid";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { WatchCard } from "../../components";
const FavouritesScreen = () => {
  const watches = useSelector((state) => state.watches.products);
  const [watchesDisplay, setWatchDisplay] = useState([]);

  useEffect(() => {
    const filteredWatches = watches.filter(
      (watch) => watch.favourites === true
    );
    setWatchDisplay(filteredWatches);
  }, [watches]);

  return (
    <View className="flex-1 relative">
      <Image
        blurRadius={40}
        className="absolute w-full h-full"
        source={{
          uri: "https://www.shutterstock.com/shutterstock/photos/2128959116/display_1500/stock-vector-abstract-waving-particle-technology-background-design-abstract-wave-moving-dots-flow-particles-hi-2128959116.jpg",
        }}
      />
      <SafeAreaView className="flex-1">
        {/* top button */}
        <View className="flex-row justify-between items-center mx-4">
          <View className="bg-white shadow-md rounded-2xl p-3">
            <Bars3CenterLeftIcon size={25} stroke={100} color="black" />
          </View>
          <View
            className="rounded-2xl"
            style={{ backgroundColor: "rgba(255,255,255,0.7)", padding: 3 }}
          >
            <Image
              className="h-12 w-12 rounded-3xl"
              source={{
                uri: "https://storage.googleapis.com/cdn-entrade/bovagau-meme/screenshot_93_1682412512",
              }}
              style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
            />
          </View>
        </View>
        {/* punch line */}
        <View className="my-12 space-y-2">
          <Text className="mx-4 text-5xl font-medium text-gray-100">
            Elegant and
          </Text>
          <Text className="mx-4 text-5xl font-medium text-gray-100">
            <Text className="font-extrabold">Timeless </Text>Watches
          </Text>
        </View>

        {/* wacthes */}
        <ScrollView className="my-6 py-6 ">
          <View className="mx-4 flex-row justify-between flex-wrap">
            {watchesDisplay.map((item, index) => {
              return <WatchCard item={item} key={index} />;
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
export default FavouritesScreen;
