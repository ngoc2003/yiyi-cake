import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import tw from "../../../../lib/tailwind";
import { colors } from "../../../theme";
import { MinusIcon, PlusIcon } from "react-native-heroicons/outline";
import CustomText from "../../common/text";
import Button from "../../common/button";
import { FieldValues, SubmitHandler } from "react-hook-form";

interface ToolbarProps {
  quantity: number;
  onSubmit: () => void;
  onChange: (quantity: number) => void;
}

const MIN_AMOUNT = 1,
  MAX_AMOUNT = 6;

const handleRenderNumber = (num: number) => (num < 10 ? "0" + num : num);

const Toolbar = ({ quantity, onSubmit, onChange }: ToolbarProps) => {
  return (
    <View style={tw`p-5 flex-row items-center gap-4 py-4`}>
      <View style={tw`flex-row items-center gap-3 `}>
        <TouchableOpacity
          disabled={quantity === MIN_AMOUNT}
          onPress={() => onChange(quantity - 1)}
          style={tw`rounded-full p-1 ${
            quantity === MIN_AMOUNT ? "" : "bg-primary-main"
          }`}
        >
          <MinusIcon
            color={quantity === MIN_AMOUNT ? colors.text.light : colors.black}
          />
        </TouchableOpacity>
        <CustomText style={tw`text-xl`}>
          {handleRenderNumber(quantity)}
        </CustomText>
        <TouchableOpacity
          disabled={quantity === MAX_AMOUNT}
          onPress={() => onChange(quantity + 1)}
          style={tw`rounded-full p-1  ${
            quantity === MAX_AMOUNT ? "" : "bg-primary-main"
          }`}
        >
          <PlusIcon
            color={quantity === MAX_AMOUNT ? colors.text.light : colors.black}
          />
        </TouchableOpacity>
      </View>
      <View style={tw`flex-1`}>
        <Button fullWidth style={tw`mt-0 `} isActive onPress={onSubmit}>
          Add to cart
        </Button>
      </View>
    </View>
  );
};

export default Toolbar;
