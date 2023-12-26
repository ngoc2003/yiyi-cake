import React from "react";
import { View } from "react-native";
import HeaderNavigation from "../../components/common/header-navigation";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import tw from "../../../lib/tailwind";
import TextField from "../../components/common/text-field";
import Button from "../../components/common/button";
import { FieldValues, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { isValidPassword } from "../../utils/regex";
import { useToast } from "react-native-toast-notifications";
import CustomText from "../../components/common/text";

const schema = yup.object().shape({
  fullname: yup.string().required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .test(
      "isValidPassword",
      "Password must contain at least 1 number, 1 uppercase character",
      isValidPassword
    )
    .min(8, "Password must have at least 8 character"),
  address: yup.string().required("This field is required"),
});

const CreateAccount = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const toast = useToast();

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname: "",
      password: "",
      address: "",
    },
    resolver: yupResolver(schema),
  });

  const canSubmit =
    !!watch("fullname") && !!watch("address") && !!watch("password");

  const onSubmit = (data: FieldValues) => {
    toast.show("Create account successfully!", {
      type: "custom",
    });
    console.log(data);
  };

  return (
    <View style={tw`flex-1 px-7 bg-background`}>
      <HeaderNavigation onPress={() => navigation.navigate("Signup")} />

      <View style={tw`items-center pt-15`}>
        <CustomText style={tw`text-3xl text-text-main font-semibold`}>
          Getting Started
        </CustomText>
        <CustomText style={tw`text-text-light mt-4.5 text-center`}>
          Create an account to continue
        </CustomText>
        <View style={tw`mt-4 w-full`}>
          <TextField
            placeholder="Your fullname"
            onChangeText={(e) => setValue("fullname", e)}
            errorText={errors.fullname?.message}
            isError={!!errors.fullname?.message}
          />
          <TextField
            placeholder="Your password"
            onChangeText={(e) => setValue("password", e)}
            errorText={errors.password?.message}
            isError={!!errors.password?.message}
          />
          <TextField
            placeholder="Your address"
            onChangeText={(e) => setValue("address", e)}
            errorText={errors.address?.message}
            isError={!!errors.address?.message}
          />
        </View>
        <Button isActive={canSubmit} onPress={handleSubmit(onSubmit)}>
          Sign up
        </Button>
      </View>
    </View>
  );
};

export default CreateAccount;
