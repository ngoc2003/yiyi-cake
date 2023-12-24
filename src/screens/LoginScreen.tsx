import React, { useMemo, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "../../lib/tailwind";
import { isPhoneNumber } from "../utils/regex";

const { width } = Dimensions.get("window");

const LoginScreen = () => {
  const [isFocus, setIFocus] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const isError = useMemo(
    () => phoneNumber && !isPhoneNumber(phoneNumber),
    [phoneNumber]
  );

  return (
    <View style={tw`bg-primary-lighter flex-1 items-start`}>
      <View style={tw`p-5 pt-7.5 pb-10`}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={{
            height: undefined,
            width: 200,
            aspectRatio: 16 / 6,
          }}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          width: width,
          flex: 1,
          shadowColor: "#FCBC084D",
          shadowOpacity: 0.3,
          shadowOffset: { width: 0, height: -12 },
          ...tw`bg-background rounded-t-[6] pt-22`,
        }}
      >
        <Image
          source={require("../../assets/images/cakeYellow.png")}
          style={{
            height: 139,
            width: 227,
            ...tw`absolute -right-5 -top-[20]`,
          }}
          resizeMode="contain"
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={tw`items-center justify-center p-5`}>
            <Text style={tw`text-2xl font-semibold text-text-main`}>
              Welcome,
            </Text>
            <Text style={tw`mt-4 text-text-light`}>
              Type your
              <Text style={tw`text-text-main`}> phone number </Text>
              to continue
            </Text>
            <View style={tw`w-full`}>
              <TextInput
                onFocus={() => setIFocus(true)}
                onBlur={() => setIFocus(false)}
                onChangeText={(text) => setPhoneNumber(text)}
                placeholder="Your phone number . . ."
                style={tw`mt-6 p-4 rounded-xl border w-full ${
                  isError
                    ? "border-secondary-main"
                    : isFocus
                    ? "border-primary-main"
                    : "border-smoke-main"
                } `}
              />

              {isError && (
                <Text style={tw`pt-2 text-secondary-main`}>
                  You must type valid phone number
                </Text>
              )}
            </View>
            <TouchableOpacity
              style={tw`p-3  rounded-xl mt-8 w-full ${
                !isError && phoneNumber ? "bg-primary-main" : "bg-smoke-light"
              }`}
            >
              <Text
                style={tw`text-center text-text-main text-base font-semibold`}
              >
                Sign up
              </Text>
            </TouchableOpacity>
            <View style={tw`mt-18`}>
              <Text style={tw`text-text-light`}>Or sign up with</Text>
              <View style={tw`flex-row mt-4 justify-center gap-4`}>
                <Image
                  source={require("../../assets/images/facebook.png")}
                  style={{
                    width: 36,
                    height: undefined,
                    aspectRatio: 1,
                  }}
                  resizeMode="contain"
                />
                <Image
                  source={require("../../assets/images/google.png")}
                  style={{
                    width: 36,
                    height: undefined,
                    aspectRatio: 1,
                  }}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default LoginScreen;
