import * as trpcExpress from '@trpc/server/adapters/express';
import express from 'express';
import cors from 'cors';
import { createOpenApiExpressMiddleware } from 'trpc-openapi';
import swaggerUi from 'swagger-ui-express';
import morgan from 'morgan';
import throng from 'throng';
import appRouter from './routers/trpc/_app';
import restRouter from './routers/rest/_app';
import { createContext } from './trpc';
import openApiSpec from './openapi';
import logger from './helpers/logger';
import dotenv from 'dotenv';

const IS_DEV = process.env.NODE_ENV !== 'production';
const PORT = parseInt(process.env.PORT!, 10) || 4000;

dotenv.config();

function start() {
  // Initialize express app
  const app = express();

  // CORS middleware
  app.use(cors());

  // Logging middleware for REST and TRPC API's
  if (IS_DEV) {
    app.use('/v1', morgan('dev'));
    app.use('/trpc', (req, _res, next) => {
      logger.info('⬅️ ', req.method, req.path, req.body ?? req.query);

      next();
    });
  }

  // TRPC middleware to handle all requests to the `trpc` endpoint
  app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    }),
  );

  // OpenAPI REST routes
  app.use(
    '/v1',
    createOpenApiExpressMiddleware({
      router: restRouter,
      createContext,
    }),
  );

  // Documentation routes
  // Serve Swagger UI with our OpenAPI schema
  app.use('/', swaggerUi.serve);
  app.get('/', swaggerUi.setup(openApiSpec));

  app.listen(PORT, () => logger.info('Listening at http://localhost:4000'));
}

// Start worker threads
throng({
  start,
  workers: process.env.CONCURRENCY || 1,
});
