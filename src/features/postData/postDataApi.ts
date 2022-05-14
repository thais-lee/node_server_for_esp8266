import { axiosMethod, axiosRequest } from '@src/utils/fetchUtils';
import config from '@src/config';
import { TempAndHumiDto } from '@src/dto/sensorData.dto';

class postApi {
  apiEndPoint: string;
  getApiEndPoint: string;
  writeKey: string;
  constructor() {
    this.apiEndPoint = config.api.thinkspeak.endpoint;
    this.getApiEndPoint = this.apiEndPoint + '/update.json';
    this.writeKey = config.api.thinkspeak.write;
  }

  postData(data: TempAndHumiDto) {
    const url = this.getApiEndPoint;
    const params = {
      api_key: this.writeKey,
      field1: data.temperature,
      field2: data.humidity,
    };
    return axiosRequest(url, axiosMethod.POST, params);
  }
}

export default new postApi();
