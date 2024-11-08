import { Task } from "@/graphql/model";
import { getAllTasks } from "@/graphql/resolvers/queries";

jest.mock("../../graphql/model", () => ({
Task: {
    find:jest.fn().mockResolvedValueOnce([
        {taskName: "test", priority: 12, isDone:false }
    ]).mockRejectedValueOnce(new Error("database error"))
}
}));

describe("", () => {
it("", async () => {
const result = await getAllTasks();
expect(result).toEqual([
    {taskName: "test", priority: 12, isDone:false }
])
});

it("", async () => {
    try {
        
    } catch (error) {
        
    }
})
})