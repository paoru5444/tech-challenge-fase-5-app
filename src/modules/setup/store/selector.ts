import { RootState } from "@/store";

export const selecPreferences = (state: RootState) => {
  return state.setup.setup;
};

export const selectFontSize = (state: RootState) => {
  return state.setup.setup.fontSize;
};

export const selectContrastLevel = (state: RootState) => {
  return state.setup.setup.contrastLevel;
};

export const selectSpacementSize = (state: RootState) => {
  return state.setup.setup.spacementSize;
};

export const selectInterfaceMode = (state: RootState) => {
  return state.setup.setup.interfaceMode;
};

export const selectFeedback = (state: RootState) => {
  return state.setup.setup.feedback;
};
