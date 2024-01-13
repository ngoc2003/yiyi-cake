import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { colors } from "../../../theme";
import tw from "../../../../lib/tailwind";
import { StarIcon } from "react-native-heroicons/solid";
import CustomText from "../text";
import { formatNumberWithDot } from "../../../utils";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { differenceInMonths, parse } from "date-fns";
import { ProductType } from "../../../types";

interface ProductCardProp {
  data: ProductType;
}

const ProductCard = ({ data }: ProductCardProp) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <TouchableOpacity
      style={{
        width: "47%",
        ...tw`rounded-xl bg-background`,
        shadowColor: colors.text.light,
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 4 },
      }}
      onPress={() => navigation.navigate("Product", { id: data.id })}
    >
      <View>
        <Image
          style={{
            ...tw`w-full rounded-xl`,
            height: undefined,
            aspectRatio: 6 / 5,
          }}
          resizeMode="cover"
          source={{
            uri: data.image,
          }}
        />
        {!!+data.discount && (
          <View
            style={tw`bg-secondary-main absolute top-0 right-0 px-1.5 py-0.5 rounded-bl-xl rounded-tr-xl`}
          >
            <CustomText style={{ fontSize: 12, ...tw`text-white` }}>
              -{((data.discount / data.price) * 100).toFixed()}%
            </CustomText>
          </View>
        )}
        {differenceInMonths(
          parse(data.createdAt, "dd/MM/yyyy", new Date()),
          new Date()
        ) <= 1 && (
          <View
            style={tw`border border-secondary-main bg-primary-lighter px-1.5 py-0.5 rounded-tr-xl rounded-br-xl absolute -left-0.2 top-5`}
          >
            <CustomText style={{ fontSize: 12, ...tw`text-secondary-main` }}>
              New
            </CustomText>
          </View>
        )}
      </View>
      <View style={tw`-mt-0.5 p-2.5`}>
        <View style={tw`flex-row `}>
          <StarIcon color={colors.primary.main} size={16} />
          <CustomText
            style={tw`ml-1 mt-1 font-semibold text-xs text-text-light`}
          >
            4.5
          </CustomText>
        </View>
        <CustomText style={tw`mt-1`} numberOfLines={1}>
          {data.name}
        </CustomText>
        <View style={tw`items-end mt-1`}>
          {!!+data.discount && (
            <CustomText
              style={{
                fontSize: 10,
                ...tw`mb-0.5 line-through text-text-light`,
              }}
            >
              {formatNumberWithDot(data.price)}
            </CustomText>
          )}
          <CustomText style={{ fontSize: 14, marginLeft: 4 }}>
            {formatNumberWithDot(data.price - data.discount)}
          </CustomText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

ProductCard.Skeleton = () => {
  return (
    <View
      style={{
        width: "47%",
        ...tw`rounded-xl bg-white h-[50] bg-smoke-light`,
        shadowColor: colors.text.light,
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 4 },
      }}
    ></View>
  );
};
export default ProductCard;
