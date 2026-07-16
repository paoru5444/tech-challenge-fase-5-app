import TitleDisplay from "@/components/shared/title-display";
import Card from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import { preferencesNames } from "@/constants/conts";
import { useContrastColor } from "@/hooks/useContrastColor";
import { useSpacing } from "@/hooks/useSpacing";
import { TouchableOpacity, View } from "react-native";
import { SetupType } from "../store/slices";

export type SetupListKey = Exclude<keyof SetupType, "feedback">;

interface SetupCardProps<k extends SetupListKey> {
  list: SetupType[k][];
  onSelectItem: (value: SetupType[k]) => void;
  title: string;
  description: string;
  letter: string;
  currentItem: SetupType[k];
}

export default function SetupCard<k extends SetupListKey>({
  list,
  onSelectItem,
  title,
  description,
  letter,
  currentItem,
}: SetupCardProps<k>) {
  const borderColor = useContrastColor("#EAEAEA", "#000000");
  const spacing = useSpacing();

  return (
    <Card style={{ gap: spacing(16) }}>
      <TitleDisplay
        letter={letter}
        title={title}
        description={description}
        containerStyle={{ borderRadius: 10 }}
      />

      <View
        style={{ flexDirection: "row", flexWrap: "wrap", gap: spacing(8) }}
      >
        {list.map((item) => {
          const isCurrentItem = currentItem === item;

          return (
            <TouchableOpacity
              key={item}
              onPress={() => onSelectItem(item)}
              style={{
                width: "48%",
                height: 40,
                backgroundColor: "#EAEAEA",
                justifyContent: "flex-end",
                padding: spacing(6),
                borderRadius: 10,
                borderWidth: isCurrentItem ? 3 : 1,
                borderColor: isCurrentItem ? "#39A304" : borderColor,
              }}
            >
              <Typography variant="bodySmall">
                {preferencesNames[item]}
              </Typography>
            </TouchableOpacity>
          );
        })}
      </View>
    </Card>
  );
}
