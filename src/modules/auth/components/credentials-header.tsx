import Typography from "@/components/ui/typography";
import { View } from "react-native";

export default function CredentialsHeader() {
  return (
    <View
      style={{
        width: "100%",
        height: 250,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F67653",
      }}
    >
      <Typography variant="body">Header Image</Typography>
    </View>
  );
}
