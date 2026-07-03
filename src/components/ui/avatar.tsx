import { IUser } from "@/domain/entities/user";
import { Text, View } from "react-native";
export interface AvatarProps {
  user?: IUser | null;
  letter?: string;
}

export default function Avatar({ user, letter }: AvatarProps) {
  const userFirstLetter = user?.displayName?.split("")[0] || "U";
  return (
    <View
      style={{
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: "#F67653",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: -0.4,
          color: "#FFFFFF",
        }}
      >
        {user && !letter && userFirstLetter}
        {letter && !user && letter}
      </Text>
    </View>
  );
}
