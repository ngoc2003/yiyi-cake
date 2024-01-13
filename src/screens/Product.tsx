import React, { useEffect, useLayoutEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import tw from "../../lib/tailwind";
import Note from "../components/product-screen/note";
import Toolbar from "../components/product-screen/toolbar";
import BasicInfo from "../components/product-screen/basic-info";
import SizeList from "../components/product-screen/size-list";
import ToppingList from "../components/product-screen/topping-list";
import GiftList from "../components/product-screen/gift-list";
import { GiftType, ProductType, SizeType, ToppingType } from "../types";
import useProducts from "../hooks/useProducts";
import { useRoute } from "@react-navigation/native";
import LoadingScreen from "./Loading";
import { useGetFirebaseData } from "../hooks/useGetFirebaseData";

const ProductScreen = () => {
  const {
    params: { id },
  } = useRoute();

  const [selectedGift, setSelectedGift] = useState<GiftType | null>(null);
  const [selectedSize, setSelectedSize] = useState<SizeType | null>(null);
  const [selectedTopping, setSelectedTopping] = useState<ToppingType | null>(
    null
  );

  const [product, setProduct] = useState<ProductType | null>(null);

  const { getProductById } = useProducts();
  const { data: toppingList } = useGetFirebaseData({ name: "toppings" });
  const { data: sizeList } = useGetFirebaseData({ name: "sizes" });
  const { data: giftList } = useGetFirebaseData({ name: "gifts" });

  useEffect(() => {
    getProductById(id).then((result) => setProduct(result));
  }, []);

  useLayoutEffect(() => {
    setSelectedSize(sizeList[0]);
    setSelectedTopping(toppingList[0]);
    setSelectedGift(giftList[0]);
  }, [toppingList?.length, sizeList?.length, giftList?.length]);

  if (!product) {
    return <LoadingScreen />;
  }

  return (
    <View style={tw`bg-background flex-1`}>
      <ScrollView>
        <SafeAreaView>
          <View style={tw`p-5`}>
            <BasicInfo data={product} selectedSize={selectedSize} />
            <SizeList
              data={sizeList?.sort((a: SizeType, b: SizeType) =>
                a.name > b.name ? 1 : a.name < b.name ? -1 : 0
              )}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />
            <ToppingList
              data={toppingList}
              selectedTopping={selectedTopping}
              setSelectedTopping={setSelectedTopping}
            />
            <GiftList
              data={giftList}
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
