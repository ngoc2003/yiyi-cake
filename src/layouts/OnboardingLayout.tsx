import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native";
import tw from "../../lib/tailwind";

interface OnboardingLayoutProp {
  children: ReactNode;
}

const OnboardingLayout = ({ children }: OnboardingLayoutProp) => {
  return (
    <SafeAreaView style={tw`flex-1 bg-background items-center justify-center`}>
      {children}
    </SafeAreaView>
  );
};

export default OnboardingLayout;
