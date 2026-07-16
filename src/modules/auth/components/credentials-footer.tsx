import Typography from "@/components/ui/typography";
import { TouchableOpacity, View } from "react-native";

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
        <Typography variant="body">{title}</Typography>

        <TouchableOpacity onPress={onPress}>
          <Typography variant="body" style={{ fontWeight: "700", color: "#F67653" }}>
            {buttonLabel}
          </Typography>
        </TouchableOpacity>
      </View>
    </View>
  );
}
