import React, { useEffect, useState } from "react";
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
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProductScreen = () => {
  const {
    params: { id },
  } = useRoute();
  const [variant, setVariant] = useState({
    sizes: [],
    toppings: [],
    gifts: [],
  });
  const [product, setProduct] = useState<ProductType | null>(null);

  const [selectedGift, setSelectedGift] = useState<GiftType | null>(null);
  const [selectedSize, setSelectedSize] = useState<SizeType | null>(null);
  const [selectedTopping, setSelectedTopping] = useState<ToppingType | null>(
    null
  );

  const { getProductById } = useProducts();

  useEffect(() => {
    getProductById(id).then((result) => setProduct(result));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const toppings = await AsyncStorage.getItem("toppings");
        const sizes = await AsyncStorage.getItem("sizes");
        const gifts = await AsyncStorage.getItem("gifts");

        setSelectedTopping(toppings ? JSON.parse(toppings)[0] : null);
        setSelectedSize(sizes ? JSON.parse(sizes)[0] : null);
        setSelectedGift(gifts ? JSON.parse(gifts)[0] : null);

        setVariant((prev) => ({
          ...prev,
          toppings: toppings ? JSON.parse(toppings) : [],
          sizes: sizes ? JSON.parse(sizes) : [],
          gifts: gifts ? JSON.parse(gifts) : [],
        }));
      } catch (error) {
        console.error("Error fetching data from AsyncStorage: ", error);
      }
    };

    fetchData();
  }, []);

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
              data={variant.sizes?.sort((a: SizeType, b: SizeType) =>
                a.name > b.name ? 1 : a.name < b.name ? -1 : 0
              )}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />
            <ToppingList
              data={variant.toppings}
              selectedTopping={selectedTopping}
              setSelectedTopping={setSelectedTopping}
            />
            <GiftList
              data={variant.gifts}
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
