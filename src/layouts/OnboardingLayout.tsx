import React, { ReactNode } from "react";
import { View } from "react-native";
import tw from "../../lib/tailwind";

interface OnboardingLayoutProp {
  children: ReactNode;
}

const OnboardingLayout = ({ children }: OnboardingLayoutProp) => {
  return (
    <View style={tw`flex-1 bg-background items-center justify-center`}>
      {children}
    </View>
  );
};

export default OnboardingLayout;
