import { Request, Response } from "express";
// import * as TodoService from "./todo.service";
import * as TodoService from "../services/todo.service";

export async function createTodo(req: Request, res: Response) {
  const { title, description } = req.body;
  try {
    const todo = await TodoService.createTodo({ title, description });
    res.status(201).json(todo);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}

export async function getTodos(req: Request, res: Response) {
  try {
    const todos = await TodoService.getAllTodos();
    res.status(200).json(todos);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export async function updateTodo(req: Request, res: Response) {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  try {
    const updatedTodo = await TodoService.updateTodo(id, {
      title,
      description,
      completed,
    });
    res.status(200).json(updatedTodo);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}

export async function deleteTodo(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await TodoService.deleteTodo(id);
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
