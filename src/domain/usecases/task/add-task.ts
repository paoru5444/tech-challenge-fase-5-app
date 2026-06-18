import { FormTask } from "@/domain/entities/task";
import { ITaskRepository } from "@/domain/repositories/task/task-repository";

export class AddTask {
  constructor(private repository: ITaskRepository) {}

  async execute(userId: string, formData: FormTask) {
    return await this.repository.addTask(userId, formData);
  }
}
