import { z } from 'zod';
import { TRPCError } from '@trpc/server';
import t from '../../trpc';
import prisma from '../../prisma';
import {
  retrieveResponse,
  createBody,
  listOptions,
  paginateResponse,
} from '../../schemas/car';

export default t.router({
  create: t.procedure
    .input(createBody)
    .output(retrieveResponse)
    .meta({
      openapi: { method: 'POST', path: '/cars', summary: 'Create a car' },
    })
    .mutation(async (req) => {
      const car = await prisma.car.create({
        data: req.input,
      });

      return car;
    }),

  retrieve: t.procedure
    .input(z.object({ id: z.number() }))
    .output(retrieveResponse)
    .meta({
      openapi: {
        method: 'GET',
        path: '/cars/{id}',
        summary: 'Retrieve a car by ID',
      },
    })
    .query(async (req) => {
      const car = await prisma.car.findUnique({
        where: {
          id: req.input.id,
        },
      });

      if (!car) {
        throw new TRPCError({
          message: 'Car not found',
          code: 'NOT_FOUND',
        });
      }

      return car;
    }),

  list: t.procedure
    .input(listOptions)
    .output(paginateResponse)
    .meta({
      openapi: {
        method: 'GET',
        path: '/cars',
        summary: 'List cars',
      },
    })
    .query(async ({ input }) => {
      const where = {
        ...(input.year && { year: input.year }),
      };

      const cars = await prisma.car.findMany({
        take: input.limit,
        orderBy: {
          id: 'desc',
        },
        ...(input.starting_after && {
          cursor: {
            id: input.starting_after,
          },
        }),
        where,
      });

      const totalCount = await prisma.car.count({ where });

      return {
        data: cars,
        has_more: cars.length < totalCount,
      };
    }),
});
