import React from "react";
import { Image, View } from "react-native";
import { colors } from "../../../theme";
import tw from "../../../../lib/tailwind";
import { StarIcon } from "react-native-heroicons/solid";
import CustomText from "../text";
import { formatNumberWithDot } from "../../../utils";

interface ProductCardProp {
  data: any;
}
const ProductCard = ({ data }: ProductCardProp) => {
  return (
    <View
      style={{
        width: "47%",
        ...tw`rounded-xl bg-background`,
        shadowColor: colors.text.light,
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 4 },
      }}
    >
<<<<<<< HEAD
      <View>
        <Image
          style={{
            ...tw`w-full rounded-xl`,
            height: undefined,
            aspectRatio: 6 / 5,
          }}
          resizeMode="cover"
          source={require("../../../../assets/images/example.png")}
        />
        <View
          style={tw`bg-secondary-main absolute top-0 right-0 px-1.5 py-0.5 rounded-bl-xl rounded-tr-xl`}
        >
          <CustomText style={{ fontSize: 12, ...tw`text-white` }}>
            -{(((220000 - 190000) / 220000) * 100).toFixed()}%
          </CustomText>
        </View>

        <View
          style={tw`border border-secondary-main bg-primary-lighter px-1.5 py-0.5 rounded-tr-xl rounded-br-xl absolute -left-0.2 top-5`}
        >
          <CustomText style={{ fontSize: 12, ...tw`text-secondary-main` }}>
            New
          </CustomText>
        </View>
      </View>
=======
      <Image
        style={{
          ...tw`w-full rounded-xl`,
          height: undefined,
          aspectRatio: 6 / 5,
        }}
        resizeMode="cover"
        source={require("../../../../assets/images/example.png")}
      />
>>>>>>> 2caac44 (feat: home screen UI)
      <View style={tw`-mt-0.5 p-2.5`}>
        <View style={tw`flex-row `}>
          <StarIcon color={colors.primary.main} size={16} />
          <CustomText
            style={tw`ml-1 mt-1 font-semibold text-xs text-text-light`}
          >
            4.5
          </CustomText>
        </View>
        <CustomText style={tw`mt-1`} numberOfLines={2}>
          Lemon cup cakes
        </CustomText>
        <View style={tw`items-end mt-0.5`}>
          <CustomText
            style={{
              fontSize: 10,
              ...tw`mb-0.5 line-through text-text-light`,
            }}
          >
            {formatNumberWithDot(220000)}
          </CustomText>
          <CustomText style={{ fontSize: 14 }}>
            {formatNumberWithDot(190000)}
          </CustomText>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
