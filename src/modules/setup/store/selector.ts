import { RootState } from "@/store";

export const getFontSize = (state: RootState) => {
  return state.setup.setup.fontSize;
};

export const getContrastLevel = (state: RootState) => {
  return state.setup.setup.contrastLevel;
};

export const getSpacementSize = (state: RootState) => {
  return state.setup.setup.spacementSize;
};

export const getInterfaceMode = (state: RootState) => {
  return state.setup.setup.interfaceMode;
};

export const getFeedback = (state: RootState) => {
  return state.setup.setup.feedback;
};
