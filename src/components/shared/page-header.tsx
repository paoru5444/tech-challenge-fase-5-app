import { Text, View } from "react-native";

interface PageHeader {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeader) {
  return (
    <View style={{ gap: 4 }}>
      <Text style={{ fontSize: 16, fontWeight: 700, letterSpacing: -0.2 }}>
        {title}
      </Text>
      <Text style={{ fontSize: 12 }}>{description}</Text>
    </View>
  );
}
