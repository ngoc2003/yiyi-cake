import React, { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import tw from "../../lib/tailwind";

import Note from "../components/product-screen/note";
import Toolbar from "../components/product-screen/toolbar";
import BasicInfo from "../components/product-screen/basic-info";
import SizeList, { SIZE_LIST } from "../components/product-screen/size-list";
import ToppingList, {
  TOPPING_LIST,
} from "../components/product-screen/topping-list";
import GiftList, { GIFT_LIST } from "../components/product-screen/gift-list";

const ProductScreen = () => {
  const [selectedSize, setSelectedSize] = useState(SIZE_LIST[0]);

  const [selectedTopping, setSelectedTopping] = useState(TOPPING_LIST[0]);

  const [selectedGift, setSelectedGift] = useState(GIFT_LIST[0]);

  return (
    <View style={tw`bg-background flex-1`}>
      <ScrollView>
        <SafeAreaView>
          <View style={tw`p-5`}>
            <BasicInfo selectedSize={selectedSize} />
            <SizeList
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />
            <ToppingList
              selectedTopping={selectedTopping}
              setSelectedTopping={setSelectedTopping}
            />
            <GiftList
              selectedGift={selectedGift}
              setSelectedGift={setSelectedGift}
            />
            <Note />
          </View>
        </SafeAreaView>
      </ScrollView>
      <Toolbar />
    </View>
  );
};

export default ProductScreen;
