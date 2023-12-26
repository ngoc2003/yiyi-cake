import React, { ReactNode } from "react";
import { Image, ScrollView, View } from "react-native";
import tw from "../../lib/tailwind";
import CustomText from "../components/common/text";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <ScrollView
      style={{ ...tw`bg-primary-lighter` }}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={tw`p-5 mt-8 pb-10`}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={{
            height: undefined,
            width: 200,
            aspectRatio: 16 / 6,
          }}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          shadowColor: "#FCBC084D",
          shadowOpacity: 0.3,
          shadowOffset: { width: 0, height: -12 },
          ...tw`bg-background rounded-t-[6] pt-12 flex-1`,
        }}
      >
        <Image
          source={require("../../assets/images/cakeYellow.png")}
          style={{
            height: 139,
            width: 227,
            ...tw`absolute -right-5 -top-[20]`,
          }}
          resizeMode="contain"
        />
        <View style={tw`items-center pt-0 p-5 pb-10 flex-1`}>
          <CustomText
            style={tw`text-3xl text-center font-semibold text-text-main`}
          >
            {title}
          </CustomText>
          <CustomText style={tw`pt-3.5 text-text-light`}>{subtitle}</CustomText>
          {children}
        </View>
      </View>
    </ScrollView>
  );
};

export default AuthLayout;
