import { Logger } from 'tslog';
import { ILogObj } from 'tslog/dist/types/interfaces';

const logger = new Logger<ILogObj>({
  hideLogPositionForProduction: true,
  type: 'pretty',
});

const jsonLogger = new Logger<ILogObj>({
  hideLogPositionForProduction: true,
  type: 'json',
});

export default logger;
export { jsonLogger as json };
