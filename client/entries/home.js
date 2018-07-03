// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from '../pages/index/index.vue';
import router from '../router/index.js';
import 'iview/dist/styles/iview.css';
// import {Button, Table, Upload} from 'iview';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

Vue.use(ElementUI);
Vue.config.productionTip = false;
// Vue.component('Button', Button);
// Vue.component('Table', Table);
// Vue.component('Upload', Upload);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
});
// require('bootstrap/dist/css/bootstrap.css');
// require('bootstrap/dist/js/bootstrap.min');
