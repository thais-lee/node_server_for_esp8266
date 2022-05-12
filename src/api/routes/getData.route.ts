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

  route.get('/lastHumi', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const getDataService = Container.get(getService);
      const result = await getDataService.getLastHumiRecord();
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  });

  route.get('/last', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const getDataService = Container.get(getService);
      const result = await getDataService.getLastEntryRecord();
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  });

  route.get('/days/:day', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const getDataService = Container.get(getService);
      const result = await getDataService.getLastDaysRecord(parseInt(req.params.day));
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  });
};
