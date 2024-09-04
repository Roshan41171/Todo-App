import { z } from 'zod';

export const createTodoSchema = z.object({
    title: z.string().min(1, { message: 'Please enter a title.' }),
    description: z.string().min(1, { message: 'Please enter a description.' }),
    completed: z.boolean().optional(),
});

export const updateTodoSchema = z.object({
    title: z.string().min(1, { message: 'Please enter a title.' }).optional(),
    description: z
        .string()
        .min(1, { message: 'Please enter a description.' })
        .optional(),
    completed: z.boolean().optional(),
});

export const paramsSchema = z.object({
    id: z.string().regex(/^\d+$/, 'ID must be a digit'),
});
