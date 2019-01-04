import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import vocabu from '@/components/vocabu'
import result from '@/components/result'
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
    },
    {
      path: '/result',
      name: 'result',
      component: result
    }
  ]
})
