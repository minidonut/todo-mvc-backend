import { Todo } from "../src/models/Todo";
/* global describe it */

describe("Todo dymamodb model", () => {
  it.skip("can add entity", async () => {
    const todo = new Todo({ userId: "1", id: "4", content: "wow" });
    const res = await todo.save();
    console.log(res);
  });

  it("get todos by userId", async () => {
    const todos = await Todo.getAll(1);
    console.log(todos);
  });
});
