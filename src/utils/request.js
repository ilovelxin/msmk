import axios from './axios'    // 导入封住好的axios实例

// 在这里封装请求路径
const http = {
    appIndex() {
        return axios.get('/api/app/recommend/appIndex')          // 获取首页数据
    },
    login(data) {
        return axios.post('/api/app/login', data)                 // 登录
    },
    sms(data) {
        return axios.post('/api/app/smsCode', data)                 // 获取修改密码的验证码
    },
    okuppwd(data) {
        return axios.post('/api/app/password', data)                 // 确认修改密码
    },
    banner(data) {
        return axios.get('/api/app/banner', data)                   // 获取首页轮播图
    },
    appIndex(data) {
        return axios.get('/api/app/recommend/appIndex', data)                   // 获取首页列表
    },
}

// 默认导出
export default http