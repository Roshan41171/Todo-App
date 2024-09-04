import { z } from "zod";

export const createTodoSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  completed: z.boolean().optional(),
});

export const updateTodoSchema = z.object({
  title: z.string().min(1).optional(),
  description: z.string().min(1).optional(),
  completed: z.boolean().optional(),
});

// export const paramsSchema = z.object({
//   id: z.string().regex(/^\d+$/, "ID must be a digit"),
// });
