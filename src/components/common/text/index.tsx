import React from "react";
import { Text, TextProps } from "react-native";

const CustomText = (props: TextProps) => {
  return (
    <Text
      style={{
        fontFamily: "Poppins",
      }}
      {...props}
    />
  );
};

export default CustomText;
