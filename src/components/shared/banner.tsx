import { useSpacing } from "@/hooks/useSpacing";
import { ImageBackground, View } from "react-native";
import Typography from "../ui/typography";

interface BannerProps {
  value?: string;
  title: string;
}

export default function Banner({ title, value }: BannerProps) {
  const spacing = useSpacing();

  return (
    <ImageBackground
      source={require("@/assets/images/home-banner.png")}
      style={{
        height: 133,
        justifyContent: "space-around",
        paddingHorizontal: spacing(28),
        paddingVertical: spacing(16),
      }}
      resizeMode="cover"
      borderRadius={20}
    >
      <View
        style={{
          alignSelf: "flex-end",
          width: 60,
          height: 60,
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFFFFF40",
        }}
      >
        <Typography variant="h1" style={{ color: "#FFFFFF" }}>
          {value}
        </Typography>
      </View>

      <View>
        <Typography variant="h2" style={{ color: "#FFFFFF" }}>
          {title}
        </Typography>
      </View>
    </ImageBackground>
  );
}
