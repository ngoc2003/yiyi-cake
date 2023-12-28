import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import tw from "../../../../lib/tailwind";
import { colors } from "../../../theme";
import { MinusIcon, PlusIcon } from "react-native-heroicons/outline";
import CustomText from "../../common/text";
import Button from "../../common/button";

const MIN_AMOUNT = 1,
  MAX_AMOUNT = 6;

const handleRenderNumber = (num: number) => (num < 10 ? "0" + num : num);

const Toolbar = () => {
  const [amountProduct, setAmountProduct] = useState(MIN_AMOUNT);

  return (
    <View style={tw`p-5 flex-row items-center gap-4 py-4`}>
      <View style={tw`flex-row items-center gap-3 `}>
        <TouchableOpacity
          disabled={amountProduct === MIN_AMOUNT}
          onPress={() => setAmountProduct((prev) => prev - 1)}
          style={tw`rounded-full p-1 ${
            amountProduct === MIN_AMOUNT ? "" : "bg-primary-main"
          }`}
        >
          <MinusIcon
            color={
              amountProduct === MIN_AMOUNT ? colors.text.light : colors.black
            }
          />
        </TouchableOpacity>
        <CustomText style={tw`text-xl`}>
          {handleRenderNumber(amountProduct)}
        </CustomText>
        <TouchableOpacity
          disabled={amountProduct === MAX_AMOUNT}
          onPress={() => setAmountProduct((prev) => prev + 1)}
          style={tw`rounded-full p-1  ${
            amountProduct === MAX_AMOUNT ? "" : "bg-primary-main"
          }`}
        >
          <PlusIcon
            color={
              amountProduct === MAX_AMOUNT ? colors.text.light : colors.black
            }
          />
        </TouchableOpacity>
      </View>
      <Button style={tw`mt-0`} isActive onPress={() => {}}>
        Add to cart
      </Button>
    </View>
  );
};

export default Toolbar;
