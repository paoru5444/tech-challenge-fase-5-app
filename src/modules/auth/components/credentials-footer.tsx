import Typography from "@/components/ui/typography";
import { useSpacing } from "@/hooks/useSpacing";
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
  const spacing = useSpacing();

  return (
    <View
      style={{
        gap: spacing(20),
        paddingHorizontal: spacing(16),
        alignItems: "center",
      }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", gap: spacing(4) }}
      >
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
