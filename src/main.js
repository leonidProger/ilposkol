import Vue from 'vue'
import App from './App.vue'



import VueRouter from 'vue-router'
import Footer from './assets/Footer/Footer'
import Header from './assets/Header/Header'
import LeftMenu from './assets/Left-menu/Left-menu'
import Main from './assets/Main/Content-Main'
import MainPages from './assets/Pages/PageMain/Page-Main'
import Production from './assets/Pages/Production/Production'
import About from './assets/Pages/About/About'
import Flexible_stone from './assets/Pages/Flexible_stone/Flexible-stone'
import Options from './assets/Pages/Options/Options'
import Freski from './assets/Pages/Freski/Freski'
import Video from './assets/Pages/Video/Video'
import Contacts from './assets/Pages/Contacts/Contacts'




Vue.component('containerFooter', Footer);
Vue.component('containerHeader', Header);
Vue.component('containerMain', Main);
Vue.component('left-menu', LeftMenu);

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {path: '/', component: MainPages},
    {path: '/production', component: Production},
    {path: '/about', component: About},
    {path: '/flexible-stone', component: Flexible_stone},
    {path: '/options', component: Options},
    {path: '/freski', component: Freski},
    {path: '/video', component: Video},
    {path: '/contacts', component: Contacts},
    {path: '*', redirect: "/"}
  ],
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
