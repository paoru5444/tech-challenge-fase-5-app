import { ITask } from "@/domain/entities/task";
import { useTask } from "@/modules/home/hooks/useTask";
import { Feather } from "@react-native-vector-icons/feather";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Card from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { ProgressBar } from "../ui/progress-bar";

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
          <Text style={{ fontSize: 12, fontWeight: 700 }}>{title}</Text>
          <Text style={{ fontSize: 12 }}>{description}</Text>
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
                <Text>Introdução à biblioteca Jest</Text>
              </View>

              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
              >
                <Checkbox checked={false} />
                <Text>Introdução à biblioteca Jest</Text>
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
                <Text style={{ color: "#FFFFFF", fontWeight: 600 }}>
                  Concluir atividade
                </Text>
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
              <Text style={{ color: "#FFFFFF", fontWeight: 600 }}>
                Deletar atividade
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </Card>
  );
}
