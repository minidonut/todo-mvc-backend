import { throwErrorIfExists } from "../modules/errors";

export const addTodo = (req, res) => {
  throwErrorIfExists(req);

};
