import axios from 'axios';
import { AsyncStorage } from 'react-native';
import Sentry from 'sentry-expo';
import config from '../config';

class HttpService {
    client: any;
    unauthorizedCallback: () => void;
  constructor(options = {}) {
    this.client = axios.create(options);
    this.client.interceptors.response.use(this.handleSuccessResponse, this.handleErrorResponse);
    this.unauthorizedCallback = () => {};
  }

  attachHeaders(headers) {
    Object.assign(this.client.defaults.headers, headers);
  }

  removeHeaders(headerKeys) {
    headerKeys.forEach(key => delete this.client.defaults.headers[key]);
  }

  handleSuccessResponse(response) {
    return response;
  }

  handleErrorResponse = error => {
    const { status } = error.response;

    Sentry.captureException(error);

    switch (status) {
    case 401:
      AsyncStorage.clear();
      this.unauthorizedCallback();

      break;
    default:
      break;
    }

    return Promise.reject(error);
  };

  setUnauthorizedCallback(callback) {
    this.unauthorizedCallback = callback;
  }
}

const options = {
  baseURL: config.API_BASE_URL
  // baseURL: 'https://64388fdf.ngrok.io'
};
const httpService = new HttpService(options);

export default httpService;