import React from "react";
import { Text, TouchableOpacity } from "react-native";
import tw from "../../../../lib/tailwind";

interface ButtonProps {
  onPress: () => void;
  isActive?: boolean;
  text: string;
}

const Button = ({ onPress, isActive, text }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...tw`p-3  rounded-xl mt-8 w-full ${
          !!isActive ? "bg-primary-main" : "bg-smoke-light"
        }`,
        ...(!!isActive && {
          shadowColor: "#FCBC084D",
          shadowOpacity: 0.3,
          shadowOffset: { width: 0, height: 4 },
        }),
      }}
    >
      <Text style={tw`text-center text-text-main text-base font-semibold`}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
