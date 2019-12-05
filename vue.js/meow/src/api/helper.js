import axios from 'axios';
import {instance} from './axios';

const STATUS_OK = 200;
const STATUS_DEL = 204;
const STATUS_CREATE = 201;

export function login(url) {
  return function (data) {
    return instance.post(url, data).then(res => {
      const { status, data } = res;
      if (status === STATUS_OK) {
        return data;
      } else {
        return Promise.reject(res);
      }
    }).catch(err => Promise.reject(err));
  };
}

export function get(url) {
  return function (params, config) {
    return instance.get(url, {
      ...config,
      params
    }).then(res => {
      const { status, data } = res;
      if (status === STATUS_OK) {
        return data;
      } else {
        return Promise.reject(res);
      }
    }).catch(err => Promise.reject(err.response.data));
  };
}

export function getJson(url) {
  return function () {
    return axios.get(url).then(res => {
      const { status, data } = res;
      if (status === STATUS_OK) {
        return data;
      } else {
        return Promise.reject(res);
      }
    }).catch(err => Promise.reject(err.response.data));
  };
}

export function getAll(...urlList) {
  return function () {
    const getList = urlList.map(url => axios.get(url));
    return axios.all(getList).then(axios.spread((...resList) => {
      return resList.map(res => res.data);
    })).catch(err => Promise.reject(err.response.data));
  };
}

export function post(url) {
  return function (data, config) {
    return instance.post(url, data, config).then(res => {
      const { status, data } = res;
      if (status === STATUS_OK || status === STATUS_CREATE) {
        return data;
      } else {
        return Promise.reject(res);
      }
    }).catch(err => Promise.reject(err.response.data));
  };
}

export function del(url) {
  return function (params, config) {
    return instance.delete(url, {
      ...config,
      params
    }).then(res => {
      const { status } = res;
      if (status === STATUS_DEL || status === STATUS_OK) {
        return;
      } else {
        return Promise.reject(res);
      }
    }).catch(err => Promise.reject(err.response));
  };
}

export function put(url) {
  return function (data, config) {
    return instance.put(url, data, config).then(res => {
      const { status, data } = res;
      if (status === STATUS_OK || status === STATUS_DEL) {
        return data;
      } else if (status === STATUS_DEL) {
        return;
      } {
        return Promise.reject(res);
      }
    }).catch(err => Promise.reject(err.response.data));
  };
}

export function getBlob(url) {
  return function (params, config) {
    return instance.get(url, {
      params,
      ...config,
      responseType: 'blob'
    }).then(res => {
      const { status, data } = res;
      if (status === STATUS_OK) {
        const URL = window.URL || window.webkitURL;
        return URL.createObjectURL(data);
      }
    });
  };
}

export function form(url) {
  return function (data, config) {
    return instance.post(url, data, {
      ...config,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      }
    }).then(res => {
      const { status, data } = res;
      if (status === STATUS_OK || status === STATUS_CREATE) {
        return data;
      } else {
        return Promise.reject(res);
      }
    }).catch(err => Promise.reject(err.response.data));
  };
}
