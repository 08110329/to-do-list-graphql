import { QueryResolvers } from "@/generated";
import { Task } from "@/graphql/model";

export const getAllTasks = async () => {
  try {
    const task = await Task.find({ isDone: false });
    return task;
  } catch (error) {
    throw new Error("Failed to fetch tasks:");
  }
};
