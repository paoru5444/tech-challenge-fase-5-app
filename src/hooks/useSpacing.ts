import { selectSpacementSize } from "@/modules/setup/store/selector";
import { SetupType } from "@/modules/setup/store/slices";
import { useAppSelector } from "@/store/hooks";

const scaleMap: Record<SetupType["spacementSize"], number> = {
  small: 0.8,
  default: 1,
  big: 1.3,
};

export function useSpacing() {
  const spacementSize = useAppSelector(selectSpacementSize);
  const scale = scaleMap[spacementSize];
  return (value: number) => Math.round(value * scale);
}
