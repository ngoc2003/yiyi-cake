import React from "react";
import { FlatList, Image, View } from "react-native";
import CustomText from "../../common/text";
import tw from "../../../../lib/tailwind";
import { CategoryType } from "../../../types";

interface CategoryBoxProps {
  data: CategoryType[];
  isLoading?: boolean;
}

const CategoryBox = ({ data, isLoading }: CategoryBoxProps) => {
  return (
    <View>
      <CustomText style={tw`text-lg mb-4`}>Categories</CustomText>
      {isLoading ? (
        <FlatList
          data={[1, 2, 3, 4]}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <CategoryBox.Skeleton key={item} />}
        />
      ) : (
        <FlatList
          data={data}
          horizontal
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View
              style={tw`mr-2.5 flex-row items-center gap-1.5 border border-primary-main rounded-xl text-sm py-1 px-1.5`}
            >
              <Image
                source={{
                  uri: item.image,
                }}
                style={{ height: 32, width: 32 }}
              />
              <CustomText>{item.name}</CustomText>
            </View>
          )}
        />
      )}
    </View>
  );
};

CategoryBox.Skeleton = () => {
  return (
    <View style={tw`h-[10] w-[22] bg-smoke-light rounded-xl mr-2.5`}></View>
  );
};

export default CategoryBox;
