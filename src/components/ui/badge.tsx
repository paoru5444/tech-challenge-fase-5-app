import { Text, View } from "react-native";

interface BadgeProps {
  text: string;
}

export default function Badge({ text }: BadgeProps) {
  return (
    <View
      style={{
        backgroundColor: "#D13F62",
        paddingVertical: 4,
        paddingHorizontal: 6,
        borderRadius: 16,
      }}
    >
      <Text style={{ color: "#FFFFFF" }}>{text}</Text>
    </View>
  );
}
