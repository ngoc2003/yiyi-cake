import React from "react";
import tw from "../../../../lib/tailwind";
import CustomText from "../../common/text";
import { FlatList, SafeAreaView, View } from "react-native";
import { ToppingType } from "../../../types";
import ToppingItem, { Skeleton } from "./topping-item";

interface ToppingListProps {
  data: ToppingType[];
  selectedTopping: string | null;
  setSelectedTopping: (id: string) => void;
}

const ToppingList = ({
  data,
  selectedTopping,
  setSelectedTopping,
}: ToppingListProps) => {
  if (!selectedTopping) return;

  return (
    <View>
      <CustomText style={tw`text-xl mt-7.5`}>Toppings</CustomText>
      {!selectedTopping && <Skeleton />}
      <SafeAreaView style={tw`-mr-5 pt-4`}>
        <FlatList
          horizontal
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ToppingItem
              data={item}
              onPress={() => setSelectedTopping(item.id)}
              isSelected={selectedTopping === item.id}
            />
          )}
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
};

export default ToppingList;
