import { throwErrorIfExists } from "../modules/errors";
import { asyncMiddleware } from "../modules/middlewares";
import { Todo } from "../models/Todo";
import { generateTimeBasedId } from "../modules/utils";


export const addTodo = asyncMiddleware(async (req, res) => {
  throwErrorIfExists(req);
  const { content } = req.body;
  const { userid: userId } = req.headers;
  const id = generateTimeBasedId();
  const todo = new Todo({ id, userId, content });
  await todo.save();
  res.send(todo);
});

export const getAllTodo = asyncMiddleware(async (req, res) => {
  throwErrorIfExists(req);
  const { userid: userId } = req.headers;
  const todos = await Todo.getAll(userId);
  res.send(todos);
});

export const updateTodo = asyncMiddleware(async (req, res) => {
  throwErrorIfExists(req);

});

export const deleteTodo = asyncMiddleware(async (req, res) => {
  throwErrorIfExists(req);

});
