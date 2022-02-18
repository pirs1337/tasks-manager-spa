import router from '../router/router';
import mixin from '../mixins/Msg.js';
import axios from '../axios/config.js';

const auth = {
    state () {
      return {
          authUser: null,
      }
    },
    mutations: {
        setAuthUser (state, user) {
            state.authUser = user;
        }
    },
    getters: {
        authUser (state) {
            return state.authUser;
        }
    },
    actions: {
        register(context, formData){
            console.log(formData);
            axios.post('register', formData)
            .then(()=> {
                router.push({name: 'login'});
            }).catch(error => {
                let errors = error.response.data.error.errors;
                mixin.methods.showErrors(errors);
            })
        },
        async login({dispatch}, formData){
            try {
                let res = await axios.post('login', formData);
                let token = res.data.token;
                localStorage.setItem('token', token);

                let user = await dispatch('getAuthUser');
                console.log(user);
                router.push({name: 'dashboard', params: {
                        id: user.data.data.id
                }});

            } catch (error) {
                if (error.response) {
                    let errors = error.response.data.error;

                    if (errors.errors) {
                        mixin.methods.showErrors(errors.errors);
                    } else {
                        mixin.methods.showErrors(errors);
                    }
                } else {
                    console.log(error);
                }  
            }
        },
        async getAuthUser({commit}) {
            try {
                let user = await axios.get('/user/auth', {
                    headers: {'Authorization': 'Bearer '+ localStorage.getItem('token')}
                });
                commit('setAuthUser', user.data.data);

                return user;
            } catch (error) {
                console.log(error);
            }
        },
       async logout({dispatch, commit, state}){
            try {
                await dispatch('getAuthUser');
                localStorage.removeItem('token');
                commit('setAuthUser', null);
                router.push({name: 'login'})
            } catch (error) {
                console.log(error);
            }
       }
    },
}

export default auth;