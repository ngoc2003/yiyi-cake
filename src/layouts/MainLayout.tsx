import React from "react";
import { View, ViewProps } from "react-native";
import tw from "../../lib/tailwind";

interface MainLayoutProps extends ViewProps {
  style?: any;
}

const MainLayout = ({ children, style }: MainLayoutProps) => {
  return (
    <View style={{ ...tw`bg-background flex-1 `, ...style }}>{children}</View>
  );
};

export default MainLayout;
