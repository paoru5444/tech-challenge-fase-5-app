import { RootState } from "@/store";

export const selectTasks = (state: RootState) => state.task.tasks;

export const selectIsLoading = (state: RootState) =>
  state.task.status === "loading";
