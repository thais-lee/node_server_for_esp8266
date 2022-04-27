import { Router, Request, Response, NextFunction } from 'express';
import Container from 'typedi';
import getService from '@src/services/getData.services';
const route = Router();

export default (app: Router) => {
  app.use('/get', route);

  route.get('/lastTemp', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const getDataService = Container.get(getService);
      const result = await getDataService.getlastTempRecord();
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  });
};
