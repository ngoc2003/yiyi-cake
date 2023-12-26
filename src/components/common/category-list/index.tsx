import React from "react";
import { View } from "react-native";
import tw from "../../../../lib/tailwind";
import CustomText from "../text";
import ProductCard from "../product-card";

interface CategoryListProp {
  title: string;
  data: any;
}

const CategoryList = ({ title, data }: CategoryListProp) => {
  return (
    <View>
      <View style={tw`flex-row justify-between mt-9 mb-4`}>
        <CustomText style={tw`text-base`}>{title}</CustomText>
        <CustomText style={tw`text-xs font-semibold text-primary-main`}>
          See all
        </CustomText>
      </View>

      <View style={tw`flex-row flex-wrap gap-3 justify-center`}>
        {data.map((item: any) => (
          <ProductCard key={item} data={item} />
        ))}
      </View>
    </View>
  );
};

export default CategoryList;
