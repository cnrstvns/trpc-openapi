import { generateOpenApiDocument } from 'trpc-openapi';
import restRouter from './routers/rest/_app';

export default generateOpenApiDocument(restRouter, {
  title: 'Testing OpenAPI with TRPC',
  version: '1.0.0',
  baseUrl: process.env.REST_API_BASE_URL || 'http://localhost:4000',
});
