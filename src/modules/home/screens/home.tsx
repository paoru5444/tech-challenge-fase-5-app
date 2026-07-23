import Banner from "@/components/shared/banner";
import ScrollWrapper from "@/components/shared/scroll-wrapper";
import TaskCard from "@/components/shared/task-card";
import Typography from "@/components/ui/typography";
import { colors } from "@/constants/colors";
import { useSpacing } from "@/hooks/useSpacing";
import { router } from "expo-router";
import { useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import CreateTask from "../components/create-task";
import { useTask } from "../hooks/useTask";

export default function Home() {
  const { getTasks, pendingTasks, completedTasks, lastTasks } = useTask();

  const spacing = useSpacing();

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  const goToTasks = () => {
    router.push("/tasks");
  };

  return (
    <>
      <ScrollWrapper
        header={
          <View style={{ gap: spacing(4) }}>
            <Typography variant="h2" style={{ lineHeight: 28 }}>
              Organize suas atividades{"\n"}
              com{" "}
              <Text style={{ color: colors.brand.primary }}>SeniorEase</Text>
            </Typography>
          </View>
        }
        contentContainerStyle={{ gap: spacing(32) }}
        content={{
          paddingHorizontal: spacing(20),
          paddingTop: spacing(64),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <Banner
            title="Tarefas Pendentes"
            value={String(pendingTasks.length || "")}
          />

          <Banner
            title="Tarefas Concluidas"
            value={String(completedTasks.length || "")}
            variant="history"
          />
        </View>

        <View style={{ gap: spacing(12) }}>
          <View />

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Typography variant="subtitle">Últimas atividades</Typography>

            <Pressable onPress={goToTasks} hitSlop={12}>
              <Typography
                variant="body"
                style={{ color: colors.brand.primary, fontWeight: 600 }}
              >
                Ver todas
              </Typography>
            </Pressable>
          </View>

          <View />

          {lastTasks.length &&
            lastTasks.map((task) => <TaskCard task={task} key={task.id} />)}
        </View>
      </ScrollWrapper>

      <CreateTask />
    </>
  );
}
