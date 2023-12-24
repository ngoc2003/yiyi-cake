import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import OnboardingStep1 from "../screens/onboarding/Step1";
import OnboardingStep2 from "../screens/onboarding/Step2";
import OnboardingStep3 from "../screens/onboarding/Step3";
import { StatusBar } from "expo-status-bar";
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const options: NativeStackNavigationOptions = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <StatusBar translucent={false} />
      <Stack.Navigator initialRouteName="Onboarding1">
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

        <Stack.Screen options={options} name="Home" component={HomeScreen} />
        <Stack.Screen options={options} name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
