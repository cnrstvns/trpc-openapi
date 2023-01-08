import t from '../../trpc';
import prisma from '../../prisma';
import { z } from 'zod';
import { createBody } from '../../schemas/car';
import { createCar } from '../../services/car';

export default t.router({
  getCount: t.procedure.query(async () => {
    const count = await prisma.car.count({ where: {} });

    return count;
  }),

  create: t.procedure.input(createBody).mutation(async ({ input }) => {
    const car = await createCar(input);

    return car.id;
  }),

  retrieve: t.procedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const car = await prisma.car.findUnique({
        where: {
          id: input.id,
        },
      });

      return car;
    }),

  list: t.procedure.query(async () => {
    const cars = await prisma.car.findMany({
      orderBy: {
        id: 'desc',
      },
    });

    return cars;
  }),
});
