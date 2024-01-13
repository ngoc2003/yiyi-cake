import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import CustomText from "../../common/text";
import tw from "../../../../lib/tailwind";
import { SizeType } from "../../../types";

interface SizeListProps {
  selectedSize: SizeType | null;
  data: SizeType[];
  setSelectedSize: React.Dispatch<React.SetStateAction<any>>;
}

const SizeList = ({ data, selectedSize, setSelectedSize }: SizeListProps) => {
  if (!selectedSize) return;

  return (
    <View>
      <CustomText style={tw`text-xl mt-7.5`}>Size</CustomText>
      <View style={tw`-mr-5 pt-4`}>
        <FlatList
          horizontal
          data={data}
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
              <CustomText style={tw`text-base`}>{item.name}</CustomText>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default SizeList;
