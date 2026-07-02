import { FormTask } from "@/domain/entities/task";
import { selectUser } from "@/modules/auth/store/selectors";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import * as actions from "../store/actions";

export function useTask() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const getTasks = async () => {
    dispatch(actions.getTasks(user?.uid ?? ""));
  };

  const addTask = async (data: FormTask) => {
    dispatch(actions.addTask({ userId: user?.uid ?? "", formData: data }));
  };

  const deleteTask = async (taskId: string) => {
    dispatch(actions.deleteTask({ userId: user?.uid ?? "", taskId }));
  };

  const updateTask = async (formTask: FormTask, taskId: string) => {
    dispatch(
      actions.updateTask({
        userId: user?.uid ?? "",
        taskId,
        formData: formTask,
      }),
    );
  };

  return {
    getTasks,
    addTask,
    deleteTask,
    updateTask,
  };
}
