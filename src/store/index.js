import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store(
  Object.assign(
    { plugins: process.env.NODE_ENV !== 'online' ? [createLogger()] : [] },
    {
      state: state,
      mutations: mutations,
      actions: actions
    }
  )
)
