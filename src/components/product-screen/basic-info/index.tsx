import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import CustomText from "../../common/text";
import tw from "../../../../lib/tailwind";
import { ArrowLeftIcon, StarIcon } from "react-native-heroicons/solid";
import { colors } from "../../../theme";
import { formatNumberWithDot } from "../../../utils";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  ShoppingBagIcon,
} from "react-native-heroicons/outline";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProductType, SizeType } from "../../../types";

interface BasicInfoProps {
  data: ProductType;
  selectedSize: SizeType;
}

const BasicInfo = ({ selectedSize, data }: BasicInfoProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View>
      <View
        style={tw`absolute items-center w-full justify-between flex-row z-1 mt-2`}
      >
        <TouchableOpacity
          style={tw`bg-text-main/25 p-1.5 rounded-full`}
          onPress={() =>
            navigation.canGoBack()
              ? navigation.goBack()
              : navigation.navigate("Main")
          }
        >
          <ArrowLeftIcon
            size={24}
            strokeWidth={2}
            color={colors.primary.main}
          />
        </TouchableOpacity>
        <View style={tw`flex-row gap-3`}>
          <TouchableOpacity style={tw`bg-text-main/25 p-1.5 rounded-full`}>
            <ShoppingBagIcon
              size={24}
              strokeWidth={2}
              color={colors.primary.main}
            />
          </TouchableOpacity>
          <TouchableOpacity style={tw`bg-text-main/25 p-1.5 rounded-full`}>
            <ChatBubbleOvalLeftEllipsisIcon
              size={24}
              strokeWidth={2}
              color={colors.primary.main}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw`-m-5 mb-0`}>
        <Image
          source={{
            uri: data.image,
          }}
          style={{
            width: "100%",
            height: undefined,
            aspectRatio: 6 / 5,
            ...tw`rounded-xl`,
          }}
          resizeMode="cover"
        />
      </View>
      <CustomText style={tw`text-2xl mt-5`}>{data.name}</CustomText>
      <View style={tw`flex-row gap-1 justify-between items-center mt-2`}>
        <View style={tw`flex-row items-center`}>
          <StarIcon color={colors.primary.main} size={18} />
          <CustomText style={tw`text-text-light font-semibold`}>4.5</CustomText>
          <View style={tw`border-l h-4 border-l-smoke-main mx-2`}></View>
          <CustomText style={tw`text-text-light font-bold`}>
            15 solds
          </CustomText>
        </View>

        <View style={tw`flex-row items-center`}>
          {!!+data.discount && (
            <CustomText style={tw`text-base text-text-light/80 line-through`}>
              {formatNumberWithDot(+data.price + +selectedSize.price)}
            </CustomText>
          )}
          <CustomText
            style={tw` ml-1 text-2xl text-primary-main font-semibold`}
          >
            {formatNumberWithDot(
              +data.price - +data.discount + +selectedSize.price
            )}
          </CustomText>
        </View>
      </View>
    </View>
  );
};

export default BasicInfo;
