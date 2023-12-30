import React, { ReactNode } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import tw from "../../../../lib/tailwind";
import CustomText from "../text";

interface ButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  isActive?: boolean;
  children: ReactNode;
  fullWidth?: boolean;
}

const Button = ({
  onPress,
  fullWidth,
  isActive,
  children,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      disabled={!isActive}
      onPress={onPress}
      style={{
        ...tw.style(
          "p-3 rounded-xl mt-8",
          !!isActive ? "bg-primary-main" : "bg-smoke-light",
          fullWidth && "w-full"
        ),
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
