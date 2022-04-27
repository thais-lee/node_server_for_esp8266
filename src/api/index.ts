import { Router } from 'express';
import getApi from './routes/getData.route';
export default () => {
  const app = Router();
  getApi(app);
  return app;
};
