import Banner from "@/assets/images/home-banner.png";
import { ImageBackground, Text } from "react-native";

export default function banner() {
  return (
    <ImageBackground source={Banner} resizeMode="cover">
      <Text>banner</Text>
    </ImageBackground>
  );
}
