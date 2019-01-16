// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios';
import VueAxios from 'vue-axios';

import VCharts from 'v-charts';

import App from './App';
import router from './router';
import store from './store';

Vue.use(ElementUI);
Vue.use(VueAxios, axios);
Vue.use(VCharts);

Vue.config.productionTip = false;

// axios.defaults.baseURL = 'http://localhsot:3000/api';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
