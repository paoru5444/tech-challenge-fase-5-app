import Header from "@/components/shared/header";
import ScrollWrapper from "@/components/shared/scroll-wrapper";
import { Checkbox } from "@/components/ui/checkbox";
import { ProgressBar } from "@/components/ui/progress-bar";
import Typography from "@/components/ui/typography";
import { colors } from "@/constants/colors";
import { ITask } from "@/domain/entities/task";
import { useContrastColor } from "@/hooks/useContrastColor";
import { useSpacing } from "@/hooks/useSpacing";
import { selectExtraConfirmation } from "@/modules/setup/store/selector";
import { useAppSelector } from "@/store/hooks";
import BottomSheet, { BottomSheetView } from "@expo/ui/community/bottom-sheet";
import { useLocalSearchParams } from "expo-router";
import { useRef, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { useTask } from "../hooks/useTask";

type PendingAction = "complete" | "delete" | null;

export default function TasksDetails() {
  const spacing = useSpacing();
  const task = useLocalSearchParams<ITask>();
  const { updateTask, deleteTask } = useTask();
  const extraConfirmation = useAppSelector(selectExtraConfirmation);
  const sheetRef = useRef<BottomSheet>(null);
  const cancelBorderColor = useContrastColor("#EAEAEA", "#000000");
  const [pendingAction, setPendingAction] = useState<PendingAction>(null);

  console.log("task: ", task);

  const completeTask = () =>
    updateTask({ ...task, checked: !task.checked }, task.id);

  const requestComplete = () => {
    if (extraConfirmation) {
      setPendingAction("complete");
      sheetRef.current?.snapToIndex(0);
    } else {
      completeTask();
    }
  };

  const requestDelete = () => {
    if (extraConfirmation) {
      setPendingAction("delete");
      sheetRef.current?.snapToIndex(0);
    } else {
      deleteTask(task?.id);
    }
  };

  const handleConfirm = () => {
    if (pendingAction === "complete") {
      completeTask();
    } else if (pendingAction === "delete") {
      deleteTask(task?.id);
    }
    sheetRef.current?.snapToIndex(-1);
  };

  const handleCancel = () => {
    sheetRef.current?.snapToIndex(-1);
  };

  return (
    <ScrollWrapper
      header={<Header />}
      footer={
        <View style={{ gap: spacing(16) }}>
          <TouchableOpacity
            onPress={requestComplete}
            style={{
              backgroundColor: "#39A304",
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
            }}
          >
            <Typography
              variant="subtitle"
              style={{ color: "#FFFFFF", fontWeight: "600" }}
            >
              Concluir atividade
            </Typography>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={requestDelete}
            style={{
              backgroundColor: "#F05069",
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
            }}
          >
            <Typography
              variant="subtitle"
              style={{ color: "#FFFFFF", fontWeight: "600" }}
            >
              Deletar atividade
            </Typography>
          </TouchableOpacity>
        </View>
      }
      contentContainerStyle={{ gap: spacing(32) }}
      content={{ paddingHorizontal: spacing(20), paddingTop: spacing(64) }}
    >
      <View style={{ gap: spacing(60) }}>
        <View />

        <View style={{ gap: spacing(16) }}>
          <Typography variant="label" style={{ color: colors.text.secondary }}>
            Atividade a fazer:
          </Typography>
          <Typography variant="h1">{task.title}</Typography>
        </View>

        <View style={{ gap: spacing(16) }}>
          <Typography variant="label" style={{ color: colors.text.secondary }}>
            Descrição da atividade:
          </Typography>
          <Typography variant="subtitle">{task.description}</Typography>
        </View>

        <View style={{ gap: spacing(16) }}>
          <Typography variant="label" style={{ color: colors.text.secondary }}>
            Passo a passo:
          </Typography>

          <View style={{ gap: spacing(16) }}>
            <ProgressBar progress={50} />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: spacing(8),
              }}
            >
              <Checkbox checked={true} />
              <Typography variant="body">
                Introdução à biblioteca Jest
              </Typography>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: spacing(8),
              }}
            >
              <Checkbox checked={false} />
              <Typography variant="body">
                Introdução à biblioteca Jest
              </Typography>
            </View>
          </View>
        </View>
      </View>

      <BottomSheet
        ref={sheetRef}
        snapPoints={["35%"]}
        index={-1}
        onChange={(index) => {
          if (index === -1) {
            setPendingAction(null);
          }
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
          <Typography variant="h2">
            {pendingAction === "delete"
              ? "Deletar atividade?"
              : "Concluir atividade?"}
          </Typography>

          <Typography variant="body" style={{ textAlign: "center" }}>
            {pendingAction === "delete"
              ? "Essa ação não pode ser desfeita. Tem certeza que deseja excluir esta atividade?"
              : "Tem certeza que deseja marcar esta atividade como concluída?"}
          </Typography>

          <View
            style={{ width: "100%", flexDirection: "row", gap: spacing(12) }}
          >
            <TouchableOpacity
              onPress={handleCancel}
              style={{
                flex: 1,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 16,
                borderWidth: 1,
                borderColor: cancelBorderColor,
              }}
            >
              <Typography variant="body">Cancelar</Typography>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleConfirm}
              style={{
                flex: 1,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 16,
                backgroundColor:
                  pendingAction === "delete" ? "#F05069" : "#39A304",
              }}
            >
              <Typography
                variant="body"
                style={{ color: "#FFFFFF", fontWeight: "600" }}
              >
                Confirmar
              </Typography>
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </ScrollWrapper>
  );
}
