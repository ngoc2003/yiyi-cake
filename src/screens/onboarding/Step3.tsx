import React from "react";
import { Dimensions, Image } from "react-native";
import OnboardingLayout from "../../layouts/OnboardingLayout";
import tw from "../../../lib/tailwind";
import Toolbar from "../../components/common/toolbar";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import CustomText from "../../components/common/text";

const { width } = Dimensions.get("screen");

const OnboardingStep3 = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <OnboardingLayout>
      <Image
        style={{
          width: width,
          aspectRatio: 1,
          height: undefined,
        }}
        resizeMode="cover"
        source={require("../../../assets/gif/cakeOnboarding3.gif")}
      />
      <CustomText style={tw`text-text-main text-2xl px-4 text-center my-2`}>
        Receive your order safely
      </CustomText>
      <Toolbar activeIndex={1} onPress={() => navigation.navigate("Signin")} />
    </OnboardingLayout>
  );
};

export default OnboardingStep3;
