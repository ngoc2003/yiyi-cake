import React from "react";
import { Text } from "react-native";
import tw from "../../../lib/tailwind";
import OnboardingLayout from "../../layouts/OnboardingLayout";

const OnboardingStep1 = () => {
  return (
    <OnboardingLayout>
      <Text style={tw` text-primary-main`}>Screen onboarding 1</Text>
    </OnboardingLayout>
  );
};

export default OnboardingStep1;
