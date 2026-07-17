import Banner from "@/components/shared/banner";
import PageHeader from "@/components/shared/page-header";
import ScrollWrapper from "@/components/shared/scroll-wrapper";
import TaskCard from "@/components/shared/task-card";
import Button from "@/components/ui/button";
import { InputControl } from "@/components/ui/input-control";
import Typography from "@/components/ui/typography";
import { useSpacing } from "@/hooks/useSpacing";
import BottomSheet, { BottomSheetView } from "@expo/ui/community/bottom-sheet";
import Feather from "@react-native-vector-icons/feather";
import { useEffect, useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useTask } from "../hooks/useTask";

export default function Home() {
  const { control, errors, handleSubmit, addTask, getTasks, tasks, sheetRef } =
    useTask();

  const spacing = useSpacing();

  useEffect(() => {
    getTasks();
  }, []);

  const pendingTasks = useMemo(
    () => tasks.filter((task) => task.checked === false) || [],
    [tasks],
  );

  return (
    <>
      <ScrollWrapper
        header={
          <PageHeader
            title={"Atividades"}
            description={"Suas metas e objetivos listados aqui"}
          />
        }
        contentContainerStyle={{ gap: spacing(32) }}
        content={{ paddingHorizontal: spacing(20), paddingTop: spacing(32) }}
      >
        <Banner
          title="Atividades pendentes"
          value={String(tasks.length || "")}
        />

        <View style={{ gap: spacing(16) }}>
          <Typography variant="subtitle">Minhas atividades</Typography>

          {pendingTasks.length &&
            pendingTasks.map((task) => <TaskCard task={task} key={task.id} />)}
        </View>
      </ScrollWrapper>

      <TouchableOpacity
        onPress={() => sheetRef.current?.snapToIndex(0)}
        style={{
          width: 50,
          height: 50,
          backgroundColor: "#F67653",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 25,
          position: "absolute",
          bottom: 20,
          right: 20,
        }}
      >
        <Text style={{ fontSize: 40, fontWeight: 300, color: "#FFFFFF" }}>
          <Feather name="plus" color={"#FFFFFF"} size={28} />
        </Text>
      </TouchableOpacity>

      <BottomSheet
        ref={sheetRef}
        snapPoints={["45%", "50%", "100%"]}
        index={-1}
        onChange={(index) => {
          console.log("onChange", index);
        }}
        onClose={() => {
          console.log("closed");
        }}
        enablePanDownToClose
        backgroundStyle={{
          backgroundColor: "#FFFFFF",
        }}
        enableOverDrag={false}
      >
        <BottomSheetView
          style={{
            flex: 1,
            padding: spacing(24),
            alignItems: "center",
            justifyContent: "space-between",
            gap: spacing(16),
          }}
        >
          <Typography variant="h2">Nova atividade</Typography>

          <View style={{ width: "100%", gap: spacing(24) }}>
            <InputControl
              label="Nome da atividade"
              placeholder="Assistir ao módulo 01*"
              control={control}
              error={errors["title"]}
              name="title"
              disablePaddingVertical
            />

            <InputControl
              label="Descrição da atividade"
              placeholder="Finalizar as aulas 01 e 02*"
              autoCapitalize="none"
              control={control}
              error={errors["description"]}
              name="description"
              disablePaddingVertical
            />
          </View>

          <Button text="Criar atividade" onPress={handleSubmit(addTask)} />
        </BottomSheetView>
      </BottomSheet>
    </>
  );
}

// Amanhã fazer o bottom sheet
