import { ITask } from "@/domain/entities/task";
import { useContrastColor } from "@/hooks/useContrastColor";
import { useSpacing } from "@/hooks/useSpacing";
import { useTask } from "@/modules/home/hooks/useTask";
import { selectExtraConfirmation } from "@/modules/setup/store/selector";
import { useAppSelector } from "@/store/hooks";
import BottomSheet, { BottomSheetView } from "@expo/ui/community/bottom-sheet";
import { useRef, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Card from "../ui/card";
import Typography from "../ui/typography";

interface TaskCardProps {
  task: ITask;
  onPress: () => void;
}

type PendingAction = "complete" | "delete" | null;

export default function TaskCard({ task, onPress }: TaskCardProps) {
  const { id, title, description, checked, steps } = task;
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [pendingAction, setPendingAction] = useState<PendingAction>(null);
  const { deleteTask, updateTask } = useTask();
  const spacing = useSpacing();
  const extraConfirmation = useAppSelector(selectExtraConfirmation);
  const sheetRef = useRef<BottomSheet>(null);
  const cancelBorderColor = useContrastColor("#EAEAEA", "#000000");

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
      deleteTask(id);
    }
  };

  const handleConfirm = () => {
    if (pendingAction === "complete") {
      completeTask();
    } else if (pendingAction === "delete") {
      deleteTask(id);
    }
    sheetRef.current?.snapToIndex(-1);
  };

  const handleCancel = () => {
    sheetRef.current?.snapToIndex(-1);
  };

  return (
    <>
      <Card style={{ gap: spacing(12) }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          onPress={onPress}
        >
          <View style={{ gap: spacing(4) }}>
            <Typography variant="subtitle">{title}</Typography>
            <Typography variant="bodySmall" numberOfLines={1}>
              {description}
            </Typography>
          </View>
        </TouchableOpacity>
      </Card>

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
    </>
  );
}
