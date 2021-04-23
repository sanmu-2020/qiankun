import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    total: 0,
    userName: '鲸鱼'
  },
  mutations: {
    increment (state) {
      state.total++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  },
  getters: {
    getUserName: (state, getters) => {
      return state.userName
    }
  }
})
export default store
