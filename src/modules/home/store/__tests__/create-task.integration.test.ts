import { FormTask } from "@/domain/entities/task";
import { beforeEach, describe, expect, it, jest } from "@jest/globals";
import { configureStore } from "@reduxjs/toolkit";

jest.mock("@/services/firebase-task", () => {
  const addTask = jest.fn();

  return {
    __mockAddTask: addTask,
    FirebaseTask: jest.fn().mockImplementation(() => ({
      addTask,
      getTasks: jest.fn(),
      updateTask: jest.fn(),
      deleteTask: jest.fn(),
    })),
  };
});

// eslint-disable-next-line import/first -- must come after jest.mock above
import { addTask } from "@/modules/home/store/actions";
// eslint-disable-next-line import/first -- must come after jest.mock above
import { taskReducer } from "@/modules/home/store/slices";

const mockAddTask = (jest.requireMock("@/services/firebase-task") as any)
  .__mockAddTask as ReturnType<typeof jest.fn>;

function buildStore() {
  return configureStore({ reducer: { task: taskReducer } });
}

describe("fluxo de criação de task (integração)", () => {
  const userId = "user-123";
  const formData: FormTask = {
    title: "Tomar remédio",
    description: "Tomar remédio da pressão às 8h",
    checked: false,
  };

  beforeEach(() => {
    mockAddTask.mockReset();
  });

  it("should be able to create a new task", async () => {
    mockAddTask.mockImplementation(async (uid: string, task: FormTask) => ({
      ...task,
      checked: false,
      id: "generated-id",
    }));

    const store = buildStore();

    await store.dispatch(addTask({ userId, formData }) as any);

    expect(mockAddTask).toHaveBeenCalledWith(userId, formData);

    const state = store.getState().task;
    expect(state.status).toBe("succeeded");
    expect(state.tasks).toHaveLength(1);
    expect(state.tasks[0]).toEqual({
      id: "generated-id",
      title: formData.title,
      description: formData.description,
      checked: false,
    });
  });

  it("should emmit an error when task creation fails", async () => {
    mockAddTask.mockRejectedValue(new Error("Falha ao conectar ao Firebase"));

    const store = buildStore();

    await store.dispatch(addTask({ userId, formData }) as any);

    const state = store.getState().task;
    expect(state.status).toBe("failed");
    expect(state.tasks).toHaveLength(0);
  });
});
