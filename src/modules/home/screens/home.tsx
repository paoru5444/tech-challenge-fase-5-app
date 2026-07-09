import Banner from "@/components/shared/banner";
import ScrollWrapper from "@/components/shared/scroll-wrapper";
import TaskCard from "@/components/shared/task-card";
import Button from "@/components/ui/button";
import Header from "@/components/ui/header";
import { InputControl } from "@/components/ui/input-control";
import BottomSheet, { BottomSheetView } from "@expo/ui/community/bottom-sheet";
import { useEffect, useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useTask } from "../hooks/useTask";

export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const {
    control,
    errors,
    handleSubmit,
    addTask,
    deleteTask,
    getTasks,
    tasks,
  } = useTask();

  const sheetRef = useRef<BottomSheet>(null);

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <ScrollWrapper
        header={<Header />}
        contentContainerStyle={{ marginVertical: 32, gap: 8 }}
        content={{ paddingHorizontal: 20, paddingTop: 32 }}
      >
        <Banner title="Atividades pendentes" value="3" />

        <Text>Minhas atividades</Text>

        {tasks.length && tasks.map((task) => <TaskCard task={task} />)}
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
          +
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
            padding: 24,
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: 700, letterSpacing: -0.2 }}>
            Nova atividade
          </Text>

          <View style={{ width: "100%", gap: 24 }}>
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
