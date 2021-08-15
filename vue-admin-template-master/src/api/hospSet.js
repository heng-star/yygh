import request from '@/utils/request'

const api_name = '/admin/hosp/hospitalSet/findPageHospSet'

export default {

    getHospSetList(current, limit, searchObj) {
        return request({
        url: `/admin/hosp/hospitalSet/findPageHospSet/${current}/${limit}`,
        method: 'post',
        data: searchObj  //这里因为是POST请求，不能以get访问
        })
    },

    deleteHospSet(id) {
        return request ({
          url: `/admin/hosp/hospitalSet/${id}`,
          method: 'delete'
        })
    },

    batchRemoveHospSet(idList) {
        return request({
            url: `/admin/hosp/hospitalSet/batchRemove`,
            method: 'delete',
            data: idList
        })
    },

    // // 当表格复选框选项发生变化的时候触发
    // handleSelectionChange(selection) {
    //   this.multipleSelection = selection
    //  },

    //锁定和取消锁定
    lockHospSet(id,status) {
        return request ({
            url: `/admin/hosp/hospitalSet/lockHospitalSet/${id}/${status}`,
            method: 'put'
        })
    },

    //添加医院设置
    saveHospSet(hospitalSet) {
        return request ({
            url: `/admin/hosp/hospitalSet/savehospitalset`,
            method: 'post',
            data: hospitalSet
        })
    },

    //先查询在修改
    getHospSet(id) {
        return request ({
            url: `/admin/hosp/hospitalSet/getHospSet/${id}`,
            method: 'get',
            //data: hospitalSet
        })
    },

    updateHospSet(hospitalSet) {
        return request ({
            url: `/admin/hosp/hospitalSet/updateHospitalSet`,
            method: 'post',
            data: hospitalSet
        })
    },

  
  
        
      
}
