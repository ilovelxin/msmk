import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/", component: () => import('../views/index/Home.vue'),
    children: [
      { path: "/", name: "首页", component: () => import('../views/index/shouye'), meta: { active: 0, title: "每时每刻" } }, // 首页
      { path: "/teseke", name: "课程", component: () => import('../views/index/kecheng'), meta: { active: 1, title: "特色课" } }, // 首页
      { path: "/yueke", name: "约课记录", component: () => import('../views/index/yueke'), meta: { active: 2, title: "约课" } }, // 首页
      { path: "/lianxi", name: "练习", component: () => import('../views/index/lianxi'), meta: { active: 3, title: "练习" } }, // 首页
      {
        path: "/wode", name: "我的", component: () => import('../views/index/wode'), meta: { active: 4, title: "我的" },
        beforeEnter(to, from, next) {
          let token = sessionStorage.getItem('token');
          if (token) {
            next()
          } else {
            next('/login')
          }
        }
      }, // 首页
    ]
  },
  { path: "/login", name: "密码登录", component: () => import('../views/login/psd-login.vue'), meta: { title: "密码登录" } },
  { path: "/logins", name: "验证码登录", component: () => import('../views/login/sms-login.vue'), meta: { title: "验证码登录" } },
  { path: "/uppwd", name: "修改密码", component: () => import('../views/login/up-psd.vue'), meta: { title: "修改密码" } },
  { path: "/forget-psd", name: "找回密码", component: () => import('../views/login/forget-psd.vue'), meta: { title: "找回密码" } },
  { path: "/geren", name: "个人信息", component: () => import('../views/my/info.vue'), meta: { title: "个人信息" } },
  { path: "/set-info", name: "修改信息", component: () => import('../views/my/set-info.vue'), meta: { title: "修改个人信息" } },
  { path: "/shezhi", name: "设置", component: () => import('../views/my/set.vue'), meta: { title: "设置" } },
  { path: "/my-study", name: "我的学习", component: () => import('../views/my/myStudy.vue'), meta: { title: "我的学习" } },
  { path: "/xuexi-info", name: "学习详情", component: () => import('../views/my/study-info.vue'), meta: { title: "学习详情" } },
  { path: "/my-collent", name: "我的收藏", component: () => import('../views/my/collent.vue'), meta: { title: "我的收藏" } },
  { path: "/my-teacher", name: "我的关注", component: () => import('../views/my/my-teacher.vue'), meta: { title: "我的关注" } },
  { path: "/teacher", name: "讲师详情", component: () => import('../views/home/teacher.vue'), meta: { title: "讲师详情" } },
  { path: "/kecheng", name: "课程详情", component: () => import('../views/home/course-info.vue'), meta: { title: "课程详情" } },
  { path: "/rili", name: "学习日历", component: () => import('../views/home/day.vue'), meta: { title: "学习日历" } },
  { path: "/search", name: "搜索", component: () => import('../views/home/search.vue'), meta: { title: "搜索" } },
  { path: "/oto", name: "一对一辅导", component: () => import('../views/yueke/oto.vue'), meta: { title: "一对一辅导" } },
  { path: "/oto-plan", name: "预约课程", component: () => import('../views/yueke/oto-plan.vue'), meta: { title: "预约课程" } },
  { path: "/my-news", name: "消息中心", component: () => import('../views/my/message.vue'), meta: { title: "消息中心" } },
  { path: "/order", name: "订单中心", component: () => import('../views/my/order.vue'), meta: { title: "订单中心" } },
  { path: "/feedback", name: "意见反馈", component: () => import('../views/my/feedback.vue'), meta: { title: "意见反馈" } },
]

const router = new VueRouter({
  routes
})

export default router
