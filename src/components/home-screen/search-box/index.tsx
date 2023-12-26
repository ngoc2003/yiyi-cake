import React from "react";
import { TouchableOpacity, View } from "react-native";
import tw from "../../../../lib/tailwind";
import TextField from "../../common/text-field";
import { AdjustmentsVerticalIcon } from "react-native-heroicons/outline";

const SearchBox = () => {
  return (
    <View style={tw`flex-row my-7 gap-2.5 w-full`}>
      <View style={tw`flex-1`}>
        <TextField
          containerProp={{
            style: tw`mt-0`,
          }}
          placeholder="Searching for cake . . ."
          onChangeText={() => {}}
        />
      </View>
      <TouchableOpacity
        style={{
          aspectRatio: 1,
          ...tw`bg-primary-main rounded-xl items-center justify-center`,
        }}
      >
        <AdjustmentsVerticalIcon color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBox;
