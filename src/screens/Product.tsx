import React, { useState } from "react";
<<<<<<< HEAD
import { SafeAreaView, ScrollView, View } from "react-native";
import tw from "../../lib/tailwind";

import Note from "../components/product-screen/note";
import Toolbar from "../components/product-screen/toolbar";
import BasicInfo from "../components/product-screen/basic-info";
import SizeList, { SIZE_LIST } from "../components/product-screen/size-list";
import ToppingList, {
  TOPPING_LIST,
} from "../components/product-screen/topping-list";
import GiftList, { GIFT_LIST } from "../components/product-screen/gift-list";
=======
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "../../lib/tailwind";
import CustomText from "../components/common/text";
import { StarIcon } from "react-native-heroicons/solid";
import { colors } from "../theme";
import { formatNumberWithDot } from "../utils";
import { Checkbox } from "../components/common/checkbox";
import TextField from "../components/common/text-field";

const TOPPING_LIST = [
  {
    id: 0,
    name: "Mango",
    image: require("../../assets/images/topping/mango.png"),
    color: colors.primary.main,
    price: 10000,
    categoryId: "",
  },
  {
    id: 1,
    name: "Grape",
    image: require("../../assets/images/topping/grape.png"),
    color: "#9547f0",
    price: 10000,
    categoryId: "",
  },
];

const SIZE_LIST = [
  {
    id: 2,
    name: "8x5",
    price: 0,
  },
  {
    id: 3,
    name: "13x6",
    price: 100000,
  },
  {
    id: 4,
    name: "17x8",
    price: 180000,
  },
  {
    id: 5,
    name: "21x8",
    price: 260000,
  },
];

const GIFT_LIST = [
  {
    id: 6,
    name: "Candle(custom)",
    price: 0,
    image: require("../../assets/images/gift/candle.png"),
  },
  {
    id: 7,
    name: "Balloon (2pc)",
    price: 0,
    image: require("../../assets/images/gift/balloon.png"),
  },
  {
    id: 8,
    name: "Birthday hat (4pc)",
    price: 0,
    image: require("../../assets/images/gift/birthdayHat.png"),
  },
  {
    id: 9,
    name: "Birthday stick (2pc)",
    price: 0,
    image: require("../../assets/images/gift/birthdayStick.png"),
  },
];
>>>>>>> ba93e08 (feat: UI Product screen)

const ProductScreen = () => {
  const [selectedSize, setSelectedSize] = useState(SIZE_LIST[0]);

  const [selectedTopping, setSelectedTopping] = useState(TOPPING_LIST[0]);

  const [selectedGift, setSelectedGift] = useState(GIFT_LIST[0]);

  return (
    <View style={tw`bg-background flex-1`}>
      <ScrollView>
        <SafeAreaView>
<<<<<<< HEAD
          <View style={tw`p-5`}>
            <BasicInfo selectedSize={selectedSize} />
            <SizeList
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />
            <ToppingList
              selectedTopping={selectedTopping}
              setSelectedTopping={setSelectedTopping}
            />
            <GiftList
              selectedGift={selectedGift}
              setSelectedGift={setSelectedGift}
            />
            <Note />
          </View>
        </SafeAreaView>
      </ScrollView>
      <Toolbar />
=======
          <Image
            source={require("../../assets/images/example.png")}
            style={{
              width: "100%",
              height: undefined,
              aspectRatio: 6 / 5,
              ...tw`rounded-xl`,
            }}
            resizeMode="cover"
          />
        </SafeAreaView>

        <View style={tw`p-5`}>
          <CustomText style={tw`text-2xl`}>Vanilla Berry Dream cake</CustomText>
          <View style={tw`flex-row gap-1 justify-between items-center mt-2`}>
            <View style={tw`flex-row items-center`}>
              <StarIcon color={colors.primary.main} size={18} />
              <CustomText style={tw`text-text-light font-semibold`}>
                4.5
              </CustomText>
              <View style={tw`border-l h-4 border-l-smoke-main mx-2`}></View>
              <CustomText style={tw`text-text-light font-bold`}>
                15 solds
              </CustomText>
            </View>

            <CustomText style={tw`text-2xl text-primary-main font-semibold`}>
              {formatNumberWithDot(190000 + selectedSize.price)}
            </CustomText>
          </View>

          <View>
            <CustomText style={tw`text-xl mt-7.5`}>Size</CustomText>
            <View style={tw`-mr-5 pt-4`}>
              <FlatList
                horizontal
                data={SIZE_LIST}
                keyExtractor={(item) => item.id + ""}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => setSelectedSize(item)}
                    style={tw`px-5 py-2 rounded-xl mr-4 ${
                      item.id === selectedSize.id
                        ? "bg-primary-lighter border border-primary-light"
                        : "bg-smoke-light"
                    }`}
                  >
                    <CustomText style={tw`text-base`}>{item.name}cm</CustomText>
                  </TouchableOpacity>
                )}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>

          <View>
            <CustomText style={tw`text-xl mt-7.5`}>Toppings</CustomText>
            <View style={tw`-mr-5 pt-4`}>
              <FlatList
                horizontal
                data={TOPPING_LIST}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={tw`items-center mr-4`}
                    onPress={() => setSelectedTopping(item)}
                  >
                    <View
                      style={{
                        ...tw`rounded-full z-1 ${
                          selectedTopping.id === item.id
                            ? `bg-white border border-[${item.color}]`
                            : "bg-smoke-light"
                        }`,
                        width: 46,
                        height: 46,
                        marginBottom: -23,
                      }}
                    >
                      <View
                        style={{
                          ...tw`p-0.5 rounded-full ${
                            selectedTopping.id === item.id
                              ? `bg-[${item.color}]/20`
                              : ""
                          }`,
                        }}
                      >
                        <Image
                          source={item.image}
                          style={{
                            width: "100%",
                            height: undefined,
                            aspectRatio: 1,
                            borderRadius: 100,
                          }}
                          resizeMode="cover"
                        />
                      </View>
                    </View>

                    <View
                      style={{
                        backgroundColor: `${item.color}20`,

                        ...tw`px-5 py-3  rounded-xl items-center ${
                          selectedTopping.id === item.id
                            ? `bg-[${item.color}]/20 border border-[${item.color}]`
                            : "bg-smoke-light"
                        }`,
                      }}
                    >
                      <CustomText style={tw`text-lg mt-2`}>
                        {item.name}
                      </CustomText>
                      <CustomText style={tw`text-text-main font-light`}>
                        + {formatNumberWithDot(item.price)}
                      </CustomText>
                    </View>
                  </TouchableOpacity>
                )}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>

          <View>
            <CustomText style={tw`text-xl mt-7.5`}>Free gift</CustomText>
            <CustomText style={tw`text-base mt-1.5 font-light`}>
              Get one free gift
            </CustomText>
            <FlatList
              data={GIFT_LIST}
              keyExtractor={(item) => item.id + ""}
              renderItem={({ item }) => {
                const isChecked = selectedGift.id === item.id;
                return (
                  <TouchableOpacity
                    style={tw`flex-row gap-5 mt-4.5`}
                    onPress={() => setSelectedGift(item)}
                  >
                    <Image
                      style={{
                        height: 28,
                        width: undefined,
                        aspectRatio: 1,
                      }}
                      resizeMode="contain"
                      source={item.image}
                    />
                    <CustomText
                      style={tw`text-base  flex-1 ${
                        isChecked ? "text-text-main" : "text-text-light"
                      }`}
                    >
                      {item.name}
                    </CustomText>

                    <Checkbox checked={isChecked} />
                  </TouchableOpacity>
                );
              }}
            />
          </View>

          <View>
            <CustomText style={tw`text-xl mt-7.5`}>Notes</CustomText>
            <TextField
              onChangeText={() => {}}
              inputProp={{
                multiline: true,
                numberOfLines: 4,
                maxLength: 200,
              }}
              placeholder="Put your wishes for the recipient here"
            />
          </View>
        </View>
      </ScrollView>
>>>>>>> ba93e08 (feat: UI Product screen)
    </View>
  );
};

export default ProductScreen;
