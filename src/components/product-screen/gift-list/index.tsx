import React from "react";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import CustomText from "../../common/text";
import tw from "../../../../lib/tailwind";
import { Checkbox } from "../../common/checkbox";

export const GIFT_LIST = [
  {
    id: 6,
    name: "Candle(custom)",
    price: 0,
    image: require("../../../../assets/images/gift/candle.png"),
  },
  {
    id: 7,
    name: "Balloon (2pc)",
    price: 0,
    image: require("../../../../assets/images/gift/balloon.png"),
  },
  {
    id: 8,
    name: "Birthday hat (4pc)",
    price: 0,
    image: require("../../../../assets/images/gift/birthdayHat.png"),
  },
  {
    id: 9,
    name: "Birthday stick (2pc)",
    price: 0,
    image: require("../../../../assets/images/gift/birthdayStick.png"),
  },
];

interface GiftListProps {
  selectedGift: any;
  setSelectedGift: React.Dispatch<React.SetStateAction<any>>;
}

const GiftList = ({ selectedGift, setSelectedGift }: GiftListProps) => {
  return (
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
  );
};

export default GiftList;
