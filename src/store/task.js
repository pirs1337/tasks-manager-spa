import mixin from '../mixins/Msg.js';
import axios from '../axios/config.js';


const task = {
    state () {
      return {
          tasks: [],
          status: [
              'Активный',
              'Отложенный',
              'Завершенный'
          ]
      }
    },
    mutations: {
       add(state, tasks){
        for (const key in tasks) {
            state.tasks[key] = tasks[key]
        }
       },
       emptyTasks(state){
        state.tasks = [];
       }
    },
    getters: {
       tasks(state){
        return state.tasks;
       },
    },
    actions: {
        create({ctx}, {formData}){
             let result = axios.post('tasks', formData, {
                    headers: {'Authorization': 'Bearer '+ localStorage.getItem('token')}
            })
            return result;
        },
        getTasks({commit}, {status}){
          commit('emptyTasks');
            axios.get('tasks', {
                headers: {'Authorization': 'Bearer '+ localStorage.getItem('token')},
                params: {
                    status: status
                }
            })
                .then(res => {
                    commit('add', res.data.data);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        edit({dispatch}, {e, formData, status}){
            axios({
                method: 'PUT',
                url: `tasks/${formData.id}`,
                data: formData,
                headers: {'Authorization': 'Bearer '+ localStorage.getItem('token')}

              }).then(() => {
                mixin.methods.closeModal('Edit'+formData.id);
                dispatch('getTasks', {status})
              }).catch(error => {
                if (error.response) {
                    let errors = error.response.data.error.errors;
                    mixin.methods.showErrors(errors);
                }
              });
        },
        delete({dispatch}, {status, id}){
            axios({
                method: 'DELETE',
                url: `tasks/${id}`,
                data: id,
                headers: {'Authorization': 'Bearer '+ localStorage.getItem('token')}

              }).then(() => {
                mixin.methods.closeModal('Delete'+id)
                dispatch('getTasks', {status});

              }).catch(error => {
                console.log(error);
                if (error.response) {
                    let errors = error.response.data.error.errors;
                    mixin.methods.showErrors(errors);
                }
              });
        }
    },
}

export default task;