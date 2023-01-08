import { z } from 'zod';
import prisma from '../prisma';
import { createBody } from '../schemas/car';

type Car = z.infer<typeof createBody>;

export const createCar = function createCar(car: Car) {
  return prisma.$transaction(async (prisma) => {
    const carCount = await prisma.car.count();

    if (carCount >= 250) {
      throw new Error('Maximum number of rows reached.');
    }

    return prisma.car.create({
      data: car,
    });
  });
};
