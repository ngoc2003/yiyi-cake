import React, { useCallback, useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import CustomText from "../../components/common/text";
import tw from "../../../lib/tailwind";
import { ScrollView, View } from "react-native";
import HeaderNavigation from "../../components/common/header-navigation";
import Button from "../../components/common/button";
import CartItem from "../../components/cart-screen/cart-item";
import { useGetFirebaseData } from "../../hooks/useGetFirebaseData";
import { where } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { getCartList } from "../../store/slices/cartSlice";
import { AppDispatch } from "../../store";

const CartScreen = () => {
  const dispatch = useDispatch<AppDispatch>();

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const cartList = useSelector((state) => state.cart);

  console.log(cartList);

  return (
    <MainLayout>
      <View style={tw`px-5`}>
        <HeaderNavigation onPress={() => navigation.goBack()} />
        <CustomText
          style={tw`text-2xl mb-5 text-text-main font-semibold text-center`}
        >
          My Cart
        </CustomText>
      </View>
      <ScrollView style={tw`flex-1 pt-2`}>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </ScrollView>
      <View
        style={{
          ...tw`py-8 px-5 border-t border-t-primary-main`,
        }}
      >
        <View style={tw`flex-row justify-between gap-4`}>
          <CustomText style={tw`text-lg`}>Selected item (2)</CustomText>
          <CustomText style={tw`text-primary-main font-semibold text-lg`}>
            1.000.000 đ
          </CustomText>
        </View>
        <Button isActive onPress={() => {}}>
          Checkout
        </Button>
      </View>
    </MainLayout>
  );
};

export default CartScreen;
