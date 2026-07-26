import { selectInterfaceMode } from "@/modules/setup/store/selector";
import { useAppSelector } from "@/store/hooks";

export function useAnimationsEnabled() {
  const interfaceMode = useAppSelector(selectInterfaceMode);
  return interfaceMode !== "simple";
}
