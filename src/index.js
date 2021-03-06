import cors from "cors";
import lusca from "lusca";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { body, header, param } from "express-validator";
import { errorHandler } from "./modules/errors";
import * as TodoController from "./controllers/TodoController";

const app = express();

app.set("port", process.env.PORT || 3101);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));
app.get("/", (req, res) => { res.sendStatus(200); }); // health check

app.get(
  "/todos",
  [header("userId").not().isEmpty().withMessage("Required header missing: userId")],
  TodoController.getAllTodo,
);

app.post(
  "/todos",
  [body("content").not().isEmpty().withMessage("Required value missing: content"),
  header("userId").not().isEmpty().withMessage("Required header missing: userId")],
  TodoController.addTodo,
);

app.put(
  "/todos/:id",
  [param("id").not().isEmpty().withMessage("Required parameter missing: id"),
  header("userId").not().isEmpty().withMessage("Required header missing: userId")],
  TodoController.updateTodo,
);

app.delete(
  "/todos/:id",
  [param("id").not().isEmpty().withMessage("Required parameter missing: id"),
  header("userId").not().isEmpty().withMessage("Required header missing: userId")],
  TodoController.deleteTodo,
);

app.use(errorHandler);

app.listen(app.get("port"), () => {
  console.log(`
  App is running at http://localhost:${app.get("port")} in ${app.get("env")} mode
  Press CTRL-C to stop
`);
});
