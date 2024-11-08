import { AddTaskInput } from "@/generated";
import { Task } from "@/graphql/model";

export const addTask= async (
  _: unknown,
  { input }: { input: AddTaskInput}
) => {
  try {
    const newTask = await Task.create({
      taskName: input.taskName,
      priority: input.priority,
      isDone: input.isDone,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return newTask;
  } catch (error) {
    throw new Error("Failed to add task: : <error message>");
  }
};

