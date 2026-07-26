import Typography from "@/components/ui/typography";
import { useAnimationsEnabled } from "@/hooks/useAnimationsEnabled";
import { selectVisualFeedback } from "@/modules/setup/store/selector";
import { useAppSelector } from "@/store/hooks";
import Feather, { FeatherIconName } from "@react-native-vector-icons/feather";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { StyleSheet } from "react-native";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";

type FeedbackToastVariant = "success" | "danger";

type FeedbackToastState = {
  message: string;
  variant: FeedbackToastVariant;
};

interface FeedbackToastContextValue {
  notify: (message: string, variant?: FeedbackToastVariant) => void;
}

const FeedbackToastContext = createContext<FeedbackToastContextValue | null>(
  null,
);

const colorByVariant: Record<FeedbackToastVariant, string> = {
  success: "#39A304",
  danger: "#F05069",
};

const iconByVariant: Record<FeedbackToastVariant, FeatherIconName> = {
  success: "check-circle",
  danger: "trash-2",
};

const TOAST_DURATION = 2200;

export function FeedbackToastProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [toast, setToast] = useState<FeedbackToastState | null>(null);
  const visualFeedback = useAppSelector(selectVisualFeedback);
  const animationsEnabled = useAnimationsEnabled();
  const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const notify = useCallback(
    (message: string, variant: FeedbackToastVariant = "success") => {
      if (!visualFeedback) return;

      if (hideTimeout.current) clearTimeout(hideTimeout.current);

      setToast({ message, variant });
      hideTimeout.current = setTimeout(() => setToast(null), TOAST_DURATION);
    },
    [visualFeedback],
  );

  return (
    <FeedbackToastContext.Provider value={{ notify }}>
      {children}

      {toast && (
        <Animated.View
          entering={animationsEnabled ? FadeInDown.duration(200) : undefined}
          exiting={animationsEnabled ? FadeOutDown.duration(200) : undefined}
          style={[
            styles.container,
            { backgroundColor: colorByVariant[toast.variant] },
          ]}
        >
          <Feather name={iconByVariant[toast.variant]} color="#FFFFFF" size={18} />
          <Typography variant="body" style={styles.text}>
            {toast.message}
          </Typography>
        </Animated.View>
      )}
    </FeedbackToastContext.Provider>
  );
}

export function useFeedbackToast() {
  const context = useContext(FeedbackToastContext);

  if (!context) {
    throw new Error(
      "useFeedbackToast must be used within a FeedbackToastProvider",
    );
  }

  return context;
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 32,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  text: {
    color: "#FFFFFF",
    fontWeight: "600",
    flexShrink: 1,
  },
});
