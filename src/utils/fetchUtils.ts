import axios from 'axios';

export const axiosMethod = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export const axiosRequest = (url, method = axiosMethod.GET, params = null, data = null) => {
  const axiosConfig = {
    url,
    method,
    headers: {},
    params,
    data,
  };

  axiosConfig.data = data;
  return axios(axiosConfig);
};
