import { ITask } from "@/domain/entities/task";
import { useTask } from "@/modules/home/hooks/useTask";
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
  const { deleteTask } = useTask();

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
          <Text>{title}</Text>
          <Text>{description}</Text>
        </View>

        <Text>{isCollapsed ? "Abrir" : "Fechar"}</Text>
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
