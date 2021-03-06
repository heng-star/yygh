import request from '@/utils/request'

const api_name = `/api/user`

export default {
  login(userInfo) {
    return request({
      url: `${api_name}/login`,
      method: `post`,
      data: userInfo
    })
  },

  getUserInfo() {
    return request({
      url: `${api_name}/auth/getUserInFo`,
      method: `get`
    })
  },

  //用户认证接口
  saveUserAuth(userAuah) {
    return request({
      url: `${api_name}/auth/userAuth`,
      method: 'post',
      data: userAuah
    })
  }
}
