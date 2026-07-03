import { AvatarProps } from "@/components/ui/avatar";
import { Text, View } from "react-native";
import Avatar from "../ui/avatar";

interface TitleDisplayProps extends AvatarProps {
  title?: string;
  description?: string;
}

export default function TitleDisplay({
  user,
  letter,
  title,
  description,
}: TitleDisplayProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
      }}
    >
      {letter && !user && <Avatar letter={letter} />}

      {!letter && user && <Avatar user={user} />}

      <View style={{ gap: 4 }}>
        {title && <Text style={{ fontWeight: 700 }}>{title}</Text>}

        {description && <Text>{description}</Text>}
      </View>
    </View>
  );
}
