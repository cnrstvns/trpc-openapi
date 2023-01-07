import { z } from 'zod';
import t from '../../trpc';

export default t.router({
  getUser: t.procedure
    .input(z.string())
    .query((req) => ({ id: req.input, name: 'Bilbo' })),
  createUser: t.procedure
    .input(z.object({ name: z.string().min(5) }))
    .mutation(async () => ({
      id: 1,
    })),
});
