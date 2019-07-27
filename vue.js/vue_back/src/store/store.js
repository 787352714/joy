import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store(
    {
        state:{
            source:{
                token: null,
                cancel: null,
            }
        },
        getters:{},
        mutations:{},
        actions:{}
    }
)

export default store;