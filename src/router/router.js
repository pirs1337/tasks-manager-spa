import { createRouter, createWebHistory } from 'vue-router'

import Index from '../views/public/Index.vue';
import Register from '../views/unauth/auth/Register.vue';
import Login from '../views/unauth/auth/Login.vue';
import Dashboard from '../views/auth/Dashboard.vue';

const routes = [
    { 
      path: '/', 
      component:  Index,
      name: 'main'
    },
    { 
      path: '/register', 
      component:  Register,
      name: 'register'
    },
    { 
      path: '/login', 
      component:  Login,
      name: 'login'
    },
    { 
      path: '/dashboard', 
      component: Dashboard,
      name: 'dashboard'
    },
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes, 
  })

export default router;