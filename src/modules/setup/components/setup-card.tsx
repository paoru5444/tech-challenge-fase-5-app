import TitleDisplay from "@/components/shared/title-display";
import Card from "@/components/ui/card";
import { preferencesNames } from "@/constants/conts";
import { Text, TouchableOpacity, View } from "react-native";
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
  return (
    <Card style={{ gap: 16 }}>
      <TitleDisplay
        letter={letter}
        title={title}
        description={description}
        containerStyle={{ borderRadius: 10 }}
      />

      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
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
                padding: 6,
                borderRadius: 10,
                borderWidth: isCurrentItem ? 3 : 1,
                borderColor: isCurrentItem ? "#39A304" : "#EAEAEA",
              }}
            >
              <Text style={{ fontSize: 12 }}>{preferencesNames[item]}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </Card>
  );
}
