import Vue from 'vue';
import Router from 'vue-router';
import slidePicture from '@/components/mainPage/slidePicture.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'slide',
      component: slidePicture,
    },
  ],
});
