import {createApp} from 'vue';
import App from './App.vue';
import NavPage from './components/NavPage.vue';
import './index.scss';
import {createWebHashHistory, createRouter} from 'vue-router';

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: NavPage}
  ]
});
const app = createApp(App);
app.use(router);
app.mount('#app');
