import { StyleProp, View, ViewStyle } from "react-native";

interface Card {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export default function Card({ style, children }: Card) {
  return (
    <View
      style={{
        borderWidth: 2,
        paddingVertical: 24,
        paddingHorizontal: 20,
        borderRadius: 32,
        backgroundColor: "#FFFFFF",
        borderColor: "#EAEAEA",
        ...style,
      }}
    >
      {children}
    </View>
  );
}
