import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        cnt: 0
    }, 
    mutations: {
        add(state, cnt){
            state.cnt = cnt
        }
    }, 
    getters: {
        cnt: state => state.cnt
    }
})

// https://flaviocopes.com/vuex/ 