import { gql } from "graphql-tag";

export const typeDefs = gql`
  scalar Date

  type Task {
    _id: ID!
    taskName: String!
    priority: Int!
    isDone: Boolean
    createdAt: Date!
    updatedAt: Date!
  }

  type Query {
    helloQuery: String
    getAllTasks: [Task!]!
    getDoneTaskList: [Task!]!
  }

  input AddTaskInput {
    taskName: String
    priority: Int!
    isDone: Boolean
  }

  input UpdateTaskInput {
    taskId: ID!
    taskName: String
    priority: Int!
    isDone: Boolean
  }

  type Mutation {
    sayHello(name: String!): String
    addTask(input: AddTaskInput!): Task
    updateTask(input: UpdateTaskInput!): Task
  }
`;
