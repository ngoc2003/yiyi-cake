import React from "react";
import { TouchableOpacity, View } from "react-native";
import tw from "../../../../lib/tailwind";
import { colors } from "../../../theme";
import { MapPinIcon } from "react-native-heroicons/solid";
import CustomText from "../../common/text";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  ShoppingBagIcon,
} from "react-native-heroicons/outline";

const Topbar = () => {
  return (
    <View style={tw`flex-row items-center`}>
      <MapPinIcon size={26} color={colors.primary.main} />
      <CustomText style={tw`flex-1 text-text-light text-base ml-2`}>
        Phu Lam, Ha Dong
      </CustomText>
      <View style={tw`flex-row gap-2`}>
        <TouchableOpacity>
          <ShoppingBagIcon
            size={26}
            strokeWidth={2}
            color={colors.primary.main}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <ChatBubbleOvalLeftEllipsisIcon
            size={26}
            strokeWidth={2}
            color={colors.primary.main}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Topbar;
