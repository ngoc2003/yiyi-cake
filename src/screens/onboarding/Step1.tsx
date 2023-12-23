import React, { useEffect } from "react";
import { Image } from "react-native";
import OnboardingLayout from "../../layouts/OnboardingLayout";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const OnboardingStep1 = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  useEffect(() => {
    const switchScreen = setTimeout(() => {
      navigation.navigate("Onboarding2");
    }, 3500);

    return () => {
      clearTimeout(switchScreen);
    };
  }, []);

  return (
    <OnboardingLayout>
      <Image
        style={{
          height: undefined,
          width: 200,
          aspectRatio: 1,
          marginBottom: -100,
        }}
        resizeMode={"contain"}
        source={require("../../../assets/images/logo.png")}
      />
      <Image
        style={{
          aspectRatio: 1,
          height: undefined,
          width: 300,
        }}
        resizeMode={"contain"}
        source={require("../../../assets/images/cakeOrange.png")}
      />
    </OnboardingLayout>
  );
};

export default OnboardingStep1;
