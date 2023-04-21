import request from '@/utils/axios-req'

//获取用户信息
export const userInfoReq = () => {
  return new Promise((resolve) => {
    const reqConfig = {
      url: '/author/userInfo',
      method: 'get'
    }
    request(reqConfig).then(({ data }) => {
      resolve(data)
    })
  })
}

//获取路由信息
export const getRouterReq = () => {
  return new Promise((resolve) => {
    const reqConfig = {
      url: '/getRouters',
      method: 'get'
    }
    request(reqConfig).then(({ data }) => {
      resolve(data)
    })
  })
}

//登录
export const loginReq = (subForm) => {
  return request({
    url: '/author/login',
    data: subForm,
    method: 'post'
  })
}

//退出登录
export const loginOutReq = () => {
  return request({
    url: '/author/logout',
    method: 'post'
  })
}

//获取验证码
export const getCodeImg = () => {
  return request({
    url: '/captchaImage',
    headers: {
      isToken: false
    },
    method: 'get'
  })
}

// 用户状态修改
export function changeUserStatus(userId, status) {
  const data = {
    userId,
    status
  }
  return request({
    url: '/system/user/changeStatus',
    method: 'put',
    data
  })
}

export const listReq = (query) => {
  //查询列表
  return request({
    url: '/system/user/list',
    method: 'get',
    params: query
  })
}

//删除
export const deleteReq = (id) => {
  return request({
    url: `/system/user/${id}`,
    method: 'delete'
  })
}

//批量删除
export const multiDeleteReq = (id) => {
  return request({
    url: `/system/user/${id}`,
    method: 'delete'
  })
}

//导入
export const importReq = (updateSupport) => {
  return request({
    url: `/system/user/importData?updateSupport=${updateSupport}`,
    method: 'post'
  })
}

//导出
export const exportReq = (reqConfig) => {
  return request({
    url: `/system/user/export`,
    method: 'post',
    params: Object.assign(reqConfig, { responseType: 'blob' })
  })
}

//模板下载
export const downloadTemplateReq = () => {
  return request({
    url: `system/user/importTemplate`,
    method: 'post'
  })
}
// 新增和编辑接口

//新增
export const addUser = (data) => {
  return request({
    url: `/system/user`,
    data,
    method: 'post'
  })
}
//更新
export const updateUser = (data) => {
  return request({
    url: `/system/user`,
    data,
    method: 'put'
  })
}
//详情
export const getUser = (id) => {
  return request({
    url: `/system/user/${id}`,
    method: 'get'
  })
}
//归属部门
export const deptIdReq = (data) => {
  return request({
    url: `/system/user/deptTree`,
    data,
    method: 'get'
  })
}

// 保存授权角色
export function updateAuthRole(data) {
  return request({
    url: '/system/user/authRole',
    method: 'put',
    params: data
  })
}

// 查询部门下拉树结构
export function deptTreeSelect() {
  return request({
    url: '/system/user/deptTree',
    method: 'get'
  })
}

// 查询授权角色
export function getAuthRole(userId) {
  return request({
    url: `/system/user/authRole/${userId}`,
    method: 'get'
  })
}

// 用户密码重置
export function resetUserPwd(userId, password) {
  const data = {
    userId,
    password
  }
  return request({
    url: '/system/user/resetPwd',
    method: 'put',
    data
  })
}