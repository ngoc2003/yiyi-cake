import React, { useEffect, useState } from "react";
import { View } from "react-native";
import OTPTextView from "react-native-otp-textinput";
import tw from "../../../lib/tailwind";
import {
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import HeaderNavigation from "../../components/common/header-navigation";
import CustomText from "../../components/common/text";

import useFirebaseAuth from "../../hooks/useFirebaseAuth";

const OTP_LENGTH = 6;

const OtpScreen = () => {
  const route = useRoute();
  const { v, p, a } = route.params;
  const [otp, setOtp] = useState<string>("");
  const { signIn } = useFirebaseAuth();

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleSubmit = async () => {
    try {
      signIn(v, otp);
      setOtp("");
      a();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (otp.length === OTP_LENGTH) {
      handleSubmit();
    }
  }, [otp]);

  return (
    <View style={tw`flex-1 px-7 bg-background`}>
      <HeaderNavigation onPress={() => navigation.navigate("Signup")} />
      <View style={tw`items-center pt-15`}>
        <CustomText style={tw`text-3xl text-text-main font-semibold`}>
          Confirm Otp
        </CustomText>
        <CustomText style={tw`text-text-light mt-4.5 text-center`}>
          We have sent OTP code to phone number{"\n"} {p}
        </CustomText>
        <View style={{ paddingTop: 53, paddingHorizontal: 5, maxWidth: 350 }}>
          <OTPTextView
            inputCount={6}
            handleTextChange={(e) => {
              setOtp(e);
            }}
            tintColor="#FFD43E"
            autoFocus
            textInputStyle={tw`bg-smoke-main rounded-md w-12 h-12`}
          />
        </View>
      </View>
    </View>
  );
};

export default OtpScreen;
