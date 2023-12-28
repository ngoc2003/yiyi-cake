import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import CustomText from "../../common/text";
import tw from "../../../../lib/tailwind";

export const SIZE_LIST = [
  {
    id: 2,
    name: "8x5",
    price: 0,
  },
  {
    id: 3,
    name: "13x6",
    price: 100000,
  },
  {
    id: 4,
    name: "17x8",
    price: 180000,
  },
  {
    id: 5,
    name: "21x8",
    price: 260000,
  },
];

interface SizeListProps {
  selectedSize: any;
  setSelectedSize: React.Dispatch<React.SetStateAction<any>>;
}

const SizeList = ({ selectedSize, setSelectedSize }: SizeListProps) => {
  return (
    <View>
      <CustomText style={tw`text-xl mt-7.5`}>Size</CustomText>
      <View style={tw`-mr-5 pt-4`}>
        <FlatList
          horizontal
          data={SIZE_LIST}
          keyExtractor={(item) => item.id + ""}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedSize(item)}
              style={tw`px-5 py-2 rounded-xl mr-4 ${
                item.id === selectedSize.id
                  ? "bg-primary-lighter border border-primary-light"
                  : "bg-smoke-light"
              }`}
            >
              <CustomText style={tw`text-base`}>{item.name}cm</CustomText>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default SizeList;
