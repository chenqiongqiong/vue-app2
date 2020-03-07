import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
// var a = 123;
new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
