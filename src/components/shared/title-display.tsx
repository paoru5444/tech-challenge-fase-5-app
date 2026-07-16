import { AvatarProps } from "@/components/ui/avatar";
import { View, ViewStyle } from "react-native";
import Avatar from "../ui/avatar";
import Typography from "../ui/typography";

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
        {title && <Typography variant="label">{title}</Typography>}

        {description && (
          <Typography variant="bodySmall">{description}</Typography>
        )}
      </View>
    </View>
  );
}
