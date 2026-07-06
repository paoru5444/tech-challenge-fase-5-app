import { AvatarProps } from "@/components/ui/avatar";
import { Text, View, ViewStyle } from "react-native";
import Avatar from "../ui/avatar";

interface TitleDisplayProps extends AvatarProps {
  title?: string;
  description?: string;
  containerStyle?: ViewStyle;
}

export default function TitleDisplay({
  user,
  letter,
  title,
  description,
  containerStyle,
}: TitleDisplayProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
      }}
    >
      {letter && !user && (
        <Avatar letter={letter} containerStyle={containerStyle} />
      )}

      {!letter && user && (
        <Avatar user={user} containerStyle={containerStyle} />
      )}

      <View style={{ gap: 4 }}>
        {title && <Text style={{ fontWeight: 700 }}>{title}</Text>}

        {description && <Text>{description}</Text>}
      </View>
    </View>
  );
}
