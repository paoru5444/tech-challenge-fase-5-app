import Typography from "@/components/ui/typography";
import { colors } from "@/constants/colors";
import { useSpacing } from "@/hooks/useSpacing";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function CredentialsHeader() {
  const spacing = useSpacing();

  return (
    <ImageBackground
      source={require("@/assets/images/auth-banner.jpg")}
      resizeMode="cover"
      style={{
        width: "100%",
        height: 300,
        justifyContent: "flex-end",
        backgroundColor: "#F67653",
      }}
    >
      <View
        style={{
          ...StyleSheet.absoluteFill,
          backgroundColor: "rgba(0, 0, 0, 0.55)",
        }}
      />
      <Typography
        variant="h2"
        style={{
          color: colors.text.inverse,
          margin: spacing(16),
          lineHeight: 24,
          letterSpacing: 0.2,
        }}
      >
        Facilite sua vida profissional{"\n"}e acadêmica com{"\n"}
        <Text style={{ color: colors.brand.primary }}>SeniorEase</Text>
      </Typography>
    </ImageBackground>
  );
}
