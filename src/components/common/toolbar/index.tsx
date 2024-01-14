import React from "react";
import { TouchableOpacity, View } from "react-native";
import tw from "../../../../lib/tailwind";
import { ChevronRightIcon } from "react-native-heroicons/outline";

interface ToolbarProp {
  onPress: () => void;
  activeIndex?: number;
  step?: number;
}

const Toolbar = ({ onPress, step = 2, activeIndex = 0 }: ToolbarProp) => {
  return (
    <View
      style={tw`p-6 flex-row justify-between items-center absolute bottom-6 right-0`}
    >
      <View style={tw`flex-row flex-1 justify-start items-center`}>
        {Array.from({ length: step })
          .fill(0)
          .map((_, index) => (
            <View
              key={index}
              style={tw` h-2.5 rounded-xl mr-1 ${
                activeIndex === index
                  ? "bg-primary-main w-5"
                  : "bg-smoke-main w-2.5"
              }`}
            ></View>
          ))}
      </View>
      <TouchableOpacity
        onPress={onPress}
        style={tw`p-2 bg-primary-main rounded-lg`}
      >
        <ChevronRightIcon strokeWidth={3} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default Toolbar;
