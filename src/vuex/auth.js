import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        isAuth: false
      }
    },
    mutations: {
      changeAuthState (state) {
        state.isAuth = true;
      }
    },
    actions: {
        ifUserIsAuth(context){
            if (localStorage.getItem('token')) {
                context.commit('changeAuthState');
            }
        }
    }
})

export default store;