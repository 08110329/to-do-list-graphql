import { getAllTasks } from "@/graphql/resolvers/queries";

jest.mock("../../graphql/model", () => ({
  Task: {
    find: jest
      .fn()
      .mockResolvedValueOnce([
        { taskName: "test", priority: 12, isDone: false },
      ])
      .mockRejectedValueOnce(new Error("database error")),
  },
}));

describe("get all tasks query", () => {
  it("return all task", async () => {
    const result = await getAllTasks();
    expect(result).toEqual([{ taskName: "test", priority: 12, isDone: false }]);
  });

  it("tasks fail", async () => {
    try {
      await getAllTasks();
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toEqual("Failed to fetch tasks:");
      } else {
        throw new Error("Expected an error of type Error");
      }
    }
  });
});
