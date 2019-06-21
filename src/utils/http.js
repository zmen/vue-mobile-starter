import axios from 'axios';

const { CancelToken } = axios.CancelToken;
const axiosPromises = {};

const timeout = 5000;
const baseURL = '';

const axiosInstance = axios.create({ timeout, baseURL });

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

const delegateMethods = ['get', 'post', 'delete', 'head', 'options', 'put', 'patch'];
delegateMethods.forEach((method) => {
  Object.defineProperty(request, method, {
    get() { return axiosInstance[method]; },
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
  request,
  cancelRequest,
  addRequestInterceptors,
  addResponseInterceptors,
};
