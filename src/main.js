import { createApp } from 'vue';
import App from './App.vue';
import router from '../src/router/router';
import store from './vuex/auth.js';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');

app.mixin({
    created() {
      this.apiUrl = 'http://127.0.0.1:8000/api/v1/';
      const title = this.title
      if (title) {
        document.title = title
      }

    //   if (localStorage.getItem('token')) {
    //       this.isAuth = true;
    //   }

    }
})