import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import tw from "../../../lib/tailwind";
import Note from "../../components/product-screen/note";
import Toolbar from "../../components/product-screen/toolbar";
import BasicInfo from "../../components/product-screen/basic-info";
import SizeList from "../../components/product-screen/size-list";
import ToppingList from "../../components/product-screen/topping-list";
import GiftList from "../../components/product-screen/gift-list";
import { GiftType, ProductType, SizeType, ToppingType } from "../../types";
import useProducts from "../../hooks/useProducts";
import { useRoute } from "@react-navigation/native";
import LoadingScreen from "../Loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MainLayout from "../../layouts/MainLayout";
import { FieldValues, useForm } from "react-hook-form";
import { CartProductType, addCartActions } from "../../store/slices/cartSlice";
import { useDispatch } from "react-redux";

interface VariantType {
  sizes: SizeType[];
  toppings: ToppingType[];
  gifts: GiftType[];
}

const ProductScreen = () => {
  const dispatch = useDispatch();
  const {
    params: { id },
  } = useRoute();

  const [variant, setVariant] = useState<VariantType>({
    sizes: [],
    toppings: [],
    gifts: [],
  });

  const { setValue, handleSubmit, watch } = useForm<CartProductType>({
    defaultValues: {
      userId: "",
      quantity: 1,
      product: undefined,
      sizeId: "",
      toppingId: "",
      giftId: "",
      note: "",
    },
  });

  const [product, setProduct] = useState<ProductType | null>(null);

  const { getProductById } = useProducts();

  const handleSetSelectedValue = useCallback(
    (name: string, value: string | number) => {
      setValue(name as any, value);
    },
    []
  );

  const onSubmit = (values: FieldValues) => {
    console.log(values);
    dispatch(addCartActions(values));
  };

  useEffect(() => {
    getProductById(id).then((result) => setProduct(result));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const toppings = await AsyncStorage.getItem("toppings");
        const sizes = await AsyncStorage.getItem("sizes");
        const gifts = await AsyncStorage.getItem("gifts");
        const user = await AsyncStorage.getItem("user");
        const userId = JSON.parse(user!)["id"];

        setValue("toppingId", toppings ? JSON.parse(toppings)[0].id : null);
        setValue("sizeId", sizes ? JSON.parse(sizes)[0].id : null);
        setValue("giftId", gifts ? JSON.parse(gifts)[0].id : null);
        setValue("userId", userId);
        if (product?.id) {
          setValue("product", product);
        }

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
  }, [product?.id]);

  if (!product) {
    return <LoadingScreen />;
  }

  return (
    <MainLayout>
      <ScrollView>
        <SafeAreaView>
          <View style={tw`p-5`}>
            <BasicInfo
              data={product}
              selectedSize={
                variant.sizes.find((item) => item.id === watch("sizeId")) ??
                null
              }
            />
            <SizeList
              data={variant.sizes?.sort((a: SizeType, b: SizeType) =>
                a.name > b.name ? 1 : a.name < b.name ? -1 : 0
              )}
              selectedSize={watch("sizeId")}
              setSelectedSize={(id) => handleSetSelectedValue("sizeId", id)}
            />
            <ToppingList
              data={variant.toppings}
              selectedTopping={watch("toppingId")}
              setSelectedTopping={(id) =>
                handleSetSelectedValue("toppingId", id)
              }
            />
            <GiftList
              data={variant.gifts}
              selectedGift={watch("giftId")}
              setSelectedGift={(id) => handleSetSelectedValue("giftId", id)}
            />
            <Note onChange={() => handleSetSelectedValue("note", id)} />
          </View>
        </SafeAreaView>
      </ScrollView>
      <Toolbar
        quantity={watch("quantity")}
        onSubmit={handleSubmit(onSubmit)}
        onChange={(val: number) => handleSetSelectedValue("quantity", val)}
      />
    </MainLayout>
  );
};

export default ProductScreen;
