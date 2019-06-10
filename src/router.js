import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './components/NotFound.vue'
import Children from './components/children/Children.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        'a': NotFound,
      },
      beforeEnter: (to, from, next) => {
        next();
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About,
      children:[
        {
          path: 'children',
          name: 'children',
          component: Children
        }
      ]
    },
    {
      path: '/NotFound',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '*',
      redirect: '/NotFound',
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
