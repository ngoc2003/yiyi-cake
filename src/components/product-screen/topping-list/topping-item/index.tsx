import React, { memo } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import tw from "../../../../../lib/tailwind";
import CustomText from "../../../common/text";
import { formatNumberWithDot } from "../../../../utils";
import { ToppingType } from "../../../../types";

interface ToppingItemProps {
  data: ToppingType;
  isSelected: boolean;
  onPress: () => void;
}

const ToppingItem = ({ data: item, onPress, isSelected }: ToppingItemProps) => {
  return (
    <TouchableOpacity style={tw`items-center mr-4`} onPress={onPress}>
      <View
        style={{
          ...tw`rounded-full z-1 ${
            isSelected
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
              isSelected ? `bg-[${item.color}]/20` : ""
            }`,
          }}
        >
          <Image
            source={{ uri: item.image }}
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
            isSelected
              ? `bg-[${item.color}]/20 border border-[${item.color}]`
              : "bg-smoke-light"
          }`,
        }}
      >
        <CustomText style={tw`text-lg mt-2`}>{item.name}</CustomText>
        <CustomText style={tw`text-text-main font-light`}>
          + {formatNumberWithDot(item.price)}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
};

export const Skeleton = () => (
  <View style={tw`w-[24] h-[18] bg-smoke-light rounded-xl mt-8 items-center`}>
    <View style={tw`w-[12] h-[12] rounded-full bg-smoke-light -top-6`}></View>
  </View>
);

export default memo(ToppingItem);
