//导入Vue
import Vue from 'vue'
//导入Vue-router
import VueRouter from 'vue-router'
// 注册一下 use
Vue.use(VueRouter)
//导入组件 login
import login from '../view/login/login.vue'
//创建路由对象
const router = new VueRouter({
    //路由规则
    routes:[
        //登录
        {
         path:"/",
         component:login
        }
    ]

})
export default router