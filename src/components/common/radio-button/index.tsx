import { Pressable, View } from "react-native";
import tw from "../../../../lib/tailwind";
import { colors } from "../../../theme";

export const RadioButton = ({
  checked = false,
  onChange = (val: any) => {},
  buttonStyle = {},
  activeButtonStyle = {},
  inactiveButtonStyle = {},
  activeIconProps = {},
  inactiveIconProps = {},
}) => {
  return (
    <Pressable
      style={{
        ...tw`w-6 h-6 p-0.5 items-center justify-center rounded-full border-2 border-primary-main `,
        ...buttonStyle,
        ...(checked ? activeButtonStyle : inactiveButtonStyle),
        ...(checked ? { backgroundColor: "bg-primary-main" } : {}),
      }}
      onPress={() => onChange(!checked)}
    >
      {checked && (
        <View
          style={{
            width: "100%",
            borderRadius: 100,
            aspectRatio: 1,
            backgroundColor: colors.primary.main,
          }}
        />
      )}
    </Pressable>
  );
};
