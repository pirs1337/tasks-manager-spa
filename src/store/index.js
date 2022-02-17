import { createStore } from 'vuex';
import auth from './auth.js';
import task from './task.js';


const store = createStore({
    state () {
      return {}
    },
    mutations: {
    },
    getters: {
     
    },
    actions: {
        
    },
    modules: {
        auth: auth,
        task: task
    }
})

export default store;