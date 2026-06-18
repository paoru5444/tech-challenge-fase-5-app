import { ITaskRepository } from "@/domain/repositories/task/task-repository";

export class DeleteTask {
  constructor(private repository: ITaskRepository) {}

  async execute(userId: string, taskId: string) {
    return await this.repository.deleteTask(userId, taskId);
  }
}
