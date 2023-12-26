import React, { useState } from "react";
import { TextInput, TextInputProps, View, ViewProps } from "react-native";
import tw from "../../../../lib/tailwind";
import CustomText from "../text";

interface TextFieldProps {
  isError?: boolean;
  onChangeText: (text: string) => void;
  errorText?: string;
  containerProp?: ViewProps;
  inputProp?: TextInputProps;
  placeholder?: string;
}

const TextField = ({
  placeholder = "Placeholder",
  isError,
  onChangeText,
  errorText = "Error",
  containerProp,
  inputProp,
}: TextFieldProps) => {
  const [isFocus, setIFocus] = useState<boolean>(false);

  return (
    <View style={tw`w-full mt-6`} {...containerProp}>
      <TextInput
        onFocus={() => setIFocus(true)}
        onBlur={() => setIFocus(false)}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={tw`p-4 rounded-xl border w-full ${
          isError
            ? "border-secondary-main"
            : isFocus
            ? "border-primary-main"
            : "border-border"
        } `}
        {...inputProp}
      />

      {isError && (
        <CustomText style={tw`pt-2 text-secondary-main`}>
          {errorText}
        </CustomText>
      )}
    </View>
  );
};

export default TextField;
