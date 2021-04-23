import { registerMicroApps, start } from 'qiankun'
export default {
  initQiankun (apps) {
    const defaults = [{
      name: 'subAPP',
      entry: { scripts: ['//127.0.0.1:9000/main.js'] },
      container: '#subApp',
      activeRule: '/sub-app'
    }]
    registerMicroApps(apps || defaults)
    start()
  }
}
