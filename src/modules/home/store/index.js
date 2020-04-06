import Vue from 'vue'
import Vuex from 'vuex'
import kLine from './kLine'
import topN from './topN'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    userInfo: {
      email: "xxxxxx@qq.com"
    }
  },
  modules: {
    kLine,
    topN
  },
})