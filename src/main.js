import { createApp } from 'vue';
import App from './App.vue';
import router from '../src/router/router';
import store from './store/index.js';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');

app.mixin({
    created() {
      const title = this.title
      if (title) {
        document.title = title
      }
    }
})


