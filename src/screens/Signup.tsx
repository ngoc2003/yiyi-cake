import React, { useMemo, useState } from "react";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import tw from "../../lib/tailwind";
import { isPhoneNumber } from "../utils/regex";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import TextField from "../components/common/text-field";
import Button from "../components/common/button";

const { width } = Dimensions.get("window");

const SignupScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const isError = useMemo<boolean>(
    () => !!phoneNumber && !isPhoneNumber(phoneNumber),
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
          ...tw`bg-background rounded-t-[6] pt-12`,
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
            <Text style={tw`mt-3.5 text-text-light`}>
              Type your
              <Text style={tw`text-text-main`}> phone number </Text>
              to continue
            </Text>
            <TextField
              isError={isError}
              placeholder="Your phone number . . ."
              errorText="You must type valid phone number"
              onChangeText={(text) => setPhoneNumber(text)}
            />
            <Button
              onPress={() => navigation.navigate("Otp")}
              text="Sign up"
              isActive={!isError && !!phoneNumber}
            />
            <View style={tw`mt-30`}>
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

export default SignupScreen;
