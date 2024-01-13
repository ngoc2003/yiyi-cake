import React from "react";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import CustomText from "../../common/text";
import tw from "../../../../lib/tailwind";
import { Checkbox } from "../../common/checkbox";
import { GiftType } from "../../../types";

interface GiftListProps {
  data: GiftType[];
  selectedGift: GiftType | null;
  setSelectedGift: React.Dispatch<React.SetStateAction<any>>;
}

const GiftList = ({ data, selectedGift, setSelectedGift }: GiftListProps) => {
  if (!selectedGift) return;

  return (
    <View>
      <CustomText style={tw`text-xl mt-7.5`}>Free gift</CustomText>
      <CustomText style={tw`text-base mt-1.5 font-light`}>
        Get one free gift
      </CustomText>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
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
                source={{ uri: item.image }}
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
