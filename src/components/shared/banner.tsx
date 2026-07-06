import { ImageBackground, Text, View } from "react-native";

interface BannerProps {
  value?: string;
  title: string;
}

export default function Banner({ title, value }: BannerProps) {
  return (
    <ImageBackground
      source={require("@/assets/images/home-banner.png")}
      style={{
        height: 133,
        justifyContent: "space-around",
        paddingHorizontal: 64,
      }}
      resizeMode="cover"
      borderRadius={20}
    >
      <View style={{ alignSelf: "flex-end" }}>
        <Text>{value}</Text>
      </View>

      <View>
        <Text>{title}</Text>
      </View>
    </ImageBackground>
  );
}
