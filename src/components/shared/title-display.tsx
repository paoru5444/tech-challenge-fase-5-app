import Avatar, { AvatarProps } from "@/components/ui/avatar";
import { useSpacing } from "@/hooks/useSpacing";
import { View, ViewStyle } from "react-native";
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
  const spacing = useSpacing();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: spacing(10),
      }}
    >
      {letter && !user && (
        <Avatar letter={letter} containerStyle={containerStyle} />
      )}

      {!letter && user && (
        <Avatar user={user} containerStyle={containerStyle} />
      )}

      <View style={{ gap: spacing(4), width: "90%" }}>
        {title && <Typography variant="subtitle">{title}</Typography>}

        {description && (
          <Typography variant="bodySmall">{description}</Typography>
        )}
      </View>
    </View>
  );
}
