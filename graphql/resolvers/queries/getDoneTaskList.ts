import { Task } from "@/graphql/model";

export const getDoneTaskList = async () => {
  try {
    const doneTaskList = await Task.find({ isDone: true });
    return doneTaskList;
  } catch (error) {
    throw new Error("ok");
  }
};
