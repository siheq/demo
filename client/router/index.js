import Vue from 'vue';
import Router from 'vue-router';
import slidePicture from '@/components/mainPage/SlidePicture.vue';
import homePage from '@/components/HelloWorld.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'slide',
      component: slidePicture,
    },
    {
      path: '/home',
      name: 'home',
      component: homePage,
    },
  ],
});
