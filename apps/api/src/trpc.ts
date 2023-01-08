import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import { OpenApiMeta } from 'trpc-openapi';

export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({
  req,
  res,
});

type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.meta<OpenApiMeta>().context<Context>().create();

export default t;
export const publicProcedure = t.procedure;
