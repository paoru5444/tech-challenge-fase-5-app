import { theme } from "@/constants/theme";
import { useContrastColor } from "@/hooks/useContrastColor";
import { useSpacing } from "@/hooks/useSpacing";
import Lucide from "@react-native-vector-icons/lucide";
import { Image } from "expo-image";
import { ComponentProps, useState } from "react";
import { StyleSheet, View } from "react-native";
import Button from "../ui/button";
import Typography from "../ui/typography";

type WalkthroughImage = ComponentProps<typeof Image>["source"];
type WalkthroughIcon = ComponentProps<typeof Lucide>["name"];

export interface WalkthroughStep {
  /** Ilustração do step. Use `icon` quando não houver uma imagem dedicada. */
  image?: WalkthroughImage;
  icon?: WalkthroughIcon;
  title: string;
  description: string;
}

interface WalkthroughProps {
  steps: WalkthroughStep[];
  onFinish: () => void;
  nextLabel?: string;
  finishLabel?: string;
}

export default function Walkthrough({
  steps,
  onFinish,
  nextLabel = "Próximo",
  finishLabel = "Concluir",
}: WalkthroughProps) {
  const [stepIndex, setStepIndex] = useState(0);
  const spacing = useSpacing();
  const dotColor = useContrastColor(theme.colors.border.default, "#000000");

  const step = steps[stepIndex];
  const isLastStep = stepIndex === steps.length - 1;

  function handlePress() {
    if (isLastStep) {
      onFinish();
      return;
    }

    setStepIndex((index) => index + 1);
  }

  return (
    <View
      style={{
        flex: 1,
        gap: spacing(32),
        justifyContent: "space-between",
        paddingBottom: 16,
      }}
    >
      {step.image && (
        <Image source={step.image} style={styles.image} contentFit="contain" />
      )}

      {!step.image && step.icon && (
        <View style={styles.iconContainer}>
          <Lucide
            name={step.icon}
            size={64}
            color={theme.colors.brand.primary}
          />
        </View>
      )}

      <View style={{ gap: spacing(24) }}>
        <View style={{ gap: spacing(12), paddingHorizontal: spacing(24) }}>
          <Typography variant="h2" style={styles.centered}>
            {step.title}
          </Typography>

          <Typography variant="body" style={styles.centered}>
            {step.description}
          </Typography>
        </View>

        <View style={styles.dotsRow}>
          {steps.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                {
                  width: index === stepIndex ? 20 : 8,
                  backgroundColor:
                    index === stepIndex ? theme.colors.brand.primary : dotColor,
                },
              ]}
            />
          ))}
        </View>
      </View>

      <View style={{ paddingHorizontal: spacing(24) }}>
        <Button
          text={isLastStep ? finishLabel : nextLabel}
          onPress={handlePress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 280,
  },
  iconContainer: {
    width: "100%",
    height: 480,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.brand.primarySubtle,
  },
  centered: {
    textAlign: "center",
  },
  dotsRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  dot: {
    height: 8,
    borderRadius: 4,
  },
});
