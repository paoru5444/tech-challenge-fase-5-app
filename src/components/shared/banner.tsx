import { ImageBackground, View } from "react-native";
import Typography from "../ui/typography";

interface BannerProps {
  value?: string;
  title: string;
  variant?: "home" | "history";
  height?: number;
}

export default function Banner({
  title,
  value,
  variant = "home",
  height,
}: BannerProps) {
  const IMAGES = {
    home: require("@/assets/images/home-banner.png"),
    history: require("@/assets/images/history-banner.png"),
  };

  return (
    <ImageBackground
      source={IMAGES[variant]}
      style={{
        flex: 1,
        height: height ?? 200,
        justifyContent: "space-around",
        paddingHorizontal: 16,
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
