import { createStore } from 'vuex';
import auth from './auth.js';
import task from './task.js';
import mixin from '../mixins/Msg.js';


const store = createStore({
    state () {
      return {}
    },
    mutations: {
    },
    getters: {
     
    },
    actions: {
        showErrors(error) {
          if (error.response) {
            let errors = error.response.data.error.errors;
            mixin.methods.showErrors(errors);
          }
        },
        showSuccessMsg(element, msg){
          mixin.methods.showSuccessMsg(element, msg);
        }
    },
    modules: {
        auth: auth,
        task: task
    }
})

export default store;