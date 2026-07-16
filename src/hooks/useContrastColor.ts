import { selectContrastLevel } from "@/modules/setup/store/selector";
import { useAppSelector } from "@/store/hooks";

export function useContrastColor(normal: string, high: string) {
  const contrastLevel = useAppSelector(selectContrastLevel);
  return contrastLevel === "high" ? high : normal;
}
