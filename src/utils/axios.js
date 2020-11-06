import axios from 'axios'
import { Toast } from 'vant';
import $router from '../router/index'

import {
    Guid
} from '../js/guid'
let guid = Guid.NewGuid().toString("D")
// export default instance;
// instance 新创建的一个axios 赋值给instance
const instance = axios.create({
    // baseURL: 'http://120.53.31.103:84',
    baseURL: 'https://www.365msmk.com',
    // timeout: "7000"
})
// 请求拦截器
instance.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('token')
    if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.authorization = `Bearer ${token}` //请求头加上token
    }
    config.headers.deviceid = guid
    config.headers.devicetype = 'H5'
    // Toast.loading({
    //     message: '加载中...',
    //     forbidClick: true,
    // });
    return config
})
// 响应拦截器
instance.interceptors.response.use((res) => {
    if (res.data.code == 200) {
        // Toast.clear()
    }
    if(res.data.code==202){
        $router.push('/login')
        Toast("未登录或登录超时")
    }
    return res
})
// 将新创建的一个axios导出
export default instance