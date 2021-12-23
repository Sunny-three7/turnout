import * as types from './mutations-type'

export const mutations = {
    [types.SIGN_IN] (state, user_payload){
        state.user = user_payload
    },
    
    [types.SIGN_OUT] (state){
        state.user = {}
    },

    [types.SET_EVENT] (state, event_payload){
        state.event = event_payload
    }
}