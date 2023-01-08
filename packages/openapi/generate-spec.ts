import fs from 'fs';
import openApiSpec from 'api/src/openapi';

const errorSpec = {
  properties: {
    message: {
      type: 'string',
      description: 'An error message representing what went wrong.',
    },
    code: {
      type: 'string',
      description:
        'A standard HTTP Response code representing the error the server returned.',
    },
    issues: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            description: 'The error that occurred when setting this property.',
          },
        },
        required: ['message'],
        additionalProperties: false,
      },
    },
  },
};

(async () => {
  const baseSpec = openApiSpec;

  // @ts-ignore sorry OpenAPI — TRPC Plugin doesn't support this at the moment
  baseSpec.components.responses.error.content[
    'application/json'
  ].schema.properties = errorSpec.properties;

  const spec = JSON.stringify(baseSpec, null, 2)
    .replace('query.', '') // Remove query prefix, TRPC plugin adds this
    .replace('mutation.', ''); // Remove mutation prefix, TRPC plugin adds this

  fs.writeFileSync('./openapi-spec.json', spec);

  console.log('Wrote OpenAPI Spec to root directory.');

  process.exit(0);
})();
