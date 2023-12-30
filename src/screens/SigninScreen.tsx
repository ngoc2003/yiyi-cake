import React, { useRef } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import tw from "../../lib/tailwind";
import { isPhoneNumber } from "../utils/regex";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import TextField from "../components/common/text-field";
import Button from "../components/common/button";
import AuthLayout from "../layouts/AuthLayout";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useToast } from "react-native-toast-notifications";
import CustomText from "../components/common/text";
import { firebaseConfig } from "../../config/firebase.config";
import useFirebaseAuth from "../hooks/useFirebaseAuth";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";

const schema = yup.object().shape({
  phoneNumber: yup
    .string()
    .required("This field is required")
    .test(
      "isValidPhoneNumber",
      "You must type a valid phone number to continue",
      isPhoneNumber
    ),
});

const SigninScreen = () => {
  const toast = useToast();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { verifyPhoneNumber, getUserByPhoneNumber } = useFirebaseAuth();
  const recaptchaVerifier = useRef(null);

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phoneNumber: "",
    },
    resolver: yupResolver(schema),
  });

  const canSubmit = !!watch("phoneNumber");

  const onSubmit = async ({ phoneNumber }: FieldValues) => {
    try {
      const formattedPhoneNumber = /^0/.test(phoneNumber)
        ? "+84" + phoneNumber.substring(1)
        : phoneNumber;

      const userInformation = await getUserByPhoneNumber(formattedPhoneNumber);

      if (!userInformation) {
        return toast.show(
          "This phone number haven't signed up with any account.",
          {
            type: "custom",
            onClose: () => navigation.navigate("Signup"),
          }
        );
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
          toast.show("Signin successfully!", {
            type: "custom",
            onClose: () => navigation.navigate("Main"),
          });
        },
      });
    } catch (error) {
      console.error("Phone authentication error:", error);
      toast.show("Failed to check phone number. Please try again.", {
        type: "error",
      });
    }
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Type phone number and password to continue."
    >
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />

      <TextField
        placeholder="Your phone number . . ."
        errorText={errors.phoneNumber?.message}
        isError={!!errors.phoneNumber?.message}
        onChangeText={(text) => setValue("phoneNumber", text)}
      />
      <Button fullWidth onPress={handleSubmit(onSubmit)} isActive={canSubmit}>
        Sign in
      </Button>

      <View style={tw`py-5 items-center flex-row`}>
        <CustomText style={tw`text-text-light`}>
          Don't have an account?
        </CustomText>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <CustomText style={tw`text-text-main font-semibold ml-1`}>
            Sign up
          </CustomText>
        </TouchableOpacity>
      </View>

      {/* <View style={tw`mt-18`}>
        <CustomText style={tw`text-text-light`}>Or sign in with</CustomText>
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
      </View> */}
    </AuthLayout>
  );
};

export default SigninScreen;
