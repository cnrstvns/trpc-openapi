import t from '../../trpc';
import carRouter from './car';

const appRouter = t.router({
  car: carRouter,
});

export default appRouter;

export type AppRouter = typeof appRouter;
