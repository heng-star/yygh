import request from '@/utils/request'

const api_name = '/admin/hosp/hospitalSet/findPageHospSet'

export default {

    //数据字典请求

    dictList(id) {
        return request({
        url: `admin/cmn/dict/findChildData/${id}`,
        method: 'get',
        //data: searchObj  //
        })
    },

    
}