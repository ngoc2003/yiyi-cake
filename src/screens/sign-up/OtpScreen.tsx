import React from "react";
import { View } from "react-native";
import OTPTextView from "react-native-otp-textinput";
import tw from "../../../lib/tailwind";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import HeaderNavigation from "../../components/common/header-navigation";
import CustomText from "../../components/common/text";

const OTP_LENGTH = 4;

const OtpScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const handleSubmit = () => {
    navigation.navigate("CreateAccount");
  };

  return (
    <View style={tw`flex-1 px-7 bg-background`}>
      <HeaderNavigation onPress={() => navigation.navigate("Signup")} />
      <View style={tw`items-center pt-15`}>
        <CustomText style={tw`text-3xl text-text-main font-semibold`}>
          Confirm Otp
        </CustomText>
        <CustomText style={tw`text-text-light mt-4.5 text-center`}>
          We sent OTP code to phone number{"\n"} +843 621 169
        </CustomText>
        <View style={{ width: 272, paddingTop: 53 }}>
          <OTPTextView
            handleTextChange={(e) => {
              if (e.length === OTP_LENGTH) handleSubmit();
            }}
            tintColor="#FFD43E"
            autoFocus
            textInputStyle={tw`bg-smoke-main rounded-md`}
          />
        </View>
      </View>
    </View>
  );
};

export default OtpScreen;
