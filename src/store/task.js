import mixin from '../mixins/Msg.js';
import axios from '../axios/config.js';

const task = {
    state () {
      return {
          tasks: {}
      }
    },
    mutations: {
       add(state, tasks){
        for (const key in tasks) {
            state.tasks[key] = tasks[key]
        }
       }
    },
    getters: {
       allTasks(state){
        return state.tasks;
       }
    },
    actions: {
        create({ctx}, {e, formData}){
                axios.post('tasks', formData)
                    .then( () => {
                        mixin.methods.hideErrors();
                        mixin.methods.showSuccessMsg(e.target, 'Задача создана');
                    })
                    .catch(error => {
                        if (error.response) {
                            let errors = error.response.data.error.errors;
                            mixin.methods.showErrors(errors);
                        }
                    })
        },
        getAll({commit}){
            axios.get('tasks')
                .then(res => {
                    commit('add', res.data.data);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    },
}

export default task;