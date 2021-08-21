getById(id) {
    return request({
      url: `${api_name}/show/${id}`,
      method: 'get'
    })
  }
