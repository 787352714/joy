import Mock from 'mockjs';

export default {
  mockData(){
    const BASE_PATH = process.env.BASE_URL.endsWith('/')
      ? process.env.BASE_URL.substr(0, process.env.BASE_URL.length - 1)
      : process.env.BASE_URL
    Mock.mock(BASE_PATH + '/api/user/login', {
      'code': 1,
      'result': {
        'id': '100001',
        'name': 'pedeg',
        'roles': ['admin']
      }
    });
    Mock.mock(BASE_PATH + '/api/user/register', {
      'code': 1,
      'message': '注册成功'
    })
  }
}