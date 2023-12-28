import React from "react";
import tw from "../../../../lib/tailwind";
import CustomText from "../../common/text";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import { formatNumberWithDot } from "../../../utils";
import { colors } from "../../../theme";

export const TOPPING_LIST = [
  {
    id: 0,
    name: "Mango",
    image: require("../../../../assets/images/topping/mango.png"),
    color: colors.primary.main,
    price: 10000,
    categoryId: "",
  },
  {
    id: 1,
    name: "Grape",
    image: require("../../../../assets/images/topping/grape.png"),
    color: "#9547f0",
    price: 10000,
    categoryId: "",
  },
];

interface ToppingListProps {
  selectedTopping: any;
  setSelectedTopping: React.Dispatch<React.SetStateAction<any>>;
}

const ToppingList = ({
  selectedTopping,
  setSelectedTopping,
}: ToppingListProps) => {
  return (
    <View>
      <CustomText style={tw`text-xl mt-7.5`}>Toppings</CustomText>
      <View style={tw`-mr-5 pt-4`}>
        <FlatList
          horizontal
          data={TOPPING_LIST}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={tw`items-center mr-4`}
              onPress={() => setSelectedTopping(item)}
            >
              <View
                style={{
                  ...tw`rounded-full z-1 ${
                    selectedTopping.id === item.id
                      ? `bg-white border border-[${item.color}]`
                      : "bg-smoke-light"
                  }`,
                  width: 46,
                  height: 46,
                  marginBottom: -23,
                }}
              >
                <View
                  style={{
                    ...tw`p-0.5 rounded-full ${
                      selectedTopping.id === item.id
                        ? `bg-[${item.color}]/20`
                        : ""
                    }`,
                  }}
                >
                  <Image
                    source={item.image}
                    style={{
                      width: "100%",
                      height: undefined,
                      aspectRatio: 1,
                      borderRadius: 100,
                    }}
                    resizeMode="cover"
                  />
                </View>
              </View>

              <View
                style={{
                  backgroundColor: `${item.color}20`,

                  ...tw`px-5 py-3  rounded-xl items-center ${
                    selectedTopping.id === item.id
                      ? `bg-[${item.color}]/20 border border-[${item.color}]`
                      : "bg-smoke-light"
                  }`,
                }}
              >
                <CustomText style={tw`text-lg mt-2`}>{item.name}</CustomText>
                <CustomText style={tw`text-text-main font-light`}>
                  + {formatNumberWithDot(item.price)}
                </CustomText>
              </View>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default ToppingList;
