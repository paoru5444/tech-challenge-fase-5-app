import { View } from "react-native";

interface DividerProps {
  size?: number;
}

export default function Divider({ size = 8 }: DividerProps) {
  return (
    <View
      style={{
        marginVertical: size,
        height: 1,
        width: "100%",
        backgroundColor: "#EAEAEA",
      }}
    />
  );
}
