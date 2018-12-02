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
      component: () => import('./character/CharacterListPage.vue'),
    },
    {
      path: '/characters/:id',
      name: 'charactersDetail',
      component: () => import('./character/CharacterDetailPage.vue'),
    },
  ],
});
