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
        paddingHorizontal: 28,
        paddingVertical: 16,
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
        <Text style={{ color: "#FFFFFF", fontSize: 28, fontWeight: 700 }}>
          {value}
        </Text>
      </View>

      <View>
        <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: 700 }}>
          {title}
        </Text>
      </View>
    </ImageBackground>
  );
}
