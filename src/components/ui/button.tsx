import { Text, TouchableOpacity } from "react-native";

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
      <Text style={{ color: "#FFFFFF", fontWeight: "700", fontSize: 16 }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
