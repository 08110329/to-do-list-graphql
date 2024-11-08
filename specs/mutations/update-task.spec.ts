import { updateTask } from "@/graphql/resolvers/mutations";

jest.mock("../../graphql/model", () => ({
  Task: {
    findByIdAndUpdate: jest
      .fn()
      .mockResolvedValueOnce({
        _id: "2",
        taskName: "update",
        priority: 12,
        isDone: true,
        updatedAt: new Date(),
      })
      .mockResolvedValueOnce(null)
      .mockRejectedValueOnce(new Error("database error")),
  },
}));
describe("Update task mutation", () => {
  it("update amjilttai", async () => {
    const result = await updateTask(
      {},
      {
        input: {
          taskId: "123",
          taskName: "update",
          priority: 12,
          isDone: true,
        },
      }
    );
    expect(result).toEqual({
        _id: "2",
        taskName: "update",
        priority: 12,
        isDone: true,
        updatedAt: expect.any(Date),
    });
  });
  it("task aldaatai bolloo", async () => {
    try {
      await updateTask({}, { input: { taskId: "2", taskName: "update", priority: 12, } });
    } catch (error) {
      if(error instanceof Error) {
        expect(error.message).toEqual(new Error("failed to add task:"));
      } else {
        fail("Expected error to be an instance of Error")
      }
    }
  });
  it("database error", async () => {
    try {
      await updateTask({}, { input: { taskId: "404", taskName: "update", priority: 12, } });
    } catch (error) {
      if(error instanceof Error) {
        expect(error.message).toEqual(new Error("failed to add task:"));
      } else {
        fail("Expected error to be an instance of Error")
      }
    }
  });
});

