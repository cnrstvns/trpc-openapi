import { DefaultApi } from './dist/typescript';

const api = new DefaultApi();

api.queryCarList().then(console.log);
