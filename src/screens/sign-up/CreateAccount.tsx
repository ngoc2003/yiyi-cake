import React from "react";
import { View } from "react-native";
import HeaderNavigation from "../../components/common/header-navigation";
import {
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import tw from "../../../lib/tailwind";
import TextField from "../../components/common/text-field";
import Button from "../../components/common/button";
import { FieldValues, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomText from "../../components/common/text";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../config/firebase.config";

const schema = yup.object().shape({
  fullName: yup.string().required("This field is required"),
  address: yup.string().required("This field is required"),
});

const CreateAccount = () => {
  const route = useRoute();
  const { phoneNumber } = route.params;
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      address: "",
    },
    resolver: yupResolver(schema),
  });

  const canSubmit = !!watch("fullName") && !!watch("address");

  const onSubmit = async (data: FieldValues) => {
    await addDoc(collection(db, "users"), {
      ...data,
      phoneNumber,
    });

    navigation.navigate("Home");
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
            onChangeText={(e) => setValue("fullName", e)}
            errorText={errors.fullName?.message}
            isError={!!errors.fullName?.message}
          />
          <TextField
            placeholder="Your address"
            onChangeText={(e) => setValue("address", e)}
            errorText={errors.address?.message}
            isError={!!errors.address?.message}
          />
        </View>
        <Button fullWidth isActive={canSubmit} onPress={handleSubmit(onSubmit)}>
          Sign up
        </Button>
      </View>
    </View>
  );
};

export default CreateAccount;
