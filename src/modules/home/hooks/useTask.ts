import { FormTask } from "@/domain/entities/task";
import { selectUser } from "@/modules/auth/store/selectors";
import { taskSchema } from "@/schemas/task-schema";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import BottomSheet from "@expo/ui/community/bottom-sheet";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as actions from "../store/actions";
import { selectTasks } from "../store/selectors";

export function useTask() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const tasks = useAppSelector(selectTasks);

  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  const sheetRef = useRef<BottomSheet>(null);

  const getTasks = async () => {
    dispatch(actions.getTasks(user?.uid ?? ""));
  };

  const addTask = async (data: FormTask) => {
    const task = await dispatch(
      actions.addTask({ userId: user?.uid ?? "", formData: data }),
    ).unwrap();

    sheetRef.current?.close();

    return task;
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

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const pendingTasks = useMemo(
    () => tasks.filter((task) => !task.checked) || [],
    [tasks],
  );

  const completedTasks = useMemo(
    () => tasks.filter((task) => task.checked) || [],
    [tasks],
  );

  const lastTasks = useMemo(() => tasks.slice(0, 3) || [], [tasks]);

  const filteredTasks = useMemo(() => {
    if (!search.trim()) return tasks;

    const normalizedSearch = search.trim().toLowerCase();

    return tasks.filter((task) =>
      task.title.toLowerCase().includes(normalizedSearch),
    );
  }, [tasks, search]);

  return {
    getTasks,
    addTask,
    deleteTask,
    updateTask,
    control,
    errors,
    handleSubmit,
    tasks,
    sheetRef,
    pendingTasks,
    completedTasks,
    lastTasks,
    query,
    setQuery,
    filteredTasks,
  };
}
