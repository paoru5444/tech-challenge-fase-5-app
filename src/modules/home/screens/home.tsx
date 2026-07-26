import Banner from "@/components/shared/banner";
import HelpButton from "@/components/shared/help-button";
import HelpWalktrough from "@/components/shared/help-walktrough";
import ScrollWrapper from "@/components/shared/scroll-wrapper";
import TaskCard from "@/components/shared/task-card";
import Typography from "@/components/ui/typography";
import { colors } from "@/constants/colors";
import { useSpacing } from "@/hooks/useSpacing";
import * as setupActions from "@/modules/setup/store/actions";
import { selectHasSeenWalkthrough } from "@/modules/setup/store/selector";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import CreateTask from "../components/create-task";
import { useTask } from "../hooks/useTask";

export default function Home() {
  const { getTasks, pendingTasks, completedTasks, lastTasks, goToTaskDetails } =
    useTask();
  const [showHelp, setShowHelp] = useState(false);

  const dispatch = useAppDispatch();
  const hasSeenWalkthrough = useAppSelector(selectHasSeenWalkthrough);
  const spacing = useSpacing();

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  const finishWalkthrough = () => {
    dispatch(setupActions.completeWalkthrough());
  };

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
            value={String(pendingTasks.length || "0")}
          />

          <Banner
            title="Tarefas Concluidas"
            value={String(completedTasks.length || "0")}
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
            lastTasks.map((task) => (
              <TaskCard
                task={task}
                key={task.id}
                onPress={() => goToTaskDetails(task)}
              />
            ))}

          <View />

          {lastTasks.length <= 0 && (
            <HelpButton onPress={() => setShowHelp(true)} />
          )}
        </View>
      </ScrollWrapper>

      <CreateTask />

      <HelpWalktrough
        onFinish={() => {
          finishWalkthrough();
          setShowHelp(false);
        }}
        visible={!hasSeenWalkthrough || showHelp}
      />
    </>
  );
}
