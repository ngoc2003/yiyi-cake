import React, { useMemo, useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import tw from "../../../lib/tailwind";
import { isPhoneNumber } from "../../utils/regex";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import TextField from "../../components/common/text-field";
import Button from "../../components/common/button";
import AuthLayout from "../../layouts/AuthLayout";
import CustomText from "../../components/common/text";

const SignupScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const isError = useMemo<boolean>(
    () => !!phoneNumber && !isPhoneNumber(phoneNumber),
    [phoneNumber]
  );

  return (
    <AuthLayout title="Welcome" subtitle="Type your phone number to sign up">
      <TextField
        isError={isError}
        placeholder="Your phone number . . ."
        errorText="You must type valid phone number"
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <Button
        onPress={() => navigation.navigate("Otp")}
        isActive={!isError && !!phoneNumber}
      >
        Sign up
      </Button>

      <View style={tw`py-5 items-center flex-row`}>
        <CustomText style={tw`text-text-light`}>
          Already have an account?
        </CustomText>
        <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
          <CustomText style={tw`text-text-main font-semibold ml-1`}>
            Sign in
          </CustomText>
        </TouchableOpacity>
      </View>

      <View style={tw`mt-30`}>
        <CustomText style={tw`text-text-light`}>Or sign up with</CustomText>
        <View style={tw`flex-row mt-4 justify-center gap-4`}>
          <Image
            source={require("../../../assets/images/facebook.png")}
            style={{
              width: 36,
              height: undefined,
              aspectRatio: 1,
            }}
            resizeMode="contain"
          />
          <Image
            source={require("../../../assets/images/google.png")}
            style={{
              width: 36,
              height: undefined,
              aspectRatio: 1,
            }}
            resizeMode="contain"
          />
        </View>
      </View>
    </AuthLayout>
  );
};

export default SignupScreen;
