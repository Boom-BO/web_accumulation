# Vue+Axios请求封装

> 前后端分离就需要用到数据请求，这里介绍一下在Vue中如何进行axios的请求封装

### 创建request.js文件

```js
import axios from 'axios';
import { Message } from 'element-ui';
import store from '../store';

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url 读取config配置文件
  timeout: 5000                  // 请求超时时间
});

// request拦截器
service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['X-Token'] = store.getters.token; // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config;
}, error => {
  // Do something with request error
  console.log(error); // for debug
  Promise.reject(error);
})

// respone拦截器
service.interceptors.response.use(
  response => {
  /**
  * code为非20000是抛错 可结合自己业务进行修改
  */
    const res = response.data;
    if (res.code !== 20000) {
      Message({
        message: res.data,
        type: 'error',
        duration: 5 * 1000
      });

      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('FedLogOut').then(() => {
            location.reload();// 为了重新实例化vue-router对象 避免bug
          });
        })
      }
      return Promise.reject(error);
    } else {
      return response.data;
    }
  },
  error => {
    console.log('err' + error);// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
)

export default service;
```

:::tip
由于axios每一个都是一个实例，你的请求都是基于这个实例来的，所以所以配置的参数属性都继承了下来.
:::

```js
// api.xxx.js
import request from '@/utils/request';
export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  });
}
```
>你可以直接这样使用，之前拦截器写的东西都是生效的<br>
>它自动会有一个你之前配置的baseURL<br>
>但你说我这个请求baseURL和其它的不同<br>
>这也是很方便的，你可以字请求内部修改<br>
>它会自动覆盖你在创建实例时候写的参数<br>
```js
export function getInfo(token) {
  return request({
    baseURL: https://api2-xxxx.com
    url: '/user/info',
    method: 'get',
    params: { token }
  });
}
```