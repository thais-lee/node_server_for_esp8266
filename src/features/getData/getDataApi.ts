import { axiosMethod, axiosRequest } from '@src/utils/fetchUtils';
import config from '@src/config';

class getApi {
  apiEndPoint: string;
  getApiEndPoint: string;
  readKey: string;
  constructor() {
    this.apiEndPoint = config.api.thinkspeak.endpoint;
    this.getApiEndPoint =
      this.apiEndPoint + '/channels/' + config.api.thinkspeak.channel_id.toString();
    this.readKey = config.api.thinkspeak.read;
  }

  getLastTemp() {
    const url = this.getApiEndPoint + '/fields/1/last.json';
    const params = {
      api_key: this.readKey,
    };
    return axiosRequest(url, axiosMethod.GET, params);
  }
}

export default new getApi();
