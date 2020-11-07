import axios from './axios'    // 导入封住好的axios实例

// 在这里封装请求路径
const http = {
    appIndex() {
        return axios.get('/api/app/recommend/appIndex')          // 获取首页数据
    },
    login(data) {
        return axios.post('/api/app/login', data)                                    // 登录
    },
    sms(data) {
        return axios.post('/api/app/smsCode', data)                                  // 获取验证码
    },
    okuppwd(data) {
        return axios.post('/api/app/password', data)                                  // 确认修改密码
    },
    banner(data) {
        return axios.get('/api/app/banner', data)                                     // 获取首页轮播图
    },
    appIndex(data) {
        return axios.get('/api/app/recommend/appIndex', data)                         // 获取首页列表
    },
    teacher(data) {
        return axios.get(`/api/app/teacher/${data}`)                                   // 老师信息
    },
    teacher_info(data) {
        return axios.get(`/api/app/teacher/info/${data}`)                               // 老师介绍
    },
    mainCourse(data) {
        return axios.post(`/api/app/teacher/mainCourse`, data)                          // 老师主讲课程
    },
    collect(data) {
        return axios.get(`/api/app/teacher/collect/${data}`)                            // 关注老师
    },
    courese(data) {
        return axios.get(`/api/app/courseInfo/basis_id=${data}`)                        // 课程详细信息
    },
    courseChapter(data) {
        return axios.post(`/api/app/courseChapter`,data)                        // 课程回放
    },
    co_com(data) {
        return axios.post(`/api/app/courseComment`, data)                               // 课程评价
    },
    co_col(data) {
        return axios.post(`/api/app/collect`, data)                                     // 课程收藏
    },
    cel_col(data) {
        return axios.put(`/api/app/collect/cancel/${data}/1`)                           // 课程取消收藏
    },
    courseClassify(data) {
        return axios.get(`/api/app/courseClassify`, data)                               // 获取特色课下拉列表内容
    },
    courseBasis(data) {
        return axios.get(`/api/app/courseBasis?page=${data.page}&limit=${data.limit}&course_type=${data.course_type}&classify_id=${data.classify_id}&order_by=${data.order_by}&attr_val_id=${data.attr_val_id}&is_vip=${data.is_vip}&`)                               // 获取所有课程
    },
    users(data) {
        return axios.get(`/api/app/getUCenterInfo?`)                               // 用户信息修改
    },
    userInfo(data) {
        return axios.get(`/api/app/userInfo?`)                               // 用户信息
    },
    my_teacher(data) {
        return axios.get(`/api/app/collect?page=${data.page}&limit=${data.limit}&type=${data.type}&`)  // 我的关注·收藏
    },
    cancel_teacher(data) {
        return axios.put(`/api/app/collect/cancel/${data}/2`)                           // 取消关注
    },
    baoming(data) {
        return axios.post(`/api/app/order/downOrder`, data)                           // 课程报名
    },
    xuexi_info(data) {
        return axios.get(`/api/app/myStudy/course/${data}`)                           // 学习详情
    },
    myStudy_comment(data) {
        return axios.post(`/api/app/myStudy/comment`, data)                           // 课程评价
    },
    myStudy_course(data) {
        return axios.delete(`api/app/myStudy/course/${data}`)                           // 移除课程
    },
    myStudy_nav(data) {
        return axios.get(`/api/app/myStudy/${data}`)                           // 我的学习顶部导航
    },
    add_img(data) {
        return axios.post("/api/app/public/img", data)                           // 头像上传
    },
    ok_up_user(data) {
        return axios.put("/api/app/user", data)                           // 修改信息
    },
    video(data) {
        return axios.get(`/api/app/getPlayToken/video_id=${data.video_id}/course_id=${data.id}?`)    // 获取视频token           
    },
    serach(data) {
        return axios.get(`/api/app/courseBasis`, { params: data })    // 搜索课程                
    },
    areaList(data) {
        return axios.get(`/api/app/sonArea/${data}?`)    //获取所有城市                     
    },
    getClass(data) {
        return axios.get(`/api/app/module/attribute/1`)    //获取所有年级              
    },
    getCourse(data) {                                      //  一对一辅导
        return axios.get(`/api/app/otoCourse?page=${data.page}&limit=${data.limit}&start_time=${data.start_time}&end_time=${data.end_time}&level_id=${data.level_id}&is_collect=${data.is_collect}&is_attended=${data.is_attended}&sex=${data.sex}&attr_val_id=${data.attr_val_id}`)    //获取所有年级              
    },
    getOtoCourseOptions(data) {    
        return axios.get(`/api/app/otoCourseOptions`)                                  //  一对一辅导下拉菜单
    },
    my_order(data) {    
        return axios.post(`/api/app/myOrder`,data)                                  //  课程订单
    },
    feedback(data) {    
        return axios.post(`/api/app/feedback`,data)                                  //  意见反馈
    },
}

// 默认导出
export default http