import React, { memo } from "react";
import { View } from "react-native";
import tw from "../../../../lib/tailwind";
import CustomText from "../text";
import ProductCard from "../product-card";
import { ProductType } from "../../../types";

interface CategoryListProp {
  title: string;
  data: any;
  isLoading?: boolean;
}

const CategoryList = ({ title, data, isLoading }: CategoryListProp) => {
  return (
    <View>
      <View style={tw`flex-row justify-between mt-9 mb-4`}>
        <CustomText style={tw`text-base`}>{title}</CustomText>
        {data?.length > 4 && (
          <CustomText style={tw`text-xs font-semibold text-primary-main`}>
            See all
          </CustomText>
        )}
      </View>

      <View style={tw`flex-row flex-wrap gap-3 justify-start mx-1`}>
        {isLoading ? (
          <CategoryList.Skeleton />
        ) : (
          data.map((item: ProductType) => (
            <ProductCard key={item.id} data={item} />
          ))
        )}
      </View>
    </View>
  );
};

CategoryList.Skeleton = () => (
  <View style={tw`flex-row flex-wrap gap-3 justify-start`}>
    <ProductCard.Skeleton />
    <ProductCard.Skeleton />
    <ProductCard.Skeleton />
    <ProductCard.Skeleton />
  </View>
);

export default memo(CategoryList);
