import { Router } from 'express';
import getApi from './routes/getData.route';
import postApi from './routes/postData.route'

export default () => {
  const app = Router();
  getApi(app);
  postApi(app);
  return app;
};
