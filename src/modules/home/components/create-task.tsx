import Button from "@/components/ui/button";
import { InputControl } from "@/components/ui/input-control";
import Typography from "@/components/ui/typography";
import { useSpacing } from "@/hooks/useSpacing";
import BottomSheet, { BottomSheetView } from "@expo/ui/community/bottom-sheet";
import Feather from "@react-native-vector-icons/feather";
import { TouchableOpacity, View } from "react-native";
import { useTask } from "../hooks/useTask";

export default function CreateTask() {
  const { control, errors, handleSubmit, addTask, sheetRef } = useTask();

  const spacing = useSpacing();

  return (
    <>
      <TouchableOpacity
        onPress={() => sheetRef.current?.snapToIndex(0)}
        style={{
          width: 60,
          height: 60,
          backgroundColor: "#F67653",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 30,
          position: "absolute",
          bottom: 20,
          right: 20,
        }}
      >
        <Feather name="plus" color={"#FFFFFF"} size={34} />
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
