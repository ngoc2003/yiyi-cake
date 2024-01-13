import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import tw from "../../lib/tailwind";
import CategoryList from "../components/common/category-list";
import Topbar from "../components/home-screen/topbar";
import SearchBox from "../components/home-screen/search-box";
import CategoryBox from "../components/home-screen/category-box";
import useFirebaseAuth from "../hooks/useFirebaseAuth";
import LoadingScreen from "./Loading";
import useProducts from "../hooks/useProducts";
import { CategoryType, ProductType } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = () => {
  const [birthdayCakeList, setBirthdayCakeList] = useState<ProductType[]>([]);
  const [cupcakeList, setCupcakeList] = useState<ProductType[]>([]);
  const { userInformation } = useFirebaseAuth();
  const { getProducListtByCategory, isLoading } = useProducts();
  const [categoryList, setCategoryList] = useState<CategoryType[]>([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const categories = (await AsyncStorage.getItem("categories")) ?? "";
      setCategoryList(JSON.parse(categories));
    };
    getProducListtByCategory("Birthday").then((list) =>
      setBirthdayCakeList(list)
    );
    getProducListtByCategory("Cupcake").then((list) => setCupcakeList(list));
    fetchCategory();
  }, []);

  if (!userInformation) {
    return <LoadingScreen />;
  }

  return (
    <View style={tw`bg-background flex-1 px-5`}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 40 }}
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
  );
};

export default HomeScreen;
