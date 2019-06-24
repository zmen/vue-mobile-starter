import http from '@/utils/http';

const {
  addRequestInterceptors,
  addResponseInterceptors,
  mock,
  request,
} = http;

// mock response
mock.onGet('/example').reply(200, { id: 1 });
mock.onGet('/user', { params: { text: 'foo' } }).reply(200, { name: 'foo' });
mock.onGet('/user', { params: { text: 'bar' } }).reply(200, { name: 'bar' });

describe('request test', () => {

  it('should have the same methods as axios instance', () => {
    expect(typeof request.get).toBe('function');
    expect(typeof request.post).toBe('function');
    expect(typeof request.head).toBe('function');
    expect(typeof request.put).toBe('function');
    expect(typeof request.options).toBe('function');
    expect(typeof request.patch).toBe('function');
    expect(typeof request.delete).toBe('function');
  });

  it('should mock server works', async () => {
    expect.assertions(1);
    const resp = await request.get('/example');
    expect(resp.data).toEqual({ id: 1 });
  });

  // it('should be able to cancel a request by string', async () => {
  //   expect.assertions(1);
  //   setTimeout(() => {
  //     cancelRequest('/example');
  //   }, 100);
  //   await request.get('/example').catch((thrown) => {
  //     expect(axios.isCancel(thrown)).toBeTruthy();
  //   });
  // });

  it('should request interceptors work', async () => {
    addRequestInterceptors((config) => {
      const newConfig = Object.assign({}, config);
      newConfig.params.text = 'bar';
      return newConfig;
    });
    const resp = await request.get('/user', { params: { text: 'foo' } });
    expect(resp.data).toEqual({ name: 'bar' });
  });

  it('should response interceptors work', async () => {
    addResponseInterceptors((resp) => {
      const newResp = Object.assign({}, resp);
      newResp.data.name = 'foobar';
      return newResp;
    });
    const resp = await request.get('/user', { params: { text: 'foo' } });
    expect(resp.data.name).toBe('foobar');
  });
});
