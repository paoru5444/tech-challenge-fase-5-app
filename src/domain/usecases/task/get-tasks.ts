import { ITaskRepository } from "@/domain/repositories/task/task-repository";

export class GetTasks {
  constructor(private repository: ITaskRepository) {}

  async execute(userId: string) {
    return await this.repository.getTasks(userId);
  }
}
