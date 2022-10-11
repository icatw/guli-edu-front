import request from '@/utils/request'

export default {
//用户登陆
  login(formItem) {
    return request({
      url: `/ucenterservice/apimember/login`,
      method: 'post',
      data: formItem
    })
  },
  //根据token获取用户信息
  getLoginInfo() {
    return request({
      url: `/ucenterservice/apimember/getMemberInfo`,
      method: 'get',
// headers: {'token': cookie.get('guli_token')}
    })
//headers: {'token': cookie.get('guli_token')}
  }
}
