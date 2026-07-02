import { Text, View } from "react-native";

interface PageHeader {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeader) {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
}
