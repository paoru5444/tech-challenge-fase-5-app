import TitleDisplay from "@/components/shared/title-display";
import Card from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import { useContrastColor } from "@/hooks/useContrastColor";
import { useSpacing } from "@/hooks/useSpacing";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useCallback } from "react";
import { TouchableOpacity, View } from "react-native";
import * as actions from "../store/actions";
import { selectFontSize } from "../store/selector";
import { SetupType } from "../store/slices";

export default function FontSizeSetupCard() {
  const dispatch = useAppDispatch();

  const currentFontSize = useAppSelector(selectFontSize);
  const borderColor = useContrastColor("#EAEAEA", "#000000");
  const spacing = useSpacing();
  const fontSizes: SetupType["fontSize"][] = ["small", "default", "big"];

  const onSelectFontSize = useCallback((fontSize: SetupType["fontSize"]) => {
    dispatch(actions.updateFontSize(fontSize));
  }, []);

  return (
    <Card style={{ gap: spacing(16) }}>
      <TitleDisplay
        letter="T"
        title="Tamanho da letra"
        description="Escolha o tamanho que é mais fácil para ler"
        containerStyle={{ borderRadius: 10 }}
      />

      <View
        style={{ flexDirection: "row", flexWrap: "wrap", gap: spacing(8) }}
      >
        {fontSizes.map((size) => {
          const isCurrentFontSize = currentFontSize === size;

          return (
            <TouchableOpacity
              key={size}
              onPress={() => onSelectFontSize(size)}
              style={{
                width: "48%",
                height: 40,
                backgroundColor: "#EAEAEA",
                justifyContent: "flex-end",
                padding: spacing(6),
                borderRadius: 10,
                borderWidth: isCurrentFontSize ? 2 : 1,
                borderColor: isCurrentFontSize ? "#39A304" : borderColor,
              }}
            >
              <Typography variant="label">{size}</Typography>
            </TouchableOpacity>
          );
        })}
      </View>
    </Card>
  );
}
