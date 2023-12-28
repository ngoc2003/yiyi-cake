import React from "react";
import { View } from "react-native";
import tw from "../../../../lib/tailwind";
import CustomText from "../../common/text";
import TextField from "../../common/text-field";

const Note = () => {
  return (
    <View>
      <CustomText style={tw`text-xl mt-7.5`}>Notes</CustomText>
      <TextField
        onChangeText={() => {}}
        inputProp={{
          multiline: true,
          numberOfLines: 4,
          maxLength: 200,
        }}
        placeholder="Put your wishes for the recipient here"
      />
    </View>
  );
};

export default Note;
