import Vue from 'vue';
import Router from 'vue-router';
import content from '../components/kanban/Content';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'content',
      component: content,
    },
  ],
});