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
        return axios.post('/api/app/smsCode', data)                 // 获取验证码
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
    teacher(data) {
        return axios.get(`/api/app/teacher/${data}`)                   // 老师介绍获取
    },
    mainCourse(data) {
        return axios.post(`/api/app/teacher/mainCourse`, data)                   // 老师主讲课程
    },
    collect(data) {
        return axios.get(`/api/app/teacher/collect/${data}`)                   // 关注老师
    },
    courese(data) {
        return axios.get(`/api/app/courseInfo/basis_id=${data}`)                   // 课程详细信息
    },
    co_com(data) {
        return axios.post(`/api/app/courseComment`, data)                   // 课程评价
    },
}

// 默认导出
export default http