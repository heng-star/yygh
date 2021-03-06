import request from '@/utils/request'

export default {
  //医院列表
  getPageList(current, limit, searchObj) {
    return request({
      url: `/admin/hosp/hospital/findHospList/${current}/${limit}`,
      method: 'get',
      params: searchObj //params参数传递，hospitalQueryVo 
    })
  },

  //查询dictCode查询下级数据字典
  findByDictCode(dictCode) {
    return request({
      url: `/admin/cmn/dict/findChildData/${dictCode}`,
      method: 'get'
    })
  },

  //根据id查询下级数据字典
  findByParentId(dictCode) {
    return request({
      url: `/admin/cmn/dict/findChildData/${dictCode}`,
      method: 'get'
    })
  },
  //

  //更新状态
  updateStatusbyid(id, status) {
    return request({
      url: `/admin/hosp/hospital/updateHospStatus/${id}/${status}`,
      method: 'get'
    })
  },

  //查看医院详情
  getHospById(id) {
    return request({
      url: `/admin/hosp/hospital/showHospDetail/${id}`,
      method: 'get'
    })
  },

  //查看医院科室
  gehoScheduleById(hoscode) {
    return request({
      url: `/admin/hosp/department/getDeptList/${hoscode}`,
      method: 'get'
    })
  },

  getScheduleRule(page, limit, hoscode, depcode) {
    return request({
      url: `/admin/hosp/schedule/getScheduleRule/${page}/${limit}/${hoscode}/${depcode}`,
      method: 'get'
    })
  },

  //根据排版日期时间查询详情
  //查询排班详情
  getScheduleDetail(hoscode, depcode, workDate) {
    return request({
      url: `/admin/hosp/schedule/getScheduleDetail/${hoscode}/${depcode}/${workDate}`,
      method: 'get'
    })
  },

  //获取挂号规则
  getBookingScheduleRule(page, limit, hoscode, depcode) {
    return request({
      url: `${api_name}/auth/getBookingScheduleRule/${page}/${limit}/${hoscode}/${depcode}`,
      method: 'get'
    })
  },

  //获取列表
  findScheduleList(hoscode, depcode, workDate) {
    return request({
      url: `${api_name}/auth/findScheduleList/${hoscode}/${depcode}/${workDate}`,
      method: 'get'
    })
  },



}
