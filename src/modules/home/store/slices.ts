import { ITask } from "@/domain/entities/task";
import { ReducerStatus } from "@/store/types";
import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import { addTask, deleteTask, getTasks, updateTask } from "./actions";

interface TasksState {
  tasks: ITask[];
  status: ReducerStatus;
  error: string | null;
}

const initialState: TasksState = {
  tasks: [],
  status: "idle",
  error: null,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.fulfilled, (state, action) => {
        state.tasks = action.payload ?? [];
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const idx = state.tasks.findIndex((t) => t.id === action.payload.id);
        if (idx !== -1) state.tasks[idx] = action.payload;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((t) => t.id !== action.payload);
      })
      // ── Pending: QUALQUER thunk deste slice → loading ──
      .addMatcher(
        isPending(getTasks, addTask, updateTask, deleteTask),
        (state) => {
          state.status = "loading";
          state.error = null;
        },
      )
      // ── Rejected: QUALQUER thunk deste slice → error ──
      .addMatcher(
        isRejected(getTasks, addTask, updateTask, deleteTask),
        (state, action) => {
          state.status = "failed";
          state.error = (action.payload as string) ?? "Erro inesperado.";
        },
      )
      // ── Fulfilled genérico: status succeeded pra todos ──
      .addMatcher(
        isFulfilled(getTasks, addTask, updateTask, deleteTask),
        (state) => {
          state.status = "succeeded";
        },
      );
  },
});

export const taskReducer = tasksSlice.reducer;
