import Vue from 'vue'
import App from './App.vue'
import Qiankun from '../config/qiankun.config'
import VueRouter from 'vue-router'
import store from './store'
import routes from './router'
import microApps from '../config/micro-app'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.config.productionTip = false
const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})
// window.router = router
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
router.beforeEach((to, from, next) => {
  if (to.path.indexOf('micro') > -1) {
    let path = to.path
    path = path.substring(path.indexOf('micro') + 5, path.length)
    next({ path: '/sub-vue' + path })
  } else next()
})
Qiankun.initQiankun(microApps)
