import { Router } from "express";
import * as TodoController from "../controllers/todo.controller";
// import validate from "../middleware/todoValidator.middleware";
// import {
//   createTodoSchema,
//   updateTodoSchema,
//   //   paramsSchema,
// } from "../validation/todo.validation";

const router = Router();

router.post("/", TodoController.createTodo);
router.get("/", TodoController.getTodos);
router.put("/:id", TodoController.updateTodo);
router.delete("/:id", TodoController.deleteTodo);

export default router;
