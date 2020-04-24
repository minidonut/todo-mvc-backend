import Todo from "../src/models/Todo";

describe("Todo dymamodb model", () => {
  it("can add entity", async () => {
    await Todo.add();
  });
});
