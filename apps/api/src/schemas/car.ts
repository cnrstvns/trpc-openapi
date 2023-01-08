import { z } from 'zod';

export const retrieveResponse = z.object({
  id: z.number().describe('The unique identifier of the car object'),
  make: z.string().describe('The make of the car'),
  model: z.string().describe('The model of the car'),
  year: z.number().describe('The year in which the car was manufactured'),
  created: z.date().describe('When the Car object was created'),
});

export const createBody = z.object({
  make: z.string().describe('The make of the car'),
  model: z.string().describe('The model of the car'),
  year: z.number().describe('The year the car was manufactured'),
});

export const listOptions = z.object({
  starting_after: z
    .number()
    .describe('List records only after this ID')
    .optional(),

  limit: z
    .number()
    .min(1)
    .max(100)
    .default(10)
    .describe('List this number of records. Must be between 1 and 100'),

  year: z
    .number()
    .describe('List cars that were manufactured in this year.')
    .optional(),
});

export const paginateResponse = z.object({
  data: z
    .array(retrieveResponse)
    .describe('The cars that were returned from this query'),

  has_more: z
    .boolean()
    .describe('Whether there are more cars that match this query'),
});
