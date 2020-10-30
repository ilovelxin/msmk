import axios from 'axios'
import { Guid } from '../js/guid'
import { Toast } from 'vant';

let _axios = axios.create({
    // 在这里配置请求头
    baseURL: "http://120.53.31.103:84"     // 公共地址
    // headers:{}     // 请求头
})
let id = window.localStorage.getItem('guid')
let guid = ''
if (id) {
    guid = id
} else {
    id = Guid.NewGuid.toString('D')
}
// 请求拦截器
_axios.interceptors.request.use(
    // 请求成功
    function (config) {
        const token = localStorage.getItem('token')
        if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.authorization = token //请求头加上token
        }
        config.headers.deviceid = guid
        config.headers.devicetype = 'h5'
        Toast.loading({
            message: '加载中...',
            forbidClick: true,
        });
        return config
    },
    // 请求失败
    function (error) {
        return Promise.reject(error)
    }
)

// 响应拦截器
_axios.interceptors.response.use(
    // 响应成功
    function (response) {
        if(response.code==200){
            Toast.clear()
        }
        return response
    },
    //  响应失败
    function (error) {
        return Promise.reject(error)
    }
)

// 默认导出 _axios
export default _axios