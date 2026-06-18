import { Pressable, Text, View } from "react-native";

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
    <View>
      <Text>{title}</Text>

      <Pressable onPress={onPress}>
        <Text>{buttonLabel}</Text>
      </Pressable>
    </View>
  );
}
