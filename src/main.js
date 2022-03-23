import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import Cards from './components/Cards';
import CardDetails from './components/CardDetails';

Vue.use(VueRouter);

const routes = [
  {path:'/', component:Home},
  {path:'/cards', component:Cards},
  {path:'/cards/:card_number', component:CardDetails}
];

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
