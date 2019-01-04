import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import vocabu from '@/components/vocabu'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/vocabu',
      name: 'vocabu',
      component: vocabu
    }
  ]
})
