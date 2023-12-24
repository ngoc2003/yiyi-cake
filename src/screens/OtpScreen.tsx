import React from "react";
import {
  Keyboard,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import OTPTextView from "react-native-otp-textinput";
import { colors } from "../../tailwind.config";
import tw from "../../lib/tailwind";
import { ArrowLongLeftIcon } from "react-native-heroicons/outline";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const OtpScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={tw`flex-1 pt-12 px-7 bg-background`}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <ArrowLongLeftIcon color="#000" />
        </TouchableOpacity>
      </View>
      <View style={tw`items-center pt-15`}>
        <Text style={tw`text-3xl text-text-main`}>Confirm Otp</Text>
        <Text style={tw`text-text-light mt-4.5 text-center`}>
          We sent OTP code to phone number{"\n"} +843 621 169
        </Text>
        <View style={{ width: 272, paddingTop: 53 }}>
          <OTPTextView
            tintColor="#FFD43E"
            textInputStyle={tw`bg-smoke-main rounded-md`}
          />
        </View>
      </View>
    </View>
  );
};

export default OtpScreen;
