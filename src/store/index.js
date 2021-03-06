import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import {mutations} from './mutations'
import * as actions from './actions'

const state = {
    user: {},
    event: []
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})