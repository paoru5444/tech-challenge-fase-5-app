import ScrollWrapper from "@/components/shared/scroll-wrapper";
import TaskCard from "@/components/shared/task-card";
import Input from "@/components/ui/input";
import Typography from "@/components/ui/typography";
import { colors } from "@/constants/colors";
import { ITask } from "@/domain/entities/task";
import { useSpacing } from "@/hooks/useSpacing";
import { router } from "expo-router";
import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import CreateTask from "../components/create-task";
import { useTask } from "../hooks/useTask";

export default function Tasks() {
  const { getTasks, query, setQuery, filteredTasks } = useTask();

  const spacing = useSpacing();

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  const goToTaskDetails = (task: ITask) => {
    router.push({ pathname: "/task-details", params: task });
  };

  return (
    <>
      <ScrollWrapper
        header={
          <View style={{ gap: spacing(12) }}>
            <Typography variant="h2" style={{ lineHeight: 28 }}>
              Encontre suas{" "}
              <Text style={{ color: colors.brand.primary }}>Atividades</Text>
              {"\n"}
              ao digitar seu nome abaixo:
            </Typography>

            <Input
              value={query}
              onChangeText={setQuery}
              placeholder="Buscar atividade"
            />
          </View>
        }
        contentContainerStyle={{ gap: spacing(32) }}
        content={{ paddingHorizontal: spacing(20), paddingTop: spacing(64) }}
      >
        <View style={{ gap: spacing(16) }}>
          <View />

          <Typography variant="subtitle">Minhas atividades</Typography>

          <TouchableOpacity onPress={() => console.log("sadasdsa")}>
            <Text>sddasdads</Text>
          </TouchableOpacity>

          {filteredTasks.length &&
            filteredTasks.map((task) => (
              <TaskCard
                task={task}
                key={task.id}
                onPress={() => goToTaskDetails(task)}
              />
            ))}
        </View>
      </ScrollWrapper>

      <CreateTask />
    </>
  );
}
