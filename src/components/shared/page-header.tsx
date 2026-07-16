import { useSpacing } from "@/hooks/useSpacing";
import { View } from "react-native";
import Typography from "../ui/typography";

interface PageHeader {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeader) {
  const spacing = useSpacing();

  return (
    <View style={{ gap: spacing(4) }}>
      <Typography variant="title">{title}</Typography>
      <Typography variant="bodySmall">{description}</Typography>
    </View>
  );
}
