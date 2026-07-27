import { useFeedbackToast } from "@/components/shared/feedback-toast";
import Header from "@/components/shared/header";
import ScrollWrapper from "@/components/shared/scroll-wrapper";
import Typography from "@/components/ui/typography";
import { colors } from "@/constants/colors";
import { ITask } from "@/domain/entities/task";
import { useContrastColor } from "@/hooks/useContrastColor";
import { useSpacing } from "@/hooks/useSpacing";
import { selectExtraConfirmation } from "@/modules/setup/store/selector";
import { useAppSelector } from "@/store/hooks";
import BottomSheet, { BottomSheetView } from "@expo/ui/community/bottom-sheet";
import { router, useLocalSearchParams } from "expo-router";
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

  const { notify } = useFeedbackToast();

  const isChecked = String(task.checked) === "true";

  const completeTask = async () => {
    try {
      await updateTask({ ...task, checked: !isChecked }, task.id);
      notify(
        isChecked ? "Atividade reaberta." : "Atividade concluída com sucesso!",
      );
      return true;
    } catch {
      notify("Não foi possível atualizar a atividade.", "danger");
      return false;
    }
  };

  const requestComplete = async () => {
    if (extraConfirmation) {
      setPendingAction("complete");
      sheetRef.current?.snapToIndex(0);
    } else {
      const success = await completeTask();
      if (success) router.back();
    }
  };

  const requestDelete = async () => {
    if (extraConfirmation) {
      setPendingAction("delete");
      sheetRef.current?.snapToIndex(0);
    } else {
      await deleteTask(task?.id);
      router.back();
    }
  };

  const handleConfirm = async () => {
    if (pendingAction === "complete") {
      const success = await completeTask();
      sheetRef.current?.snapToIndex(-1);
      if (success) router.replace("/tasks");
    } else if (pendingAction === "delete") {
      await deleteTask(task?.id);
      sheetRef.current?.snapToIndex(-1);
      router.back();
    }
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
      </View>

      <BottomSheet
        ref={sheetRef}
        snapPoints={["30%"]}
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
            justifyContent: "space-between",
            padding: spacing(24),
            gap: spacing(24),
          }}
        >
          <Typography variant="h2" style={{ alignSelf: "center" }}>
            {pendingAction === "delete"
              ? "Deletar atividade?"
              : "Concluir atividade?"}
          </Typography>

          <Typography variant="body" style={{ textAlign: "center" }}>
            {pendingAction === "delete"
              ? "Essa ação não pode ser desfeita. Tem certeza que deseja excluir esta atividade?"
              : "Tem certeza que deseja marcar esta atividade como concluída?"}
          </Typography>

          <View style={{ gap: spacing(12) }}>
            <TouchableOpacity
              onPress={handleCancel}
              style={{
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 16,
                borderWidth: 1,
                borderColor: cancelBorderColor,
              }}
            >
              <Typography variant="subtitle">Cancelar</Typography>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleConfirm}
              style={{
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 16,
                backgroundColor:
                  pendingAction === "delete" ? "#F05069" : "#39A304",
              }}
            >
              <Typography
                variant="subtitle"
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
