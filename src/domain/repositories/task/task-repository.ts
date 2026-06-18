import { FormTask, ITask } from "@/domain/entities/task";

export interface ITaskRepository {
  getTasks(userId: string): Promise<ITask[] | undefined>;
  addTask(userId: string, formData: FormTask): Promise<ITask>;
  deleteTask(userId: string, taskId: string): Promise<void>;
  updateTask(
    userId: string,
    taskId: string,
    formData: FormTask,
  ): Promise<ITask>;
}
