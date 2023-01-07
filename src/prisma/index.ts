import { PrismaClient } from '@prisma/client';
import logger from '../helpers/logger';

const IS_DEV = process.env.NODE_ENV !== 'production';

const client = new PrismaClient({
  log: [{ emit: 'event', level: 'query' }],
});

if (IS_DEV) {
  client.$use(async (params, next) => {
    const before = Date.now();
    const result = await next(params);
    const after = Date.now();

    logger.info(`Query took ${after - before}ms`);
    return result;
  });

  client.$on('query', async (e) => {
    logger.info(`${e.query} ${e.params}`);
  });
}

export default client;
