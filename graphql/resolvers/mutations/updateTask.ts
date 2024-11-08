import { MutationResolvers, UpdateTaskInput } from "@/generated";
import { Task } from "@/graphql/model";

export const updateTask = async (
  _: unknown,
  { input } : {input: UpdateTaskInput}
) => {
  try {
    const updateTask = await Task.findByIdAndUpdate(
      { _id: input.taskId },
      {
        taskName: input.taskName,
        priority: input.priority,
        isDone: input.isDone,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      { new: true }
    );
    if (!updateTask) {
      throw new Error("task not found");
    }
    return updateTask;
  } catch (error) {
    throw new Error("Failed updateTask");
  }
};
