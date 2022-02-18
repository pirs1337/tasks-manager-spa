import mixin from '../mixins/Msg.js';
import axios from '../axios/config.js';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';


const task = {
    state () {
      return {
          tasks: []
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
       },
    },
    getters: {
       allTasks(state){
        return state.tasks;
       },
    },
    actions: {
        create({ctx}, {e, formData}){
                axios.post('tasks', formData, {
                    headers: {'Authorization': 'Bearer '+ localStorage.getItem('token')}
                })
                    .then( () => {
                        mixin.methods.hideErrors();
                        mixin.methods.showSuccessMsg(e.target, 'Задача создана');
                        e.target.reset();
                    })
                    .catch(error => {
                        if (error.response) {
                            let errors = error.response.data.error.errors;
                            mixin.methods.showErrors(errors);
                        }
                    })
        },
        getAll({commit}){
          commit('emptyTasks');
            axios.get('tasks', {
                headers: {'Authorization': 'Bearer '+ localStorage.getItem('token')}
            })
                .then(res => {
                    commit('add', res.data.data);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        edit({ctx}, {e, formData}){
            axios({
                method: 'PUT',
                url: `tasks/${formData.id}`,
                data: formData,
                headers: {'Authorization': 'Bearer '+ localStorage.getItem('token')}

              }).then(() => {
                  mixin.methods.showSuccessMsg(e.target, 'Задача редактирована');
              }).catch(error => {
                if (error.response) {
                    let errors = error.response.data.error.errors;
                    mixin.methods.showErrors(errors);
                }
              });
        },
        delete({commit, dispatch}, {id}){
            axios({
                method: 'DELETE',
                url: `tasks/${id}`,
                data: id,
                headers: {'Authorization': 'Bearer '+ localStorage.getItem('token')}

              }).then((res) => {
                  commit('emptyTasks');
                  dispatch('getAll');

                 var myModalEl = document.querySelector(`#exampleModalDelete${id}`);
                 var myModal = bootstrap.Modal.getInstance(myModalEl);
                 myModal.hide();

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