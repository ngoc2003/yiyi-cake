import React from "react";
import { FlatList, Image, View } from "react-native";
import CustomText from "../../common/text";
import tw from "../../../../lib/tailwind";

const CATEGORY_LIST = [
  {
    title: "Birthday",
    icon: require("../../../../assets/images/category/birthday.png"),
  },
  {
    title: "Cupcake",
    icon: require("../../../../assets/images/category/cupcake.png"),
  },
  {
    title: "Decoration",
    icon: require("../../../../assets/images/category/decoration.png"),
  },
];

const CategoryBox = () => {
  return (
    <View>
      <CustomText style={tw`text-lg mb-4`}>Categories</CustomText>
      <FlatList
        data={CATEGORY_LIST}
        horizontal
        keyExtractor={(item) => item.title}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View
            style={tw`mr-2.5 flex-row items-center gap-1.5 border border-primary-main rounded-xl text-sm py-1 px-1.5`}
          >
            <Image source={item.icon} style={{ height: 32, width: 32 }} />
            <CustomText>{item.title}</CustomText>
          </View>
        )}
      />
    </View>
  );
};

export default CategoryBox;
