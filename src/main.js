import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import vueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(vueResource)

// 全局守卫
// router.beforeEach((to, from, next) => {
//   if(to.path == '/about') {
//     alert('About页面不可进入，即将跳转到404页面！');
//     next('/NotFound');
//   }
//   next();
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
