import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import tw from "../../lib/tailwind";
import CategoryList from "../components/common/category-list";
import Topbar from "../components/home-screen/topbar";
import SearchBox from "../components/home-screen/search-box";
import CategoryBox from "../components/home-screen/category-box";
import useFirebaseAuth from "../hooks/useFirebaseAuth";
import LoadingScreen from "./Loading";
import { useGetFirebaseData } from "../hooks/useGetFirebaseData";
import useProducts from "../hooks/useProducts";
import { ProductType } from "../types";

const HomeScreen = () => {
  const [birthdayCakeList, setBirthdayCakeList] = useState<ProductType[]>([]);
  const [cupcakeList, setCupcakeList] = useState<ProductType[]>([]);
  const { userInformation } = useFirebaseAuth();
  const { getProducListtByCategory, isLoading } = useProducts();
  const { data: categoryList, isLoading: isFetchCategoryLoading } =
    useGetFirebaseData({ name: "categories" });

  useEffect(() => {
    getProducListtByCategory("Birthday").then((list) =>
      setBirthdayCakeList(list)
    );
    getProducListtByCategory("Cupcake").then((list) => setCupcakeList(list));
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
          <CategoryBox data={categoryList} isLoading={isFetchCategoryLoading} />
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
