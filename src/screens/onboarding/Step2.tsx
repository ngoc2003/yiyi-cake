import React from "react";
import { Dimensions, Image, Text } from "react-native";
import OnboardingLayout from "../../layouts/OnboardingLayout";
import tw from "../../../lib/tailwind";
import Toolbar from "../../components/onboarding-screen/toolbar";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const { width } = Dimensions.get("window");

const OnboardingStep2 = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

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
      <Text style={tw`text-text-main text-2xl px-4 text-center my-2`}>
        Choose your favorite food
      </Text>
      <Toolbar onPress={() => navigation.navigate("Onboarding3")} />
    </OnboardingLayout>
  );
};

export default OnboardingStep2;
