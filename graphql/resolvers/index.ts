import { addTask, updateTask } from "./mutations";
import { sayHello } from "./mutations/say-hello";
import { getAllTasks, getDoneTaskList } from "./queries";
import { helloQuery } from "./queries/hello-query";

export const resolvers = {
  Query: {
    helloQuery,
    getAllTasks,
    getDoneTaskList,
  },
  Mutation: {
    sayHello,
    addTask,
    updateTask,
  },
};
