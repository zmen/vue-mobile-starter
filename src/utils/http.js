import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const axiosPromises = {};

const timeout = 5000;
const baseURL = '';

let mock;
if (process.env.NODE_ENV === 'test') {
  mock = new MockAdapter(axios, { delayResponse: 500 });
}
const axiosInstance = axios.create({ timeout, baseURL });
const { CancelToken } = axios;

/**
 * 调用axios实例发送请求，参数类型参考axios官方文档
 * @param {import('axios').AxiosRequestConfig} options
 * @returns {import('axios').AxiosInstance}
 */
const request = (options) => {
  const newOptions = Object.assign({}, options);
  const source = CancelToken.source();
  newOptions.cancelToken = source.token;
  axiosPromises[options.url] = axiosPromises[options.url] || [];
  axiosPromises[options.url].push(source.cancel);
  return axiosInstance(newOptions);
};

/* 兼容axios原有方法 */
const methodsWithNoData = ['delete', 'get', 'head', 'options'];
methodsWithNoData.forEach((method) => {
  Object.defineProperty(request, method, {
    get() {
      return (url, config) => request(Object.assign(config || {}, {
        url,
        method,
      }));
    },
  });
});

const methodsWithData = ['post', 'put', 'patch'];
methodsWithData.forEach((method) => {
  Object.defineProperty(request, method, {
    get() {
      return (url, data, config) => request(Object.assign(config || {}, {
        method,
        url,
        data,
      }));
    },
  });
});

/**
 * 停止某个未完成的请求
 * @param {string} url 需要停止的请求url
 * @param {Boolean} [cancelAll] 是否要停止该url发送的所有请求
 * @param {string} [msg] 控制台消息
 */
function cancelRequest(url, cancelAll = false, msg = 'operation canceled') {
  if (axiosPromises[url] && axiosPromises[url].length > 0) {
    axiosPromises[url].shift()(msg);
    if (cancelAll) {
      while (axiosPromises[url].length > 0) {
        axiosPromises[url].shift()(msg);
      }
    }
  }
}

/**
 * 添加请求过滤器，执行顺序与添加顺序有关
 * @param {function} requestHandler
 */
function addRequestInterceptors(requestHandler) {
  axiosInstance.interceptors.request.use(requestHandler);
}

/**
 * 添加响应过滤器，执行顺序与添加顺序有关
 * @param {Function} responseHandler
 * @param {Function} errorHandler
 */
function addResponseInterceptors(responseHandler, errorHandler) {
  axiosInstance.interceptors.response.use(responseHandler, errorHandler);
}

export default {
  mock,
  request,
  cancelRequest,
  addRequestInterceptors,
  addResponseInterceptors,
};
