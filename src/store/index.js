import {createStore} from "vuex";

const store = createStore({
    state: {
        isMailValid: false,
        isNameValid: false,
        isTelValid: false,
        isLanguageValid: false
    },
    getters: {

    },
    mutations: {
        setMailValid(state, boolean) {
            state.isMailValid = boolean
        },
        setNameValid(state, boolean) {
            state.isNameValid = boolean
        },
        setTelValid(state, boolean) {
            state.isTelValid = boolean
        },
        setLanguageValid(state, boolean) {
            state.isLanguageValid = boolean
        }
    },
    actions: {
        setMailValid(context, boolean) {
            context.commit('setMailValid', boolean)
        },
        setNameValid(context, boolean) {
            context.commit('setNameValid', boolean)
        },
        setTelValid(context, boolean) {
            context.commit('setTelValid', boolean)
        },
        setLanguageValid(context, boolean) {
            context.commit('setLanguageValid', boolean)
        }
    }
})

export default store