import { ITask } from "@/domain/entities/task";
import { useTask } from "@/modules/home/hooks/useTask";
import { Feather } from "@react-native-vector-icons/feather";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Card from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { ProgressBar } from "../ui/progress-bar";
import Typography from "../ui/typography";

interface TaskCardProps {
  task: ITask;
}

export default function TaskCard({ task }: TaskCardProps) {
  const { id, title, description, checked, steps } = task;
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { deleteTask, updateTask } = useTask();

  return (
    <Card style={{ gap: 12 }}>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        onPress={() => setIsCollapsed((prev) => !prev)}
      >
        <View>
          <Typography variant="label">{title}</Typography>
          <Typography variant="bodySmall">{description}</Typography>
        </View>

        <Feather
          name={isCollapsed ? "chevron-down" : "chevron-up"}
          color="#1F2024"
          size={20}
        />
      </TouchableOpacity>

      {!isCollapsed && (
        <>
          {steps && steps.length && (
            <>
              <ProgressBar progress={50} />

              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
              >
                <Checkbox checked={true} />
                <Typography variant="body">
                  Introdução à biblioteca Jest
                </Typography>
              </View>

              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
              >
                <Checkbox checked={false} />
                <Typography variant="body">
                  Introdução à biblioteca Jest
                </Typography>
              </View>
            </>
          )}

          <View />

          <View style={{ gap: 8 }}>
            {!checked && (
              <TouchableOpacity
                onPress={() =>
                  updateTask({ ...task, checked: !task.checked }, task.id)
                }
                style={{
                  backgroundColor: "#39A304",
                  height: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 16,
                }}
              >
                <Typography variant="body" style={{ color: "#FFFFFF", fontWeight: "600" }}>
                  Concluir atividade
                </Typography>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              onPress={() => deleteTask(id)}
              style={{
                backgroundColor: "#F05069",
                height: 30,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 16,
              }}
            >
              <Typography variant="body" style={{ color: "#FFFFFF", fontWeight: "600" }}>
                Deletar atividade
              </Typography>
            </TouchableOpacity>
          </View>
        </>
      )}
    </Card>
  );
}
