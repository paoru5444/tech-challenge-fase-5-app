import { Text, TouchableOpacity, View } from "react-native";

interface CredentialsFooterProps {
  onPress: () => void;
  title: string;
  buttonLabel: string;
}

export default function CredentialsFooter({
  onPress,
  title,
  buttonLabel,
}: CredentialsFooterProps) {
  return (
    <View
      style={{
        gap: 20,
        paddingHorizontal: 16,
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
        <Text>{title}</Text>

        <TouchableOpacity onPress={onPress}>
          <Text style={{ fontWeight: 700, color: "#F67653" }}>
            {buttonLabel}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
