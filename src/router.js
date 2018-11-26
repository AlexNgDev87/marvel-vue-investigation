import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './home/HomePage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/characters',
      name: 'characters',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./list/CharacterList.vue'),
    },
  ],
});
