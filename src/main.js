import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import router from './router'

Vue.use(Vuetify, {
    theme: {
        primary: '#ff760c',
        secondary: '#4b4948',
        accent: '#8c9eff',
        error: '#b71c1c'
    }
});
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
