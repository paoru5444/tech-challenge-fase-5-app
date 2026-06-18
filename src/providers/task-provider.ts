import { FirebaseTask } from "@/services/firebase-task";

import { TaskRepositoryImpl } from "@/domain/repositories/task/task-repository-impl";
import { AddTask } from "@/domain/usecases/task/add-task";
import { DeleteTask } from "@/domain/usecases/task/delete-task";
import { GetTasks } from "@/domain/usecases/task/get-tasks";
import { UpdateTask } from "@/domain/usecases/task/update-task";

const remote = new FirebaseTask();
const repository = new TaskRepositoryImpl(remote);

export const taskProvider = {
  getTasks: new GetTasks(repository),
  addTask: new AddTask(repository),
  updateTask: new UpdateTask(repository),
  deleteTask: new DeleteTask(repository),
};
