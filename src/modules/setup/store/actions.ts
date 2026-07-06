import { createAction } from "@reduxjs/toolkit";
import { SetupType } from "./slices";

export const updateFontSize = createAction<SetupType["fontSize"]>(
  "setup/changeFontSize",
);
export const updateContrastLevel = createAction<SetupType["contrastLevel"]>(
  "setup/updateContrastLevel",
);
export const updateSpacementSize = createAction<SetupType["spacementSize"]>(
  "setup/updateSpacementSize",
);
export const updateInterfaceMode = createAction<SetupType["interfaceMode"]>(
  "setup/updateInterfaceMode",
);
export const updateFeedback = createAction<Partial<SetupType["feedback"]>>(
  "setup/feedback",
);
