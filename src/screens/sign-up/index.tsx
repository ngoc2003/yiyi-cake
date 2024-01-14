import React, { useMemo, useRef, useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import tw from "../../../lib/tailwind";
import { isPhoneNumber } from "../../utils/regex";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import TextField from "../../components/common/text-field";
import Button from "../../components/common/button";
import AuthLayout from "../../layouts/AuthLayout";
import CustomText from "../../components/common/text";
import { debounce } from "lodash";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../../../config/firebase.config";
import useFirebaseAuth from "../../hooks/useFirebaseAuth";

const SignupScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const isError = useMemo<boolean>(
    () => !!phoneNumber && !isPhoneNumber(phoneNumber),
    [phoneNumber]
  );

  const { verifyPhoneNumber, getUserByPhoneNumber } = useFirebaseAuth();
  const recaptchaVerifier = useRef(null);

  const handleSignUp = async () => {
    try {
      const formattedPhoneNumber = /^0/.test(phoneNumber)
        ? "+84" + phoneNumber.substring(1)
        : phoneNumber;

      const userInformation = await getUserByPhoneNumber(formattedPhoneNumber);

      if (userInformation) {
        return navigation.navigate("Signin");
      }
      if (!recaptchaVerifier?.current) {
        return;
      }
      const verification = await verifyPhoneNumber(
        formattedPhoneNumber,
        recaptchaVerifier.current
      );

      navigation.navigate("Otp", {
        v: verification,
        p: formattedPhoneNumber,
        a: () => {
          navigation.navigate("CreateAccount", {
            phoneNumber: formattedPhoneNumber,
          });
        },
      });
    } catch (error) {
      console.error("Phone authentication error:", error);
    }
  };

  const handlePhoneNumberChange = debounce((text: string) => {
    setPhoneNumber(text);
  }, 200);

  return (
    <AuthLayout title="Welcome" subtitle="Type your phone number to sign up">
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      <TextField
        isError={isError}
        placeholder="Your phone number . . ."
        errorText="You must type valid phone number"
        onChangeText={handlePhoneNumberChange}
      />
      <Button
        fullWidth
        onPress={() => handleSignUp()}
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

      {/* <View style={tw`mt-30`}>
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
      </View> */}
    </AuthLayout>
  );
};

export default SignupScreen;
