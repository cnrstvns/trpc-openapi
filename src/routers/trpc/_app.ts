import t from '../../trpc';
import userRouter from './car';

const appRouter = t.router({
  user: userRouter,
});

export default appRouter;

export type AppRouter = typeof appRouter;
