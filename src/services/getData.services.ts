import { Service, Inject, Container } from 'typedi';
import { BadRequestException, NotFoundException } from '@src/utils/CustomError';
import getApi from '@src/features/getData/getDataApi';

@Service()
export default class getService {
  public async getlastTempRecord(): Promise<JSON> {
    const result = await getApi.getLastTemp();
    return await result.data;
  }

  public async getLastHumiRecord(): Promise<JSON>{

    const result = await getApi.getLastHumi();
    return await result.data;
  }

  public async getLastEntryRecord():Promise<JSON>{
    const result = await getApi.getLastEntry();
    return await result.data;
  }
}
