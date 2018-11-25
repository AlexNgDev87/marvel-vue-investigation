import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

// creating a vue instance, which contain an App component
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
