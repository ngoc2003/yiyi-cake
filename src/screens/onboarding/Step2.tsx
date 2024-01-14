import React, { useCallback, useEffect } from "react";
import { Dimensions, Image } from "react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import tw from "../../../lib/tailwind";
import OnboardingLayout from "../../layouts/OnboardingLayout";
import CustomText from "../../components/common/text";
import { useGetFirebaseData } from "../../hooks/useGetFirebaseData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toolbar from "../../components/common/toolbar";

const { width } = Dimensions.get("window");

const OnboardingStep2 = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { data: toppingList } = useGetFirebaseData({ name: "toppings" });
  const { data: sizeList } = useGetFirebaseData({ name: "sizes" });
  const { data: giftList } = useGetFirebaseData({ name: "gifts" });
  const { data: categoryList } = useGetFirebaseData({ name: "categories" });

  const checkAndSetAsyncStorageData = useCallback(async () => {
    try {
      if (toppingList.length) {
        await AsyncStorage.setItem("toppings", JSON.stringify(toppingList));
      }
      if (sizeList.length) {
        await AsyncStorage.setItem("sizes", JSON.stringify(sizeList));
      }
      if (giftList.length) {
        await AsyncStorage.setItem("gifts", JSON.stringify(giftList));
      }
      if (categoryList.length) {
        await AsyncStorage.setItem("categories", JSON.stringify(categoryList));
      }
    } catch (error) {
      console.error("Error checking and setting data in AsyncStorage: ", error);
    }
  }, [
    toppingList.length,
    sizeList.length,
    giftList.length,
    categoryList.length,
  ]);

  useEffect(() => {
    checkAndSetAsyncStorageData();
  }, [checkAndSetAsyncStorageData]);

  return (
    <OnboardingLayout>
      <Image
        style={{
          width: width * 0.9,
          marginLeft: width * 0.1,
          aspectRatio: 1,
          height: undefined,
        }}
        resizeMode="contain"
        source={require("../../../assets/images/cakeOnboarding2.png")}
      />
      <CustomText style={tw`text-text-main text-2xl px-4 text-center my-2`}>
        Choose your favorite food
      </CustomText>
      <Toolbar onPress={() => navigation.navigate("Onboarding3")} />
    </OnboardingLayout>
  );
};

export default OnboardingStep2;
