import { getDoneTaskList } from "@/graphql/resolvers/queries";

jest.mock("../../graphql/model", () => ({
  Task: {
    find: jest
      .fn()
      .mockResolvedValueOnce([{ taskName: "zul", priority: 12, isDone: true }])
      .mockRejectedValueOnce(new Error("database error")),
  },
}));
describe("Tasks list query", () => {
  it("Should return all done tasks", async () => {
    const result = await getDoneTaskList();
    expect(result).toEqual([{ taskName: "zul", priority: 12, isDone: true }]);
  });
  it("Should throw an error when fetching done tasks fails", async () => {
    try {
      await getDoneTaskList();
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toEqual("Failed to fetch tasks:");
      } else {
        throw new Error("Unexpected error type");
      }
    }
  });
});
