import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/", component: () => import('../views/home/Home.vue'),
    children: [
      { path: "/", name: "首页", component: () => import('../views/home/shouye'), meta: { active: 0, title: "每时每刻" } }, // 首页
      { path: "/teseke", name: "课程", component: () => import('../views/home/kecheng'), meta: { active: 1, title: "特色课" } }, // 首页
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
  { path: "/login", name: "密码登录", component: () => import('../views/login/Login'), meta: { title: "密码登录" } },
  { path: "/logins", name: "验证码登录", component: () => import('../views/login/Logins'), meta: { title: "验证码登录" } },
  { path: "/shezhi", name: "设置", component: () => import('../views/wode/shezhi'), meta: { title: "设置" } },
  { path: "/uppwd", name: "修改密码", component: () => import('../views/login/uppwd'), meta: { title: "设置密码" } },
  { path: "/geren", name: "个人信息", component: () => import('../views/wode/geren'), meta: { title: "个人信息" } },
  { path: "/teacher", name: "讲师详情", component: () => import('../views/shouye/teacher'), meta: { title: "讲师详情" } },
  { path: "/kecheng", name: "课程详情", component: () => import('../views/shouye/kecheng'), meta: { title: "课程详情" } },
  { path: "/my-collent", name: "我的收藏", component: () => import('../views/wode/collent'), meta: { title: "我的收藏" } },
  { path: "/my-teacher", name: "我的关注", component: () => import('../views/wode/teacher'), meta: { title: "我的关注" } },
  { path: "/rili", name: "学习日历", component: () => import('../views/shouye/rili'), meta: { title: "学习日历" } },
  { path: "/search", name: "搜索", component: () => import('../views/shouye/search'), meta: { title: "搜索" } },
  { path: "/xuexi-info", name: "学习详情", component: () => import('../views/wode/xuexi'), meta: { title: "学习详情" } },
  { path: "/my-study", name: "我的学习", component: () => import('../views/wode/myStudy'), meta: { title: "我的学习" } },
  { path: "/set-name", name: "修改用户名", component: () => import('../views/wode/setname'), meta: { title: "修改用户名" } },
  { path: "/sex", name: "修改性别", component: () => import('../views/wode/sex'), meta: { title: "修改性别" } },
]

const router = new VueRouter({
  routes
})

export default router
