import { FirebaseTask } from "@/services/firebase-task";
import { FormTask, ITask } from "../../entities/task";
import { ITaskRepository } from "./task-repository";

export class TaskRepositoryImpl implements ITaskRepository {
  constructor(private remote: FirebaseTask) {}
  getTasks(userId: string): Promise<ITask[] | undefined> {
    return this.remote.getTasks(userId);
  }

  addTask(userId: string, task: ITask) {
    return this.remote.addTask(userId, task);
  }

  updateTask(userId: string, taskId: string, formData: FormTask) {
    return this.remote.updateTask(userId, taskId, formData);
  }

  deleteTask(userId: string, taskId: string) {
    return this.remote.deleteTask(userId, taskId);
  }
}
