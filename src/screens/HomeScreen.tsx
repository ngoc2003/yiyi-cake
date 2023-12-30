import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import tw from "../../lib/tailwind";
import CategoryList from "../components/common/category-list";
import Topbar from "../components/home-screen/topbar";
import SearchBox from "../components/home-screen/search-box";
import CategoryBox from "../components/home-screen/category-box";
import useFirebaseAuth from "../hooks/useFirebaseAuth";
import LoadingScreen from "./Loading";

const HomeScreen = () => {
  const { userInformation } = useFirebaseAuth();
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
          <CategoryBox />
          <CategoryList title="Popular" data={[1, 2, 3, 4]} />
          <CategoryList title="Birthday cake" data={[5, 6, 7, 8]} />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
