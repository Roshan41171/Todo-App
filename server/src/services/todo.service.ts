import { PrismaClient, Todo } from "@prisma/client";

const prisma = new PrismaClient();

export async function createTodo(todo: {
  title: string;
  description: string;
}): Promise<Todo> {
  return prisma.todo.create({
    data: todo,
  });
}

export async function getAllTodos(): Promise<Todo[]> {
  return prisma.todo.findMany({});
}

export async function updateTodo(
  id: string,
  todo: { title?: string; description?: string; completed?: boolean }
): Promise<Todo> {
  return prisma.todo.update({
    where: { id: parseInt(id) },
    data: todo,
  });
}

export async function deleteTodo(id: string): Promise<Todo> {
  return prisma.todo.delete({
    where: { id: parseInt(id) },
  });
}
