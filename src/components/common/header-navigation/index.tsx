import React from "react";
import { TouchableOpacity, View } from "react-native";
import { ArrowLongLeftIcon } from "react-native-heroicons/outline";
import tw from "../../../../lib/tailwind";

interface HeaderNavigationProp {
  onPress: () => void;
}

const HeaderNavigation = ({ onPress }: HeaderNavigationProp) => {
  return (
    <View style={tw`pt-12`}>
      <TouchableOpacity onPress={onPress}>
        <ArrowLongLeftIcon color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderNavigation;
