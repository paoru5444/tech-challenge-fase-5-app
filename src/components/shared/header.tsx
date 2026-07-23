import { colors } from "@/constants/colors";
import Lucide from "@react-native-vector-icons/lucide";
import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";

export default function Header() {
  const onPressGoBack = () => {
    router.back();
  };
  return (
    <View>
      <TouchableOpacity onPress={onPressGoBack}>
        <Lucide name="chevron-left" size={30} color={colors.text.primary} />
      </TouchableOpacity>
    </View>
  );
}
