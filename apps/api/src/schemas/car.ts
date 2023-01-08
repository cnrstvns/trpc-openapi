import { z } from 'zod';

export const retrieveResponse = z.object({
  id: z.number(),
  make: z.string(),
  model: z.string(),
  year: z.number(),
  created: z.date(),
});

export const createBody = z.object({
  make: z.string(),
  model: z.string(),
  year: z.number(),
});

export const listOptions = z.object({
  starting_after: z.number().optional(),
  limit: z.number().max(100).default(10),
  year: z.number().optional(),
});

export const paginateResponse = z.object({
  data: z.array(retrieveResponse),
  has_more: z.boolean(),
});
