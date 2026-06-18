import { FormTask } from "@/domain/entities/task";
import { taskProvider } from "@/providers/task-provider";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTasks = createAsyncThunk(
  "tasks/getTasks",
  async (userId: string) => {
    return await taskProvider.getTasks.execute(userId);
  },
);

export const addTask = createAsyncThunk(
  "tasks/addTasks",
  async ({ userId, formData }: { userId: string; formData: FormTask }) => {
    return await taskProvider.addTask.execute(userId, formData);
  },
);

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async ({
    userId,
    taskId,
    formData,
  }: {
    userId: string;
    taskId: string;
    formData: FormTask;
  }) => {
    return await taskProvider.updateTask.execute(userId, taskId, formData);
  },
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async ({ userId, taskId }: { userId: string; taskId: string }) => {
    await taskProvider.deleteTask.execute(userId, taskId);
    return taskId;
  },
);
