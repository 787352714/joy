import Cookie from 'js-cookie'

console.log('object :', Cookie.get('user_info'));

const user = {
  state: {
    userInfo: Cookie.get('user_info'),
    accssToken: Cookie.get('access_token')
  }
}

export default user