import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronLeftIcon,
  MinusIcon,
  PlusIcon,
} from "react-native-heroicons/solid";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { useDispatch } from "react-redux";
import { favourites } from "../../redux/action/watchAction";
import { useSelector } from "react-redux";
import { Rating } from "react-native-ratings";
export default function FoodDetailsScreen() {
  const item = useSelector((state) => state.watches.watch);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleFavourites = () => {
    dispatch(favourites(item.id));
  };
  function averageRating(feedbacks) {
    if (feedbacks.length === 0) return 0;
    const sum = feedbacks.reduce((acc, { rating }) => acc + rating, 0);
    return (sum / feedbacks.length).toFixed(1);
  }
  return (
    <View className="flex-1 relative  bg-white">
      <Image
        style={{ borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}
        source={{
          uri: "https://www.shutterstock.com/shutterstock/photos/2128959116/display_1500/stock-vector-abstract-waving-particle-technology-background-design-abstract-wave-moving-dots-flow-particles-hi-2128959116.jpg",
        }}
        className="h-96 w-full absolute"
        blurRadius={40}
      />
      <SafeAreaView className="flex-1">
        <View className="flex-row justify-between mx-4 items-center">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-white rounded-2xl p-3 shadow"
          >
            <ChevronLeftIcon size="23" stroke={50} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleFavourites}
            className="bg-white rounded-2xl p-3 shadow"
          >
            <HeartIcon size="23" color={item.favourites ? "red" : "gray"} />
          </TouchableOpacity>
        </View>
        <ScrollView className="flex">
          <View className="flex justify-center items-center">
            <Image
              className="h-48 w-48 rounded-2xl"
              source={{ uri: item.image }}
            />
            <Text className="text-3xl text-white">{item.watchName}</Text>
          </View>
          <View className="flex-row justify-center items-center mt-6">
            <View className="flex-row justify-between items-center bg-gray-100 rounded-2xl space-x-3">
              <TouchableOpacity className="rounded-2xl bg-white border-2 border-gray-200 p-3">
                <MinusIcon size="20" strokeWidth={1.8} color="black" />
              </TouchableOpacity>
              <Text className="text-xl">1</Text>
              <TouchableOpacity className="rounded-2xl bg-white border-2 border-gray-200 p-3">
                <PlusIcon size="20" strokeWidth={1.8} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View className="mx-4 mt-6 space-y-3 h-60">
            <Animatable.Text
              animation="slideInUp"
              className="text-3xl font-semibold text-gray-800"
            >
              Description
            </Animatable.Text>
            <Animatable.Text
              delay={100}
              animation="slideInUp"
              className="text-gray-600 tracking-wider"
            >
              {item.description}
            </Animatable.Text>
          </View>
          {/* add to cart button */}
          <View className="mx-4 flex-row justify-between items-center">
            <Animatable.Text
              delay={100}
              animation="slideInLeft"
              className="text-3xl font-semibold text-gray-800"
            >
              ${item.price}
            </Animatable.Text>
            <Animatable.View animation="slideInRight">
              <TouchableOpacity className="bg-gray-800 p-4 px-14 rounded-2xl">
                <Text className="text-white text-xl font-semibold">
                  Add to Cart
                </Text>
              </TouchableOpacity>
            </Animatable.View>
          </View>
          <View className="px-4 py-2">
            <Text className="text-xl font-bold text-black">
              Ratings and Reviews
            </Text>
            <View className="flex-row items-center">
              <Text className="text-lg text-yellow-500">
                <Rating
                  ratingBackgroundColor={"white"}
                  imageSize={20}
                  readonly
                  startingValue={averageRating(item.feedbacks)}
                />
              </Text>
              <Text className="text-sm text-gray-600 ml-2">
                ({item.feedbacks.length} reviews)
              </Text>
            </View>

            {item.feedbacks.map((feedback, index) => {
              return (
                <View
                  key={index}
                  className="border-b border-gray-300 mt-2 pb-2  "
                >
                  <Text className="font-bold text-black ">
                    {feedback.author}
                  </Text>
                  <Text className="text-sm text-gray-500">
                    {feedback.comment}
                  </Text>
                  <Text>
                    <Rating
                      imageSize={20}
                      readonly
                      startingValue={feedback.rating}
                    />
                  </Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
