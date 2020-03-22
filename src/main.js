import Vue from 'vue'
import App from './App.vue'
//导入路由
import router from './router/index.js'
// 导入element-ui
import ElementUI from 'element-ui'
//导入element-ui样式
import 'element-ui/lib/theme-chalk/index.css'
//导入全局样式
import './style/base.css'
// 注册element-ui
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //挂载到Vue实例上 路由
  router
}).$mount('#app')
