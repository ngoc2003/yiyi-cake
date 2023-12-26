import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "../../lib/tailwind";
import { MapPinIcon } from "react-native-heroicons/solid";
import {
  AdjustmentsVerticalIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ShoppingBagIcon,
} from "react-native-heroicons/outline";
import { colors } from "../theme";
import TextField from "../components/common/text-field";
import CustomText from "../components/common/text";
import CategoryList from "../components/common/category-list";

const CATEGORY_LIST = [
  {
    title: "Birthday",
    icon: require("../../assets/images/category/birthday.png"),
  },
  {
    title: "Cupcake",
    icon: require("../../assets/images/category/cupcake.png"),
  },
  {
    title: "Decoration",
    icon: require("../../assets/images/category/decoration.png"),
  },
];

const HomeScreen = () => {
  return (
    <View style={tw`bg-background flex-1 px-5 py-8`}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <SafeAreaView>
          <View style={tw`flex-row items-center`}>
            <MapPinIcon size={26} color={colors.primary.main} />
            <CustomText style={tw`flex-1 text-text-light text-base ml-2`}>
              Phu Lam, Ha Dong
            </CustomText>
            <View style={tw`flex-row gap-2`}>
              <TouchableOpacity>
                <ShoppingBagIcon
                  size={26}
                  strokeWidth={2}
                  color={colors.primary.main}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <ChatBubbleOvalLeftEllipsisIcon
                  size={26}
                  strokeWidth={2}
                  color={colors.primary.main}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={tw`flex-row my-7 gap-2.5 w-full`}>
            <View style={tw`flex-1`}>
              <TextField
                containerProp={{
                  style: tw`mt-0`,
                }}
                placeholder="Searching for cake . . ."
                onChangeText={() => {}}
              />
            </View>
            <TouchableOpacity
              style={{
                aspectRatio: 1,
                ...tw`bg-primary-main rounded-xl items-center justify-center`,
              }}
            >
              <AdjustmentsVerticalIcon color="#000" />
            </TouchableOpacity>
          </View>

          <View>
            <CustomText style={tw`text-lg mb-4`}>Categories</CustomText>
            <FlatList
              data={CATEGORY_LIST}
              horizontal
              keyExtractor={(item) => item.title}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View
                  style={tw`mr-2.5 flex-row items-center gap-1.5 border border-primary-main rounded-xl text-sm py-1 px-1.5`}
                >
                  <Image source={item.icon} style={{ height: 32, width: 32 }} />
                  <CustomText>{item.title}</CustomText>
                </View>
              )}
            />
          </View>
          <CategoryList title="Popular" data={[1, 2, 3, 4]} />
          <CategoryList title="Birthday cake" data={[5, 6, 7, 8]} />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
