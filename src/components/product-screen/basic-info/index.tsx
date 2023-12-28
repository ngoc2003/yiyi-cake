import React from "react";
import { View } from "react-native";
import CustomText from "../../common/text";
import tw from "../../../../lib/tailwind";
import { StarIcon } from "react-native-heroicons/solid";
import { colors } from "../../../theme";
import { formatNumberWithDot } from "../../../utils";

interface BasicInfoProps {
  selectedSize: any;
}

const BasicInfo = ({ selectedSize }: BasicInfoProps) => {
  return (
    <View>
      <CustomText style={tw`text-2xl`}>Vanilla Berry Dream cake</CustomText>
      <View style={tw`flex-row gap-1 justify-between items-center mt-2`}>
        <View style={tw`flex-row items-center`}>
          <StarIcon color={colors.primary.main} size={18} />
          <CustomText style={tw`text-text-light font-semibold`}>4.5</CustomText>
          <View style={tw`border-l h-4 border-l-smoke-main mx-2`}></View>
          <CustomText style={tw`text-text-light font-bold`}>
            15 solds
          </CustomText>
        </View>

        <CustomText style={tw`text-2xl text-primary-main font-semibold`}>
          {formatNumberWithDot(190000 + selectedSize.price)}
        </CustomText>
      </View>
    </View>
  );
};

export default BasicInfo;
