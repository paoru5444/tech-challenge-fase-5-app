import { IUser } from "@/domain/entities/user";
import { View, ViewProps } from "react-native";
import Typography from "./typography";
export interface AvatarProps {
  user?: IUser | null;
  letter?: string;
  containerStyle?: ViewProps;
}

export default function Avatar({ user, letter, containerStyle }: AvatarProps) {
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
        ...containerStyle,
      }}
    >
      <Typography
        variant="subtitle"
        style={{ fontWeight: "700", color: "#FFFFFF" }}
      >
        {user && !letter && userFirstLetter}
        {letter && !user && letter}
      </Typography>
    </View>
  );
}
