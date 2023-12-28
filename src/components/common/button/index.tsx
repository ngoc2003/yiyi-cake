import React, { ReactNode } from "react";
import {
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import tw from "../../../../lib/tailwind";
import CustomText from "../text";

interface ButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  isActive?: boolean;
  children: ReactNode;
}

const Button = ({ onPress, isActive, children, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...tw`p-3 flex-1 rounded-xl mt-8 ${
          !!isActive ? "bg-primary-main" : "bg-smoke-light"
        }`,
        ...(!!isActive && {
          shadowColor: "#FCBC084D",
          shadowOpacity: 0.3,
          shadowOffset: { width: 0, height: 4 },
        }),
        ...(props?.style && typeof props.style === "object" ? props.style : {}),
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
