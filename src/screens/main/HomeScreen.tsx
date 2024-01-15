import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";
import tw from "../../../lib/tailwind";
import CategoryList from "../../components/common/category-list";
import Topbar from "../../components/home-screen/topbar";
import SearchBox from "../../components/home-screen/search-box";
import CategoryBox from "../../components/home-screen/category-box";
import useFirebaseAuth from "../../hooks/useFirebaseAuth";
import LoadingScreen from "../Loading";
import useProducts from "../../hooks/useProducts";
import { CategoryType, ProductType } from "../../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MainLayout from "../../layouts/MainLayout";
import CustomText from "../../components/common/text";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { getCartList } from "../../store/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";

const HomeScreen = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch<AppDispatch>();
  const { userInformation } = useFirebaseAuth();
  const { getProducListtByCategory, isLoading } = useProducts();
  const [cupcakeList, setCupcakeList] = useState<ProductType[]>([]);
  const [categoryList, setCategoryList] = useState<CategoryType[]>([]);
  const [birthdayCakeList, setBirthdayCakeList] = useState<ProductType[]>([]);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  useEffect(() => {
    const fetchCartList = async () => {
      if (userInformation?.id && !cart.products.length) {
        dispatch(getCartList({ userId: userInformation.id }));
      }
    };

    const fetchCategory = async () => {
      const categories = (await AsyncStorage.getItem("categories")) ?? "";
      setCategoryList(JSON.parse(categories));
    };
    getProducListtByCategory("Birthday").then((list) =>
      setBirthdayCakeList(list)
    );
    getProducListtByCategory("Cupcake").then((list) => setCupcakeList(list));
    fetchCategory();
    fetchCartList();
  }, [userInformation?.id]);

  if (!userInformation) {
    return <LoadingScreen />;
  }

  return (
    <MainLayout>
      <View style={tw`flex-1 px-5`}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 20 }}
        >
          <SafeAreaView>
            <Topbar data={userInformation} />
            <SearchBox />
            <CategoryBox data={categoryList} />
            <CategoryList
              isLoading={isLoading}
              title="Birthday cake"
              data={birthdayCakeList}
            />
            <CategoryList
              isLoading={isLoading}
              title="Cupcake"
              data={cupcakeList}
            />
          </SafeAreaView>
        </ScrollView>
      </View>
      <View style={tw`flex-row justify-center gap-10 p-5 bg-smoke-light`}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <CustomText>Home</CustomText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <CustomText>Order</CustomText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Account")}>
          <CustomText>Account</CustomText>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
};

export default HomeScreen;
