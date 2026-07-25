import { ITask } from "@/domain/entities/task";
import { useSpacing } from "@/hooks/useSpacing";
import { TouchableOpacity, View } from "react-native";
import Card from "../ui/card";
import Typography from "../ui/typography";

interface TaskCardProps {
  task: ITask;
  onPress: () => void;
}

export default function TaskCard({ task, onPress }: TaskCardProps) {
  const { title, description, checked } = task;
  const spacing = useSpacing();

  return (
    <>
      <Card style={{ gap: spacing(12) }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          onPress={onPress}
        >
          <View style={{ gap: spacing(4) }}>
            <Typography
              variant="subtitle"
              style={{ textDecorationLine: checked ? "line-through" : "none" }}
            >
              {title}
            </Typography>
            <Typography
              variant="bodySmall"
              numberOfLines={1}
              style={{ textDecorationLine: checked ? "line-through" : "none" }}
            >
              {description}
            </Typography>
          </View>
        </TouchableOpacity>
      </Card>
    </>
  );
}
