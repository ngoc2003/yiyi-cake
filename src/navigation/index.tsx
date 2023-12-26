import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import OnboardingStep1 from "../screens/onboarding/Step1";
import OnboardingStep2 from "../screens/onboarding/Step2";
import OnboardingStep3 from "../screens/onboarding/Step3";
import HomeScreen from "../screens/HomeScreen";
import SignupScreen from "../screens/sign-up";
import OtpScreen from "../screens/sign-up/OtpScreen";
import CreateAccount from "../screens/sign-up/CreateAccount";
import SigninScreen from "../screens/SigninScreen";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const options: NativeStackNavigationOptions = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <StatusBar translucent={false} style="dark" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={options}
          name="Onboarding1"
          component={OnboardingStep1}
        />
        <Stack.Screen
          options={options}
          name="Onboarding2"
          component={OnboardingStep2}
        />
        <Stack.Screen
          options={options}
          name="Onboarding3"
          component={OnboardingStep3}
        />
        <Stack.Screen
          options={options}
          name="Signup"
          component={SignupScreen}
        />

        <Stack.Screen
          options={options}
          name="CreateAccount"
          component={CreateAccount}
        />
        <Stack.Screen options={options} name="Otp" component={OtpScreen} />
        <Stack.Screen
          options={options}
          name="Signin"
          component={SigninScreen}
        />
        <Stack.Screen options={options} name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
