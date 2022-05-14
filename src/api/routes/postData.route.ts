import { Router, Request, Response, NextFunction } from 'express';
import Container from 'typedi';
import postService from '@src/services/postData.services';
import { TempAndHumiDto } from '@src/dto/sensorData.dto';

const route = Router();

export default (app: Router) => {
  app.use('/write', route);

  route.post('/update', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const postDataService = Container.get(postService);
      const result = await postDataService.postData(req.body as TempAndHumiDto);
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  });
};
