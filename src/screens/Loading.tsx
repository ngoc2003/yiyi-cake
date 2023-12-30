import React from "react";
import { Image } from "react-native";
import OnboardingLayout from "../layouts/OnboardingLayout";

const LoadingScreen = () => {
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
        source={require("../../assets/images/logo.png")}
      />
      <Image
        style={{
          aspectRatio: 1,
          height: undefined,
          width: 300,
        }}
        resizeMode={"contain"}
        source={require("../../assets/images/cakeOrange.png")}
      />
    </OnboardingLayout>
  );
};

export default LoadingScreen;
