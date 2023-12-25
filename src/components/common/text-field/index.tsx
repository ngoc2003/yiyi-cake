import React, { useState } from "react";
import { Text, TextInput, TextInputProps, View, ViewProps } from "react-native";
import tw from "../../../../lib/tailwind";

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
        style={tw`p-4 rounded-2xl border w-full ${
          isError
            ? "border-secondary-main"
            : isFocus
            ? "border-primary-main"
            : "border-border"
        } `}
        {...inputProp}
      />

      {isError && <Text style={tw`pt-2 text-secondary-main`}>{errorText}</Text>}
    </View>
  );
};

export default TextField;
