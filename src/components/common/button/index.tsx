import React, { ReactNode } from "react";
import { TouchableOpacity } from "react-native";
import tw from "../../../../lib/tailwind";
import CustomText from "../text";

interface ButtonProps {
  onPress: () => void;
  isActive?: boolean;
  children: ReactNode;
}

const Button = ({ onPress, isActive, children }: ButtonProps) => {
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
      <CustomText
        style={tw`text-center text-text-main text-base font-semibold`}
      >
        {children}
      </CustomText>
    </TouchableOpacity>
  );
};

export default Button;
