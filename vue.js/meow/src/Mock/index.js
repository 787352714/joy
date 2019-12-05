import Mock from 'mockjs';

export default {
  mockData() {
    const BASE_URL = process.env.VUE_APP_BASE_PATH;
    Mock.mock(BASE_URL+'api/login',{
      'code': 1,
      'result': {
        'id': '100001',
        'name': 'pedeg',
        'roles': ['admin']
      }
    })
  }
}