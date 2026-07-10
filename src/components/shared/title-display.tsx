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

      <View style={{ gap: 4, width: "90%" }}>
        {title && (
          <Text style={{ fontSize: 12, fontWeight: 700 }}>{title}</Text>
        )}

        {description && <Text style={{ fontSize: 12 }}>{description}</Text>}
      </View>
    </View>
  );
}
