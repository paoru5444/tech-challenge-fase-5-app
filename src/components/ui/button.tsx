import { TouchableOpacity } from "react-native";
import Typography from "./typography";

export default function Button({ text, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: "100%",
        height: 50,
        backgroundColor: "#F67653",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="title" style={{ color: "#FFFFFF" }}>
        {text}
      </Typography>
    </TouchableOpacity>
  );
}
