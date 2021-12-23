import * as types from './mutations-type'

export const signIn = ({commit}, user_payload) => {
    commit(types.SIGN_IN, user_payload)
}

export const signOut = ({commit}) => {
    commit(types.SIGN_OUT)
}

export const listEvents = ({commit}, event_payload) => {
    commit(types.SET_EVENT, event_payload)
}