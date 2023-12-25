import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import tw from "../../lib/tailwind";
import { isPhoneNumber, isValidPassword } from "../utils/regex";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import TextField from "../components/common/text-field";
import Button from "../components/common/button";
import AuthLayout from "../layouts/AuthLayout";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useToast } from "react-native-toast-notifications";

const schema = yup.object().shape({
  password: yup
    .string()
    .required("This field is required")
    .test(
      "isValidPassword",
      "Password must contain at least 1 number, 1 uppercase character",
      isValidPassword
    )
    .min(8, "Password must have at least 8 character"),
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

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
      phoneNumber: "",
    },
    resolver: yupResolver(schema),
  });

  const canSubmit = !!watch("phoneNumber") && !!watch("password");

  const onSubmit = (data: FieldValues) => {
    toast.show("Create account successfully!", {
      type: "custom",
    });
    console.log(data);
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Type phone number and password to continue."
    >
      <TextField
        placeholder="Your phone number . . ."
        errorText={errors.phoneNumber?.message}
        isError={!!errors.phoneNumber?.message}
        onChangeText={(text) => setValue("phoneNumber", text)}
      />
      <TextField
        placeholder="Your password . . ."
        errorText={errors.password?.message}
        isError={!!errors.password?.message}
        onChangeText={(text) => setValue("password", text)}
      />
      <Button
        onPress={handleSubmit(onSubmit)}
        text="Sign in"
        isActive={canSubmit}
      />

      <View style={tw`py-5 items-center flex-row`}>
        <Text style={tw`text-text-light`}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={tw`text-text-main font-semibold ml-1`}>Sign up</Text>
        </TouchableOpacity>
      </View>

      <View style={tw`mt-18`}>
        <Text style={tw`text-text-light`}>Or sign in with</Text>
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
    </AuthLayout>
  );
};

export default SigninScreen;
