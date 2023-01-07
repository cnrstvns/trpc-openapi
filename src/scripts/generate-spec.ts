import fs from 'fs';
import logger from '../helpers/logger';
import openApiSpec from '../openapi';

(async () => {
  fs.writeFileSync('./openapi-spec.json', JSON.stringify(openApiSpec, null, 2));

  logger.info('Wrote OpenAPI Spec to root directory.');

  process.exit(0);
})();
