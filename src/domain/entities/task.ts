export type FormTask = Omit<ITask, "id">;

export type Subtask = {
  title: string;
  dueDate?: string;
  checked: boolean;
};

export interface ITask {
  id: string;
  title: string;
  description?: string;
  steps: Subtask[];
}
