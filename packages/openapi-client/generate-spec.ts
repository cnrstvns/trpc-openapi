import fs from 'fs';
import openApiSpec from 'api/src/openapi';

const errorSpec = {
  properties: {
    message: {
      type: 'string',
    },
    code: {
      type: 'string',
    },
    issues: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
          },
        },
        required: ['message'],
        additionalProperties: false,
      },
    },
  },
};

(async () => {
  const openApiSpec = openApiSpec;

  const spec = JSON.stringify(, null, 2)
    .replace('query.', '') // Remove query prefix
    .replace('mutation.', ''); // Remove mutation prefix

  fs.writeFileSync('./openapi-spec.json', spec);

  console.log('Wrote OpenAPI Spec to root directory.');

  process.exit(0);
})();
