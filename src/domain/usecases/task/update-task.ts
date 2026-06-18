import { FormTask } from "@/domain/entities/task";
import { ITaskRepository } from "@/domain/repositories/task/task-repository";

export class UpdateTask {
  constructor(private repository: ITaskRepository) {}

  async execute(userId: string, taskId: string, formData: FormTask) {
    return await this.repository.updateTask(userId, taskId, formData);
  }
}
