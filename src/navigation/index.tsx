import React, { useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import OnboardingStep2 from "../screens/onboarding/Step2";
import OnboardingStep3 from "../screens/onboarding/Step3";
import HomeScreen from "../screens/HomeScreen";
import SignupScreen from "../screens/sign-up";
import OtpScreen from "../screens/sign-up/OtpScreen";
import CreateAccount from "../screens/sign-up/CreateAccount";
import SigninScreen from "../screens/SigninScreen";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import ProductScreen from "../screens/Product";
import useFirebaseAuth from "../hooks/useFirebaseAuth";
import LoadingScreen from "../screens/Loading";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const options: BottomTabNavigationOptions = {
    headerShown: false,
  };
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen options={options} name="Home" component={HomeScreen} />
      <Tab.Screen options={options} name="Order" component={HomeScreen} />
      <Tab.Screen options={options} name="Account" component={HomeScreen} />
    </Tab.Navigator>
  );
};

interface StackNavigationProp {
  initialRouteName: string;
}

const StackNavigation = ({ initialRouteName }: StackNavigationProp) => {
  const options: NativeStackNavigationOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
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
      <Stack.Screen options={options} name="Signup" component={SignupScreen} />

      <Stack.Screen
        options={options}
        name="CreateAccount"
        component={CreateAccount}
      />
      <Stack.Screen options={options} name="Otp" component={OtpScreen} />
      <Stack.Screen
        options={options}
        name="Product"
        component={ProductScreen}
      />
      <Stack.Screen options={options} name="Signin" component={SigninScreen} />

      <Stack.Screen
        options={options}
        name="Main"
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  );
};

const MainNavigation = () => {
  const { user, userInformation, loading } = useFirebaseAuth();
  const initialRouteName = useMemo(
    () => (!!user && !!userInformation ? "Main" : "Onboarding2"),
    [user?.phoneNumber, userInformation?.phoneNumber]
  );
  return (
    <NavigationContainer>
      <StatusBar translucent={false} style="dark" />
      {loading && <LoadingScreen />}

      {!loading && user && userInformation && (
        <StackNavigation initialRouteName={initialRouteName} />
      )}
    </NavigationContainer>
  );
};

export default MainNavigation;
