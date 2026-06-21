import { createSlice } from "@reduxjs/toolkit";
import {
  updateContrastLevel,
  updateFeedback,
  updateFontSize,
  updateInterfaceMode,
  updateSpacementSize,
} from "./actions";

export type FeedbackType = {
  visualFeedback: boolean;
  extraConfirmation: boolean;
  soundConfirmation: boolean;
};

export type SetupType = {
  fontSize: "small" | "default" | "big";
  contrastLevel: "default" | "high";
  spacementSize: "small" | "default" | "big";
  interfaceMode: "simple" | "default";
  feedback: FeedbackType;
};

export interface SetupState {
  setup: SetupType;
}

const initialState: SetupState = {
  setup: {
    fontSize: "default",
    contrastLevel: "default",
    spacementSize: "default",
    interfaceMode: "default",
    feedback: {
      visualFeedback: true,
      extraConfirmation: true,
      soundConfirmation: true,
    },
  },
};

export const setupSlice = createSlice({
  name: "setup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateFontSize, (state, action) => {
        state.setup.fontSize = action.payload;
      })
      .addCase(updateContrastLevel, (state, action) => {
        state.setup.contrastLevel = action.payload;
      })
      .addCase(updateSpacementSize, (state, action) => {
        state.setup.spacementSize = action.payload;
      })
      .addCase(updateInterfaceMode, (state, action) => {
        state.setup.interfaceMode = action.payload;
      })
      .addCase(updateFeedback, (state, action) => {
        state.setup.feedback = { ...state.setup.feedback, ...action.payload };
      });
  },
});

export const setupReducer = setupSlice.reducer;
