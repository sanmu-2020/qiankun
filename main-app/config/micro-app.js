import store from '../src/store'
const microApps = [
  {
    name: 'sub-microApp',
    entry: '//127.0.0.1:9000',
    activeRule: '/sub-vue',
    container: '#microApp', // 子应用挂载的div
    props: {
      // routerBase: '/sub-vue' // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
      store // 共享主应用的store实例
    }
  }
]

export default microApps
