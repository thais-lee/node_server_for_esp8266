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

  getLastHumi() {
    const url = this.getApiEndPoint + '/fields/2/last.json';
    const params = {
      api_key: this.readKey,
    };

    return axiosRequest(url, axiosMethod.GET, params);
  }

  //get both last Temperature and Humidity
  getLastEntry() {
    const url = this.getApiEndPoint + '/feeds/last.json';
    const params = {
      api_key: this.readKey,
    };

    return axiosRequest(url, axiosMethod.GET, params);
  }

  //get records of last 'day' record
  //ex: last 2 days, last 3 days,...
  getLastDays(day: number) {
    const url = this.getApiEndPoint + '/feeds.json';
    const params = {
      api_key: this.readKey,
      day: day,
    };

    return axiosRequest(url, axiosMethod.GET, params);
  }
}

export default new getApi();
