import React from "react";
import { TouchableOpacity, View } from "react-native";
import tw from "../../../../lib/tailwind";
import { colors } from "../../../theme";
import { MinusIcon, PlusIcon } from "react-native-heroicons/outline";
import CustomText from "../../common/text";
import Button from "../../common/button";

const Toolbar = () => {
  return (
    <View style={tw`p-5 flex-row items-center gap-4 py-4`}>
      <View style={tw`flex-row items-center gap-3`}>
        <TouchableOpacity style={tw`bg-primary-main rounded-full p-1`}>
          <MinusIcon color={colors.black} />
        </TouchableOpacity>
        <CustomText style={tw`text-xl`}>01</CustomText>
        <TouchableOpacity style={tw`bg-primary-main rounded-full p-1`}>
          <PlusIcon color={colors.black} />
        </TouchableOpacity>
      </View>
      <Button style={tw`mt-0`} isActive onPress={() => {}}>
        Add to cart
      </Button>
    </View>
  );
};

export default Toolbar;
