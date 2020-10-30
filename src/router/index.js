import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/", component: () => import('../views/home/Home.vue'),
    children: [
      { path: "/", name: "首页", component: () => import('../views/home/shouye'), meta: { active: 0, title: "每时每刻" } }, // 首页
      { path: "/kecheng", name: "课程", component: () => import('../views/home/kecheng'), meta: { active: 1, title: "特色课" } }, // 首页
      { path: "/yueke", name: "约课记录", component: () => import('../views/home/yueke'), meta: { active: 2, title: "约课" } }, // 首页
      { path: "/lianxi", name: "练习", component: () => import('../views/home/lianxi'), meta: { active: 3, title: "练习" } }, // 首页
      {
        path: "/wode", name: "我的", component: () => import('../views/home/wode'), meta: { active: 4, title: "我的" },
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
  { path: "/login", name: "密码登录", component: () => import('../views/login/Login'), meta: { title: "密码登录" } },// 密码登录
  { path: "/logins", name: "验证码登录", component: () => import('../views/login/Logins'), meta: { title: "验证码登录" } },// 验证码登录
  { path: "/shezhi", name: "设置", component: () => import('../views/wode/shezhi'), meta: { title: "设置" } },// 设置页面
  { path: "/uppwd", name: "修改密码", component: () => import('../views/login/uppwd'), meta: { title: "设置密码" } },// 修改密码
]

const router = new VueRouter({
  routes
})

export default router
