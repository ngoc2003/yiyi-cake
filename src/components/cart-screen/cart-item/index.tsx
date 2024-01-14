import React, { useRef, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "../../../../lib/tailwind";
import CustomText from "../../common/text";
import { MinusIcon, PlusIcon, TrashIcon } from "react-native-heroicons/outline";
import { colors } from "../../../theme";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Checkbox } from "../../common/checkbox";

const MIN_AMOUNT = 1,
  MAX_AMOUNT = 6;

const { width } = Dimensions.get("screen");

const handleRenderNumber = (num: number) => (num < 10 ? "0" + num : num);

const CartItem = () => {
  const scrollViewRef = useRef(null);

  const [isSwipeLeft, setIsSwipeLeft] = useState(false);
  const [selected, setSelected] = useState(false);
  const [amountProduct, setAmountProduct] = useState(MIN_AMOUNT);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <ScrollView
      horizontal
      ref={scrollViewRef}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={tw`flex-row justify-end gap-2`}
    >
      <View
        style={{
          width,
          ...tw`flex-row gap-2 p-5 pb-8 items-center flex-1 ${
            selected ? "bg-primary-lighter" : "bg-background"
          } ${isSwipeLeft ? "-ml-14" : ""}`,
        }}
      >
        <Checkbox
          buttonStyle={tw`w-5 h-5`}
          checked={selected}
          onChange={() => setSelected((prev) => !prev)}
        />
        <Image
          source={require("../../../../assets/images/demo.png")}
          style={{
            ...tw`rounded-xl`,
            height: undefined,
            width: 74,
            aspectRatio: 1,
          }}
          resizeMode="cover"
        />

        <View style={tw`flex-1`}>
          <CustomText numberOfLines={1} style={tw`text-lg`}>
            Vanilla berry dream cake
          </CustomText>
          <CustomText style={tw`text-text-light mt-0.5`}>
            16cm, Vanilla, mango
          </CustomText>
          <View style={tw`flex-row justify-between items-end flex-1`}>
            <View style={tw`flex-row items-center gap-3 mt-2 flex-1`}>
              <TouchableOpacity
                disabled={amountProduct === MIN_AMOUNT}
                onPress={() => setAmountProduct((prev) => prev - 1)}
                style={tw`rounded-full p-1 ${
                  amountProduct === MIN_AMOUNT
                    ? "bg-smoke-main"
                    : "bg-primary-main"
                }`}
              >
                <MinusIcon
                  size={22}
                  color={
                    amountProduct === MIN_AMOUNT
                      ? colors.text.main
                      : colors.black
                  }
                />
              </TouchableOpacity>
              <CustomText style={tw`text-lg`}>
                {handleRenderNumber(amountProduct)}
              </CustomText>
              <TouchableOpacity
                disabled={amountProduct === MAX_AMOUNT}
                onPress={() => setAmountProduct((prev) => prev + 1)}
                style={tw`rounded-full p-1  ${
                  amountProduct === MAX_AMOUNT
                    ? "bg-smoke-main"
                    : "bg-primary-main"
                }`}
              >
                <PlusIcon
                  size={22}
                  color={
                    amountProduct === MAX_AMOUNT
                      ? colors.text.main
                      : colors.black
                  }
                />
              </TouchableOpacity>
            </View>

            <CustomText style={tw`text-lg`}>1.000.000 đ</CustomText>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={tw`bg-secondary-light items-center justify-center p-5 rounded-md mr-2`}
      >
        <TrashIcon color={colors.secondary.main} size={26} />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CartItem;
