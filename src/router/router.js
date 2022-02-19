import { createRouter, createWebHistory } from 'vue-router'
import store from '../store';

import Index from '../views/unauth/Index.vue';
import Register from '../views/unauth/auth/Register.vue';
import Login from '../views/unauth/auth/Login.vue';
import Dashboard from '../views/auth/Dashboard.vue';
import CreateTask from '../views/auth/task/Create.vue';

const routes = [
    { 
      path: '/', 
      component: Index,
      name: 'main'
    },
    { 
      path: '/register', 
      component: Register,
      name: 'register',
    },
    { 
      path: '/login', 
      component: Login,
      name: 'login',
    },
    { 
      path: '/dashboard/:id', 
      component: Dashboard,
      name: 'dashboard',
      meta: {auth: true}
    },
    { 
      path: '/task/create', 
      component: CreateTask,
      name: 'createTask',
      meta: {auth: true}
    },
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes, 
  })

  router.beforeEach(async (to, from, next) => {
    const requireAuth = to.matched.some(redcord => redcord.meta.auth);

    await store.dispatch('getAuthUser');
    const isAuthenticated = store.getters.authUser;

    if (requireAuth && !isAuthenticated) {
      next({name: 'login'});
    }
    else {
      if (!requireAuth && isAuthenticated) {
        next({name: 'dashboard', params: {
              id: isAuthenticated.id
        }})
      } else {
         next();
      }
    }
  })

export default router;