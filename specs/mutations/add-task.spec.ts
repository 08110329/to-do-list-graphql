import { addTask } from "@/graphql/resolvers/mutations";

jest.mock("../../graphql/model", () => ({
  Task: {
    create: jest
      .fn()
      .mockReturnValueOnce({
        taskName: "zul",
        priority: 12,
        isDone: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .mockRejectedValueOnce({}),
  },
}));

describe("Add task mutation", () => {
  it("amjilttai bolson mutation", async () => {
    const taskName = "test task";
    const priority = 13;
    const result = await addTask({}, { input: { taskName, priority } });

    expect(result.taskName).toEqual("zul");
  });

  it("mutation aldaatai bolloo", async () => {
    const taskName = "test task";
    const priority = 13;

    try {
      await addTask({}, { input: { taskName, priority } });
    } catch (error) {
      expect(error).toEqual(new Error("failed to add task: <error message>"));
    }
  });
});
