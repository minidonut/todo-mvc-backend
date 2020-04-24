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
  const { userid: userId } = req.headers;
  const { id } = req.params;
  const { done, content } = req.body;

  const attributes = {};
  if (done !== undefined) attributes["done"] = done;
  if (content !== undefined) attributes["content"] = content;

  const todo = await Todo.update({ userId, id }, { $PUT: attributes });
  res.send(todo);
});

export const deleteTodo = asyncMiddleware(async (req, res) => {
  throwErrorIfExists(req);

});
