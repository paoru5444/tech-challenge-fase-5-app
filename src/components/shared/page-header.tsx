import { View } from "react-native";
import Typography from "../ui/typography";

interface PageHeader {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeader) {
  return (
    <View style={{ gap: 4 }}>
      <Typography variant="title">{title}</Typography>
      <Typography variant="bodySmall">{description}</Typography>
    </View>
  );
}
