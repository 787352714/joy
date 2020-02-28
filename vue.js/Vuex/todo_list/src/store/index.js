import todos from './modules/todos.js';
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);
const store = new Vuex.Store(
   {
    modules:{
        todos
    }
   }
)//

export default store;