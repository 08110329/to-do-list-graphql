import { MutationResolvers } from "@/generated";
import { Task } from "@/graphql/model";

export const addTask: MutationResolvers["addTask"] = async (
  _: unknown,
  { input }
) => {
  try {
    const newTask = await Task.create({
      taskName: input.taskName,
      priority: input.priority,
      isDone: input.isDone,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    console.log(newTask);

    return newTask;
  } catch (error) {
    throw new Error("Failed to add task: : <error message>");
  }
};
